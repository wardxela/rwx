import { query } from "@solidjs/router";
import api from "./api";

export const getProfile = query(async () => {
  const response = await api.GET("/users/me");
  return response.data;
}, "profile");
