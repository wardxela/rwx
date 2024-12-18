import { BlogArticleCardLink, BlogSidebar } from "~/features/blog";

export default function Blog() {
  return (
    <div class="container grid grid-cols-[1fr_270px] gap-7 pt-16 pb-24">
      <div>
        <div class="mb-10">
          <h1 class="font-semibold text-4xl">Все статьи</h1>
        </div>
        <div class="grid grid-cols-2 gap-7">
          <BlogArticleCardLink />
          <BlogArticleCardLink />
          <BlogArticleCardLink />
          <BlogArticleCardLink />
        </div>
      </div>
      <BlogSidebar />
    </div>
  );
}
