import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";
import { isServer } from "solid-js/web";

const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
});

if (isServer) {
  const { getCookie } = await import("vinxi/http");
  api.use({
    onRequest({ request }) {
      const cookie = getCookie("connect.sid");
      request.headers.set("Cookie", `connect.sid=${cookie}`);
    },
  });
}

export default api;
