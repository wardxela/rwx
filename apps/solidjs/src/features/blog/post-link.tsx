import { Skeleton } from "@rwx/ui/components/skeleton";
import { type Component, Show } from "solid-js";

export type PostLinkProps = {
  link: string;
  title: string;
  excerpt?: string | null;
  image?: string | null;
  updatedAt: string;
};

export const PostLink: Component<PostLinkProps> = (props) => {
  return (
    <a
      href={props.link}
      class="@container rounded-2xl transition hover:shadow-lg"
    >
      <div class="flex h-full @lg:flex-row flex-col rounded-2xl border border-gray-200">
        <img
          src={props.image ?? "/placeholder.jpg"}
          class="h-52 @lg:min-h-62 w-full @lg:max-w-1/3 rounded-t-2xl @lg:rounded-l-2xl @lg:rounded-tr-none object-cover"
          alt={props.title}
        />
        <div class="@sm:p-5 p-4">
          <h6 class="mb-3 font-semibold @sm:text-xl">{props.title}</h6>
          <div class="mb-3 flex items-center gap-2">
            <img src="/calendar.svg" alt="date" />
            <div class="@sm:text-base text-neutral-600 text-sm">
              {new Date(props.updatedAt).toLocaleString()}
            </div>
          </div>
          <Show when={props.excerpt}>
            <div class="@sm:text-lg text-neutral-600">{props.excerpt}</div>
          </Show>
        </div>
      </div>
    </a>
  );
};

export function PostLinkSkeleton() {
  return (
    <div class="flex flex-col">
      <Skeleton class="h-52 rounded-2xl" />
      <div class="flex grow flex-col px-4 py-5">
        <Skeleton class="mb-1 h-4" />
        <Skeleton class="mb-5 h-4 w-2/3" />
        <Skeleton class="mb-6 h-4 w-1/2" />
        <Skeleton class="mb-1 h-4" />
        <Skeleton class="mb-1 h-4" />
        <Skeleton class="h-4 w-2/3" />
      </div>
    </div>
  );
}
