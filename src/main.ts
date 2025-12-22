import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vueTranslate from 'vue-translate'

const apiTranslationUrl = 'http://localhost:8080/api/v1/website/translations'
fetch(new URL(`${apiTranslationUrl}/available`)).then(res => res.json()).then((availableLanguage: `${string}-${string}`[]) => {
    createApp(App)
        .use(vueTranslate, {
            defaultLang: availableLanguage[0],
            translationFilesUrl: `${apiTranslationUrl}/lang`,
            availableLanguage
        })
        .mount('#app')
})
