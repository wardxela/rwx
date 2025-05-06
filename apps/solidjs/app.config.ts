import path from "node:path";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: false,
  server: {},
  vite: {
    envDir: path.join("..", ".."),
  },
});
