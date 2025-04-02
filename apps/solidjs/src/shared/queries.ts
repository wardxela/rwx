import { query } from "@solidjs/router";
import { getCookie } from "vinxi/http";
import api from "./api";

export const getMe = query(async () => {
  "use server";
  const cookie = getCookie("connect.sid");
  const response = await api.GET("/users/me", {
    headers: {
      Cookie: `connect.sid=${cookie}`,
    },
  });
  return response.data;
}, "profile");
