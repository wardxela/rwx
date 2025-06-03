import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";
import { isServer } from "solid-js/web";

const api = createClient<paths>({
  baseUrl: isServer
    ? import.meta.env.VITE_API_SERVER_URL
    : import.meta.env.VITE_API_URL,
  credentials: "include",
});

export default api;
