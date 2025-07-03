/// <reference types="vite/client" />\
interface ImportMetaEnv {
  readonly VITE_LINKEDIN_CLIENT_ID: string
  readonly VITE_LINKEDIN_CLIENT_SECRET: string
  readonly VITE_LINKEDIN_REDIRECT_URI: string
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
