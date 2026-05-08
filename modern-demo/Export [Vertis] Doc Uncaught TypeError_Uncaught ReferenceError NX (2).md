# [Vertis] Doc Uncaught TypeError/Uncaught ReferenceError NX

##### Uncaught TypeError/Uncaught ReferenceError

Esse erro acontece por conta de um erro que acontece durante a migração de componentes muito utilizados com módulos muito grandes. 

O que acontece, quando fazemos a migração utilizando NX nós criamos "libs" que podem ser reutilizadas dentro de vários projetos/apps. Nós utilizamos essa estrutura:

![d94d545a-d795-4161-8a8d-77a5a18fc124.png](https://noto-bucket.bielsolososdev.space/d94d545a-d795-4161-8a8d-77a5a18fc124.png)

Podemos ver dentro dessa estrutura esse index.ts que são as "ancoras" que tem como principal responsabilidade ser onde exportamos nosso código typescript para ser reutilizado pelas aplicações. 

```ts
//index.ts
export * from './senha-segura-routing.module';
export * from './senha-segura.module';
```

Nesse exemplo exportamos o módulo principal e as rotas desse módulo. Por ser pouco conteúdo é meiod dificil causarmos o problema que originou essa documentação. 

##### Como pode acontecer esse erro? 

Temos alguns módulos que podem ficar bem grandes. Tanto em features quanto no shared por exemplo. O pipes module:

```ts
export * from './pipes.module';
export * from './avamar-color-success/avamar-color-success.pipe';
export * from './combobox-to-string/combobox-to-string-format.pipe';
export * from './custom-column-color/custom-column-color.pipe';
export * from './default-icon/default-icon.pipe';
export * from './fill-empty-values/fill-empty-values.pipe';
export * from './format-date/format-date.pipe';
export * from './handle-active-icon/handle-active-icon.pipe';
export * from './highlighter/highlighter.pipe';
export * from './host-icon/host-icon.pipe';
export * from './limit-string-size/limit-string-size.pipe';
export * from './random-width/random-width.pipe';
export * from './severity-color/severity-color.pipe';
export * from './severity-icon/severity-icon.pipe';
export * from './string-format/string-format.pipe';
export * from './tag-color/tag-color.pipe';
export * from './text-add-tooltip/text-add-tooltip.pipe';
```

O que acontece é o seguinte quando importamos qualquer item da lib de pipes module 

```ts
import { FormatDateType } from '@shared/pipes';
```

Toda a ancora é importada. Ou seja apesar de pedirmos apenas um import pegamos **TODOS** os imports dentro dessa Ancora. Isso inclui as dependências dessas dependências. 

O erro ocorre devido ao comportamento de Efeito Cascata das ancoras (index.ts). Ao importar uma simples constante de uma Lib, o Angular é forçado a resolver todos os outros exports daquela mesma âncora. Se houver um cruzamento de dependências (ex: uma Service na âncora que usa um Componente da mesma âncora), o JavaScript tenta acessar a classe antes de ela ter sido totalmente definida na memória, resultando em undefined

Esse caso aconteceu quando eu migrei o SharedModule do SmartVtc. Ficou um módulo grande demais e ficou causando esses erros o tempo todo na hora de fazer imports. A solução foi fazer uma refatoração dentro do shared/ui e quebrar em várias Ancoras diferentes de imports. 

```ts
      //tsconfig.base.json
      // Antes eu tinha apenas esse primeiro import.
      "@shared/ui": ["libs/shared/ui/src/index.ts"],
      // Quebra granular de imports. 
      "@shared/ui/models": ["libs/shared/ui/src/models/index.ts"],
      "@shared/ui/utils": ["libs/shared/ui/src/utils/index.ts"],
      "@shared/ui/prime": ["libs/shared/ui/src/shared/prime/index.ts"],
      "@shared/ui/common": ["libs/shared/ui/src/shared/components/index.ts"],
      "@shared/ui/charts": ["libs/shared/ui/src/components/chart/index.ts"],
      "@shared/ui/tables": ["libs/shared/ui/src/components/table/index.ts"],
      "@shared/ui/navigation": ["libs/shared/ui/src/components/navigation/index.ts"],
      "@shared/ui/toast": ["libs/shared/services/src/index.ts"],
```