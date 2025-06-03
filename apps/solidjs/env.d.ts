interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
