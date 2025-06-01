import { createMiddleware } from "@solidjs/start/middleware";
import { getCookie } from "vinxi/http";
import api from "#api";

export default createMiddleware({
  onRequest: (event) => {
    api.use({
      onRequest({ request }) {
        const cookie = getCookie("connect.sid");
        request.headers.set("Cookie", `connect.sid=${cookie}`);
      },
    });
  },
});
