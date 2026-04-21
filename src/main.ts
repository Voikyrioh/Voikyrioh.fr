import { createApp, type FunctionPlugin } from 'vue'
import './style.css'
import App from './App.vue'
import vueTranslate from '@Voikyrioh/vue-translate'
import router from './router'

const availableLanguage = ['fr-FR', 'en-US'] as const
type Language = typeof availableLanguage[number]

function getDefaultLanguage(): Language {
  return availableLanguage.find(lang =>
    lang.toLowerCase().startsWith(navigator.language.toLowerCase().slice(0, 2))
  ) ?? availableLanguage[0]
}

createApp(App)
  .use(vueTranslate as FunctionPlugin, {
    defaultLang: getDefaultLanguage(),
    translationFilesUrl: '/translations/lang',
    availableLanguage: [...availableLanguage],
  })
  .use(router)
  .mount('#app')
