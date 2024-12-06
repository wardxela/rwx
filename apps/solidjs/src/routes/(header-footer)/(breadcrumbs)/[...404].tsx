import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Ничего не найдено</Title>
      <HttpStatusCode code={404} />
      <div class="container flex flex-col pt-16 pb-24">
        <div class="mx-auto mb-4 text-7xl font-extrabold md:text-9xl">404</div>
        <h1 class="mx-auto mb-20 text-center text-lg text-neutral-600">
          Страница не найдена (или находится в разработке)
        </h1>
        <img src="/404.svg" alt="404" class="mx-auto w-full max-w-2xl" />
      </div>
    </main>
  );
}
