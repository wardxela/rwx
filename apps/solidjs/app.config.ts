import path from "node:path";
import { defineConfig } from "@solidjs/start/config";
import devtools from "solid-devtools/vite";

export default defineConfig({
  middleware: "src/middleware.ts",
  vite: {
    envDir: path.join("..", ".."),
    plugins: [
      devtools({
        /* features options - all disabled by default */
        autoname: true, // e.g. enable autoname
      }),
    ],
  },
});
