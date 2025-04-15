import { query } from "@solidjs/router";
import api from "./api";

export const getMe = query(async () => {
  const response = await api.GET("/users/me");
  return response.data;
}, "/users/me");

export const getPosts = query(async () => {
  const response = await api.GET("/blog/posts");
  return response.data;
}, "/blog/posts");

export const getMyPosts = query(async () => {
  const response = await api.GET("/blog/my-posts");
  return response.data;
}, "/blog/mine");

export const getPost = query(async (id: string) => {
  const response = await api.GET("/blog/posts/{id}", {
    params: { path: { id } },
  });
  if (!response.data) {
    throw new Error("Запись не найдена");
  }
  return response.data;
}, "/blog/posts/{id}");

export const getCategories = query(async () => {
  const response = await api.GET("/categories");
  return response.data ?? [];
}, "/categories");

export const getTags = query(async () => {
  const response = await api.GET("/tags");
  return response.data ?? [];
}, "/tags");
