import { Avatar, AvatarFallback, AvatarImage } from "@rwx/ui/components/avatar";
import { Skeleton } from "@rwx/ui/components/skeleton";
import { createAsync } from "@solidjs/router";
import { type Component, type ComponentProps, Suspense } from "solid-js";
import { getMe } from "~/shared/queries";

export const UserAvatar: Component<ComponentProps<typeof Avatar>> = (props) => {
  const user = createAsync(() => getMe());
  return (
    <Suspense fallback={<Skeleton class="size-full!" circle />}>
      <Avatar {...props}>
        <AvatarImage src={user()?.image ?? "/profile.jpg"} />
        <AvatarFallback>{`${user()?.firstName.at(0)}${user()?.lastName.at(0)}`}</AvatarFallback>
      </Avatar>
    </Suspense>
  );
};
