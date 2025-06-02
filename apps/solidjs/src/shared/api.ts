import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";
import { isServer } from "solid-js/web";
import { BACKEND_URL } from "./const";

const api = createClient<paths>({
  // baseUrl: isServer ? "http://nestjs:3001" : BACKEND_URL,
  baseUrl: BACKEND_URL,
  credentials: "include",
});

export default api;
