export interface paths {
  "/auth/yandex": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_loginYandex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/github": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_loginGithub"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/yandex/callback": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_callbackYandex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/github/callback": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_callbackGithub"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/logout": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["AuthController_logout"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["UsersController_findMe"];
    put?: never;
    post: operations["UsersController_updateMe"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/upload": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_uploadFile"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/{fileName}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["FilesController_getFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/blog/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["BlogController_getAllPosts"];
    put?: never;
    post: operations["BlogController_createPost"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/blog/posts/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["BlogController_getPost"];
    put: operations["BlogController_updatePost"];
    post?: never;
    delete: operations["BlogController_deletePost"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/blog/posts/mine": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["BlogController_getMyPosts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/blog/posts/{id}/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["BlogController_getPostComments"];
    put?: never;
    post: operations["BlogController_leavePostComment"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/blog/categories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["BlogController_getCategories"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/categories": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["CategoriesController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tags": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["TagsController_findAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/contacts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ContactsController_getAll"];
    put?: never;
    post: operations["ContactsController_sendMessage"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/contacts/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete: operations["ContactsController_deleteMessage"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/courses": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["CoursesController_getAllCourses"];
    put?: never;
    post: operations["CoursesController_createCourse"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/courses/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["CoursesController_updateCourse"];
    post?: never;
    delete: operations["CoursesController_deleteCourse"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/courses/mine": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["CoursesController_getMyCourses"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    UserDto: {
      id: string;
      firstName: string;
      lastName: string;
      email?: string | null;
      image: string | null;
      bio: string | null;
      roles: string[];
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
    };
    UpdateUserDto: {
      firstName?: string;
      lastName?: string;
      /** Format: uri */
      image?: string;
      bio?: string;
    };
    FileDto: {
      url: string;
    };
    PostCreateDto: {
      title: string;
    };
    PostUpdateDto: {
      title?: string;
      content?: Record<string, never>;
      excerpt?: string;
      /** Format: uri */
      image?: string;
      published?: boolean;
      categoryId?: number;
      tags?: number[];
    };
    PostAuthorDto: {
      id: string;
      firstName: string;
      lastName: string;
      image: string | null;
      bio: string | null;
    };
    CategoryDto: {
      id: number;
      name: string;
      description?: string | null;
    };
    TagDto: {
      id: number;
      name: string;
    };
    PostDto: {
      id: string;
      title: string;
      content: Record<string, never>;
      excerpt: string | null;
      image: string | null;
      published: boolean;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      commentsCount?: Record<string, never>;
      author: components["schemas"]["PostAuthorDto"];
      category?: components["schemas"]["CategoryDto"];
      tags: components["schemas"]["TagDto"][];
    };
    PostsDto: {
      page: components["schemas"]["PostDto"][];
      total: number;
    };
    CommentAuthor: {
      id: string;
      firstName: string;
      lastName: string;
      image: string | null;
      bio: string | null;
    };
    CommentDto: {
      id: string;
      postId: string;
      content: string;
      author: components["schemas"]["CommentAuthor"];
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
    };
    CommentCreateDto: {
      content: string;
    };
    CategoryDtoCounted: {
      id: number;
      name: string;
      description?: string | null;
      count: Record<string, never>;
    };
    SendMessageDto: {
      name: string;
      /** Format: email */
      email: string;
      message: string;
    };
    MessageDto: {
      id: number;
      name: string;
      email: string;
      message: string;
      /** Format: date-time */
      createdAt: string;
    };
    CourseCreateDto: {
      title: string;
    };
    CourseDto: {
      id: string;
      title: string;
      description: string;
      price: number;
      oldPrice?: number;
      image: string | null;
      published: boolean;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      author: {
        id: string;
        firstName: string;
        lastName: string;
        image: string | null;
        bio: string | null;
      };
      duration: number;
      studentsCount: number;
      lessonsCount: number;
      category?: components["schemas"]["CategoryDto"];
    };
    CoursesDto: {
      page: components["schemas"]["CourseDto"][];
      total: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  AuthController_loginYandex: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_loginGithub: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_callbackYandex: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_callbackGithub: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_logout: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  UsersController_findMe: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserDto"];
        };
      };
    };
  };
  UsersController_updateMe: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserDto"];
        };
      };
    };
  };
  FilesController_uploadFile: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["FileDto"];
        };
      };
    };
  };
  FilesController_getFile: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        fileName: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  BlogController_getAllPosts: {
    parameters: {
      query?: {
        search?: string;
        tags?: number[];
        categories?: number[];
        limit?: number;
        offset?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PostsDto"];
        };
      };
    };
  };
  BlogController_createPost: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PostCreateDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  BlogController_getPost: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PostDto"];
        };
      };
    };
  };
  BlogController_updatePost: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PostUpdateDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  BlogController_deletePost: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  BlogController_getMyPosts: {
    parameters: {
      query?: {
        search?: string;
        tags?: number[];
        categories?: number[];
        limit?: number;
        offset?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["PostsDto"];
        };
      };
    };
  };
  BlogController_getPostComments: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CommentDto"][];
        };
      };
    };
  };
  BlogController_leavePostComment: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CommentCreateDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  BlogController_getCategories: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CategoryDtoCounted"][];
        };
      };
    };
  };
  CategoriesController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CategoryDto"][];
        };
      };
    };
  };
  TagsController_findAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["TagDto"][];
        };
      };
    };
  };
  ContactsController_getAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["MessageDto"][];
        };
      };
    };
  };
  ContactsController_sendMessage: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SendMessageDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  ContactsController_deleteMessage: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  CoursesController_getAllCourses: {
    parameters: {
      query?: {
        search?: string;
        authors?: string[];
        categories?: number[];
        minPrice?: number;
        maxPrice?: number;
        rating?: number;
        limit?: number;
        offset?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CoursesDto"];
        };
      };
    };
  };
  CoursesController_createCourse: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CourseCreateDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  CoursesController_updateCourse: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  CoursesController_deleteCourse: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  CoursesController_getMyCourses: {
    parameters: {
      query?: {
        search?: string;
        authors?: string[];
        categories?: number[];
        minPrice?: number;
        maxPrice?: number;
        rating?: number;
        limit?: number;
        offset?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["CoursesDto"];
        };
      };
    };
  };
}
