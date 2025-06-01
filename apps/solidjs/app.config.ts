import path from "node:path";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "bun",
  },
  vite: {
    envDir: path.join("..", ".."),
  },
});
