import type { RouteSectionProps } from "@solidjs/router";
import { BlogSidebar } from "~/features/blog/blog-sidebar";

export default function Layout(props: RouteSectionProps) {
  return (
    <div class="container pt-8 pb-12 sm:pt-16 sm:pb-24">
      <div class="grid gap-7 lg:grid-cols-[1fr_270px]">
        <div>{props.children}</div>
        <div class="hidden lg:block">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
