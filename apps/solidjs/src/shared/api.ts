import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";

const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

export default api;
