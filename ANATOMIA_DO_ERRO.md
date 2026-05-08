# Anatomia do Erro: O Efeito Cascata entre Duas Bibliotecas

Este documento explica tecnicamente por que a aplicação BielQuest crashou no cenário mais realista: **Interdependência entre libs**.

## 1. O Fluxo de Execução
No arquivo `app.ts`, importamos o tema:
```ts
import { THEME_CONFIG } from '@demo/shared-ui';
```

## 2. A Reação em Cadeia Cruzada
1.  O motor do JS entra na âncora `@demo/shared-ui`.
2.  A âncora tenta exportar o `CardComponent`.
3.  O `CardComponent` faz um import da **outra lib**: `import { AuthService } from '@demo/shared-services'`.
4.  O JS entra na âncora `@demo/shared-services`.
5.  A âncora tenta exportar o `AuthService`.
6.  O `AuthService` tenta importar o tema de volta da **primeira lib**: `import { THEME_CONFIG } from '@demo/shared-ui'`.

## 3. O Deadlock Fatal
Neste momento:
- A `@demo/shared-ui` está esperando a `@demo/shared-services` terminar.
- A `@demo/shared-services` está esperando a `@demo/shared-ui` terminar.

Como o `THEME_CONFIG` está no final do arquivo `index.ts` da `shared-ui`, ele ainda não foi "visto" pelo JavaScript. O `AuthService` recebe um `undefined` ou estoura um `ReferenceError` ao tentar acessar `THEME_CONFIG.primaryColor` estaticamente.

## 4. Por que isso é "Pior" que o erro anterior?
Este cenário é mais difícil de detectar porque:
1.  As libs parecem independentes à primeira vista.
2.  O erro acontece por causa da **forma como exportamos** (a âncora) e não apenas pelo código lógico.
3.  Reflete o problema real do SmartVtc, onde a infraestrutura de UI e os serviços de negócio ficaram entrelaçados pelas âncoras gigantes.

## 5. A Solução Definitiva
Para resolver isso, as constantes de tema deveriam estar em uma terceira lib (ex: `@demo/shared-tokens`) ou em um ponto de entrada que não dependa de componentes que, por sua vez, dependem de serviços.

