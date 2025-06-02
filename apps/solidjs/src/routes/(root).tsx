import { Meta } from "@solidjs/meta";
import type { RouteSectionProps } from "@solidjs/router";
import { Toaster } from "solid-sonner";

export default function Layout(props: RouteSectionProps) {
  return (
    <>
      <Meta property="og:image" content="/hero-bg.png" />
      <Meta
        property="og:image:alt"
        content="Образовательная онлайн-платформа ЧИП"
      />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="600" />
      <Meta property="og:site_name" content="ЧИП" />
      <Meta
        name="description"
        content="Платформа ЧИП - ваш путь к освоению новых навыков в IT. Онлайн-курсы, актуальные программы обучения и поддержка экспертов для успешного карьерного старта или роста."
      />
      {props.children}
      <Toaster richColors />
    </>
  );
}
