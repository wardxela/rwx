import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";

const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_NESTJS_URL,
});

export default api;
