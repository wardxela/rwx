import baseConfig from "@rwx/eslint-config/base";
import reactConfig from "@rwx/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...reactConfig];
