import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  entry: ["src/index.ts"],
  format: ["cjs"],
  minify: !options.watch,
}));
