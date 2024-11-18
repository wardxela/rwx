import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";

const api = createClient<paths>({
  baseUrl: import.meta.env.VITE_NESTJS_URL,
});

api.use({
  onRequest() {
    // TODO
    // const cookiesString = cookies().toString();
    // request.headers.set("Cookie", `cookie-name=${cookiesString}`);
    // return request;
  },
  // onResponse({ response }) {
  //   return response;
  // },
});

export default api;
