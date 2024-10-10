import baseConfig from "@rwx/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "test/**", "**/*spec.ts"],
  },
  ...baseConfig,
];
