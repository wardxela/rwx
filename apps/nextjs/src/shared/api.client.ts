import type { paths } from "@rwx/api";
import createClient from "openapi-fetch";

import { env } from "~/env";

const api = createClient<paths>({ baseUrl: env.NEXT_PUBLIC_NESTJS_URL });

export default api;
