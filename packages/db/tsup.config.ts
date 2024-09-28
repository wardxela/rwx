import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  clean: true,
  entry: ["src/index.ts", "src/client.ts", "src/schema.ts"],
  format: ["cjs"],
  minify: !options.watch,
}));
