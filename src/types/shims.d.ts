// Ambient override for @Voikyrioh/vue-translate, which ships source .ts
// that doesn't satisfy verbatimModuleSyntax. This declaration takes precedence
// over the package's index.ts so vue-tsc doesn't error on it.
declare module '@Voikyrioh/vue-translate' {
  import type { Plugin } from 'vue'
  const vueTranslate: Plugin
  export default vueTranslate
}
