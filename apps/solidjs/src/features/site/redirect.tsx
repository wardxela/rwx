import { useNavigate } from "@solidjs/router";
import { type Component, createEffect } from "solid-js";

export const RedirectEffect: Component<{ link: string }> = (props) => {
  const navigate = useNavigate();
  createEffect(() => {
    navigate(props.link);
  });
  return null;
};
