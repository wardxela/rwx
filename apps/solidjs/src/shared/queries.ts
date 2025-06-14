import type { paths } from "@rwx/api";
import { action, json, query } from "@solidjs/router";
import api from "./api";

export const getMe = query(async () => {
  const response = await api.GET("/users/me");
  return response.data;
}, "/users/me");

export const getPosts = query(
  async (query?: paths["/blog/posts"]["get"]["parameters"]["query"]) => {
    const response = await api.GET("/blog/posts", {
      params: { query },
    });
    return response.data;
  },
  "/blog/posts",
);

export const getMyPosts = query(
  async (query?: paths["/blog/posts/mine"]["get"]["parameters"]["query"]) => {
    const response = await api.GET("/blog/posts/mine", { params: { query } });
    return response.data;
  },
  "/blog/posts/mine",
);

export const getPost = query(async (id: string) => {
  const response = await api.GET("/blog/posts/{id}", {
    params: { path: { id } },
  });
  if (!response.data) {
    throw new Error("Запись не найдена");
  }
  return response.data;
}, "/blog/posts/{id}");

export const getPostComments = query(async (id) => {
  const response = await api.GET("/blog/posts/{id}/comments", {
    params: { path: { id } },
  });
  return response.data;
}, "/blog/posts/{id}/comments");

export const getCategories = query(async () => {
  const response = await api.GET("/categories");
  return response.data ?? [];
}, "/categories");

export const getBlogCategories = query(async () => {
  const response = await api.GET("/blog/categories");
  return response.data ?? [];
}, "/blog/categories");

export const getCourseCategories = query(async () => {
  const response = await api.GET("/courses/categories");
  return response.data ?? [];
}, "/courses/categories");

export const getCourseAuthors = query(async () => {
  const response = await api.GET("/courses/authors");
  return response.data ?? [];
}, "/courses/authors");

export const getTags = query(async () => {
  const response = await api.GET("/tags");
  return response.data ?? [];
}, "/tags");

export const uploadFileAction = action(async (formData: FormData) => {
  const image = await api.POST("/files/upload", {
    // @ts-expect-error
    body: formData,
  });
  if (image.data) {
    image.data.url;
  }
  return json(image.data?.url, { revalidate: "nothing" });
}, "/files/upload:post");

export const getCourses = query(
  async (query?: paths["/courses"]["get"]["parameters"]["query"]) => {
    const response = await api.GET("/courses", {
      params: { query },
    });
    return response.data;
  },
  "/courses",
);

export const getMyCourses = query(
  async (query?: paths["/courses/mine"]["get"]["parameters"]["query"]) => {
    const response = await api.GET("/courses/mine", {
      params: { query },
    });
    return response.data;
  },
  "/courses/mine",
);

export const getCourse = query(async (id: string) => {
  const response = await api.GET("/courses/{id}", {
    params: { path: { id } },
  });
  if (!response.data) {
    throw new Error("Курс не найден");
  }
  return response.data;
}, "/courses/{id}");

export const getCourseStructure = query(
  (id: string) =>
    api
      .GET("/courses/{id}/structure", { params: { path: { id } } })
      .then((response) => {
        if (!response.data) {
          throw new NotFoundError();
        }
        return response.data;
      }),
  "/courses/{id}/structure",
);

export const getCourseReviews = query(
  (id: string) =>
    api
      .GET("/courses/{id}/reviews", { params: { path: { id } } })
      .then((response) => response.data ?? []),
  "/courses/{id}/reviews",
);

export const getMyCourseReview = query(
  (id: string) =>
    api
      .GET("/courses/{id}/reviews/mine", { params: { path: { id } } })
      .then((response) => {
        if (!response.data) {
          throw new NotFoundError();
        }
        return response.data;
      }),
  "/courses/{id}/reviews/mine",
);

export const getCourseLesson = query(
  (id: string) =>
    api
      .GET("/courses/lessons/{id}", { params: { path: { id } } })
      .then((response) => {
        if (!response.data) {
          throw new NotFoundError();
        }
        return response.data;
      }),
  "/courses/lessons/{id}",
);

export const getMessages = query(async () => {
  const response = await api.GET("/messages");
  return response.data ?? [];
}, "/messages");

export const getReviews = query(async () => {
  const response = await api.GET("/courses/reviews");
  return response.data ?? [];
}, "/reviews");

export class NotFoundError extends Error {}
