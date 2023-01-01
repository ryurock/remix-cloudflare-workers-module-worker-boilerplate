/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module '__STATIC_CONTENT_MANIFEST' {
  const manifestJSON: string
  export default manifestJSON
}

interface Env {
  __STATIC_CONTENT: KVNamespace
  STAGE: string
  HOST: string
  ROOT_URL: string
  SERVICE_NAME: string
  GOOGLE_OAUTH_CLIENT_ID: string
  GOOGLE_OAUTH_CLIENT_SECRET: string
  DB: D1Database
}