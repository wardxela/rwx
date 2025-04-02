import { Skeleton } from "@rwx/ui/components/skeleton";
import { createAsync, useNavigate } from "@solidjs/router";
import {
  type Component,
  type JSX,
  type ParentComponent,
  Show,
  Suspense,
  createEffect,
} from "solid-js";
import { getMe } from "~/shared/queries";

export const Authenticated: ParentComponent = (props) => {
  return (
    <AuthSwitch unauth={<Redirect link="/login" />}>
      {props.children}
    </AuthSwitch>
  );
};

export const GuestOnly: ParentComponent = (props) => {
  return (
    <AuthSwitch unauth={props.children}>
      {<Redirect link="/profile" />}
    </AuthSwitch>
  );
};

export const AuthSwitch: ParentComponent<{
  unauth?: JSX.Element;
}> = (props) => {
  const profile = createAsync(() => getMe());
  return (
    <Suspense fallback={<Skeleton />}>
      <Show when={profile()} fallback={props.unauth}>
        {props.children}
      </Show>
    </Suspense>
  );
};

const Redirect: Component<{ link: string }> = (props) => {
  const navigate = useNavigate();
  createEffect(() => {
    navigate(props.link);
  });
  return null;
};
