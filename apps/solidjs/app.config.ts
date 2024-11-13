import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "github-pages",
    baseURL: process.env.BASE_PATH,
  },
});
