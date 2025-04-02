import { query } from "@solidjs/router";
import api from "./api";

export const getMe = query(async () => {
  const response = await api.GET("/users/me");
  return response.data;
}, "/users/me");
