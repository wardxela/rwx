// import { Skeleton } from "#ui/skeleton";
import { createAsync, useNavigate } from "@solidjs/router";
import {
  type Component,
  type JSX,
  type ParentComponent,
  Show,
  Suspense,
  createEffect,
} from "solid-js";
import { getMe } from "#queries";

import { clientOnly } from "@solidjs/start";

const Skeleton = clientOnly(() =>
  import("#ui/skeleton").then((module) => ({
    default: module.Skeleton,
  })),
);

export const Authenticated: ParentComponent<Pick<AuthShowProps, "roles">> = (
  props,
) => {
  return (
    <AuthShow unauth={<Redirect link="/login" />} roles={props.roles}>
      {props.children}
    </AuthShow>
  );
};

export const GuestOnly: ParentComponent = (props) => {
  return (
    <AuthShow unauth={props.children}>{<Redirect link="/profile" />}</AuthShow>
  );
};

export interface AuthShowProps {
  unauth?: JSX.Element;
  roles?: string[];
}

export const AuthShow: ParentComponent<AuthShowProps> = (props) => {
  const profile = createAsync(() => getMe());
  return (
    <Suspense fallback={<Skeleton />}>
      <Show
        when={
          profile() &&
          (props.roles
            ? props.roles.every((role) => profile()?.roles.includes(role))
            : true)
        }
        fallback={props.unauth}
      >
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
