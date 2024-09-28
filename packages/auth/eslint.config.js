import baseConfig, { restrictEnvAccess } from "@rwx/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...restrictEnvAccess];
