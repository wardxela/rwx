import type { Component } from "solid-js";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type BlogArticleCardLinkProps = {};

export const BlogArticleCardLink: Component<BlogArticleCardLinkProps> = () => {
  return (
    <a
      href="/blog/1"
      class="hover:-translate-y-2 block rounded-2xl border border-gray-200 transition hover:shadow-lg"
    >
      <img
        src="/article-example.png"
        class="aspect-[1.64/1] w-full rounded-t-2xl object-cover"
        alt="article"
      />
      <div class="p-5">
        <h6 class="mb-3 font-semibold text-xl">
          Lorem Ipsum is simply dummy text of the printing
        </h6>
        <div class="mb-3 flex items-center gap-2">
          <img src="/calendar.svg" alt="date" />
          <div class="text-neutral-600">Jan 24, 2024</div>
        </div>
        <div class="text-lg text-neutral-600">
          Looking for an amazing & well-functional LearnPress WordPress
          Theme?...
        </div>
      </div>
    </a>
  );
};
