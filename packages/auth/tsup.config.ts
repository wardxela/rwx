import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  entry: ["src/index.ts", "src/index.rsc.ts", "src/env.ts"],
  format: ["cjs"],
  minify: !options.watch,
}));
