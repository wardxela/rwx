import baseConfig, { restrictEnvAccess } from "@rwx/eslint-config/base";
import nextjsConfig from "@rwx/eslint-config/nextjs";
import reactConfig from "@rwx/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
