// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', icon:'fl_en.svg' },
      { code: 'ru', name: 'Russion', file: 'ru.json',icon:'fl_rus.svg' },
    ]
  },
  css: ['~/assets/css/style.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap' // Подключаем Roboto
        }
      ]
    }
  }

})