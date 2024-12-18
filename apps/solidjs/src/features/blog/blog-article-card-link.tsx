import type { Component } from "solid-js";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export type BlogArticleCardLinkProps = {};

export const BlogArticleCardLink: Component<BlogArticleCardLinkProps> = () => {
  return (
    <a href="/blog/1" class="@container rounded-2xl transition hover:shadow-lg">
      <div class="flex h-full @lg:flex-row flex-col rounded-2xl border border-gray-200">
        <img
          src="/article-example.png"
          class="@lg:h-auto h-52 @lg:min-h-62 @lg:max-w-1/3 rounded-t-2xl @lg:rounded-l-2xl @lg:rounded-tr-none object-cover"
          alt="article"
        />
        <div class="@sm:p-5 p-4">
          <h6 class="mb-3 font-semibold @sm:text-xl">
            Lorem Ipsum is simply dummy text of the printing
          </h6>
          <div class="mb-3 flex items-center gap-2">
            <img src="/calendar.svg" alt="date" />
            <div class="@sm:text-base text-neutral-600 text-sm">
              Jan 24, 2024
            </div>
          </div>
          <div class="@sm:text-lg text-neutral-600">
            Looking for an amazing & well-functional LearnPress WordPress
            Theme?...
          </div>
        </div>
      </div>
    </a>
  );
};
