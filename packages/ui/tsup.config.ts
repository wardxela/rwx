import { defineConfig } from "tsup";

export default defineConfig((options) => {
  const minify = !options.watch;

  return [
    {
      clean: true,
      entry: ["src/lib/utils.ts"],
      outDir: "dist/lib",
      format: ["esm"],
      dts: true,
      minify,
    },
    {
      clean: true,
      entry: ["src/components/*.tsx"],
      outDir: "dist/components",
      format: ["esm"],
      dts: true,
      minify,
      esbuildOptions(options) {
        options.jsx = "preserve";
      },
      outExtension: () => ({ js: ".jsx" }),
    },
  ];
});
