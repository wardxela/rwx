import baseConfig from "@rwx/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["src/schema.d.ts"],
  },
  ...baseConfig,
];
