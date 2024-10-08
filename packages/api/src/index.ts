import createClient from "openapi-fetch";

import type { paths } from "./schema.d.ts";

const api = createClient<paths>({ baseUrl: "http://localhost:3001" });

export default api;
