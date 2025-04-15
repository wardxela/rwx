import { Title } from "@solidjs/meta";
import type { ParentComponent } from "solid-js";

export const SiteTitle: ParentComponent = (props) => {
  return <Title>{props.children} | ЧИП</Title>;
};
