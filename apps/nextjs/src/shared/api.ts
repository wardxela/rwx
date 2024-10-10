import type { paths } from "@rwx/api";
import { cookies } from "next/headers";
import createClient from "openapi-fetch";

import { env } from "~/env";

const api = createClient<paths>({ baseUrl: env.NEXT_PUBLIC_NESTJS_URL });

api.use({
  onRequest({ request }) {
    const cookiesString = cookies().toString();
    request.headers.set("Cookie", `cookie-name=${cookiesString}`);
    return request;
  },
  // onResponse({ response }) {
  //   return response;
  // },
});

export default api;
