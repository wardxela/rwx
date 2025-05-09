import { createAsync, useNavigate } from "@solidjs/router";
import {
  type Component,
  type JSX,
  type ParentComponent,
  Show,
  Suspense,
  createEffect,
} from "solid-js";
import { RedirectEffect } from "#features/site/redirect";
import { getMe } from "#queries";
import { Skeleton } from "#ui/skeleton";

export const Authenticated: ParentComponent<Pick<AuthShowProps, "roles">> = (
  props,
) => {
  return (
    <AuthShow unauth={<RedirectEffect link="/login" />} roles={props.roles}>
      {props.children}
    </AuthShow>
  );
};

export const GuestOnly: ParentComponent = (props) => {
  return (
    <AuthShow unauth={props.children}>
      {<RedirectEffect link="/profile" />}
    </AuthShow>
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
