import path from "node:path";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  middleware: "src/middleware.ts",
  server: {
    preset: "bun",
  },
  vite: {
    envDir: path.join("..", ".."),
  },
});
