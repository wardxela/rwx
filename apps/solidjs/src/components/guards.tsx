import { createAsync, useNavigate } from "@solidjs/router";
import {
  type Component,
  type JSX,
  type ParentComponent,
  Show,
  Suspense,
  createEffect,
} from "solid-js";
import { getProfile } from "~/shared/queries";
import { Loader } from "./loader";

export const Protected: ParentComponent = (props) => {
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
  const profile = createAsync(() => getProfile());
  return (
    <Suspense fallback={<Loader />}>
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
