import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";

const api = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_NESTJS_URL,
});

export default api;
