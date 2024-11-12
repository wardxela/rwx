import type { Component } from "solid-js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface BlogArticleCardLinkProps {}

export const BlogArticleCardLink: Component<BlogArticleCardLinkProps> = () => {
  return (
    <a
      href="/"
      class="block rounded-2xl border border-gray-200 transition hover:-translate-y-6 hover:shadow-lg"
    >
      <img
        src="/article-example.png"
        class="aspect-[1.64/1] w-full rounded-t-2xl object-cover"
        alt="article"
      />
      <div class="p-5">
        <h6 class="mb-3 text-xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing
        </h6>
        <div class="mb-3 flex items-center gap-2">
          <img src="/calendar.svg" alt="date" />
          <div class="text-neutral-600">Jan 24, 2024</div>
        </div>
        <div class="text-lg text-neutral-600">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
    </a>
  );
};
