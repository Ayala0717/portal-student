/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_I18N_FALLBACK_LOCALE: string
  VITE_I18N_LOCALE: string
}

declare module 'virtual:i18next-loader' {
  const resources: never
  export default resources
}
