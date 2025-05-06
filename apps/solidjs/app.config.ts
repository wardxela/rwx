import path from "node:path";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {},
  vite: {
    envDir: path.join("..", ".."),
  },
});
