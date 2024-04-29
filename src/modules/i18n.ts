import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from 'virtual:i18next-loader'
import { fallbackLocale as fallbackLng, locale } from '../constats'

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng,
  ns: ['index']
})

export { default } from 'i18next'
