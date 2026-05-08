export * from "./lib/components/button/button.component";
export * from "./lib/components/card/card.component";
// O ERRO ACONTECE AQUI: As constantes no final fazem com que o AuthService
// (chamado pelo CardComponent acima) tente acessar THEME_CONFIG antes dele existir.
export * from "./lib/constants/theme.constants";
