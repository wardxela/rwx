import { type Component, createEffect } from "solid-js";
import { toast as toasterFunction } from "solid-sonner";

export type ToastProps = {
  when: boolean;
  action: (toast: typeof toasterFunction) => void;
};

export const Toast: Component<ToastProps> = (props) => {
  createEffect(() => {
    if (props.when) {
      queueMicrotask(() => {
        props.action(toasterFunction);
      });
    }
  });
  return null;
};
