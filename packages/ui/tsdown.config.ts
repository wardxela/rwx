import { defineConfig } from "tsdown";
import solidPlugin from "vite-plugin-solid";

// @ts-expect-error caused by solidPlugin types mismatch :(
export default defineConfig((options) => {
  const minify = !options.watch;

  return [
    {
      entry: ["src/lib/utils.ts", "src/components/*.tsx"],
      outDir: "dist",
      format: ["esm"],
      dts: true,
      minify,
      noExternal: [/^@kobalte\/core\//],
      platform: "neutral",
      plugins: [solidPlugin({ ssr: true })],
    },
  ];
});
