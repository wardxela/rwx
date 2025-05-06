import { createAsync } from "@solidjs/router";
import { type Component, type ComponentProps, Suspense } from "solid-js";
import { getMe } from "#queries";
import { Avatar, AvatarFallback, AvatarImage } from "#ui/avatar";
import { Skeleton } from "#ui/skeleton";

export const UserAvatar: Component<ComponentProps<typeof Avatar>> = (props) => {
  const user = createAsync(() => getMe());
  return (
    <Suspense fallback={<Skeleton class="size-full rounded-full" />}>
      <Avatar {...props}>
        <AvatarImage src={user()?.image ?? undefined} />
        <AvatarFallback>{`${user()?.firstName.at(0)}${user()?.lastName.at(0)}`}</AvatarFallback>
      </Avatar>
    </Suspense>
  );
};
