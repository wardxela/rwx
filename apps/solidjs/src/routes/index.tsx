import { For } from "solid-js";

import { Header } from "~/components/header";
import type { CategoryLinkProps } from "~/features/categories";
import { CategoryLink } from "~/features/categories";
import { CourseRelevantCard } from "~/features/courses";

export default function Home() {
  return (
    <>
      <Header />
      <section class="relative mb-24">
        <img
          class="absolute top-0 left-0 -z-10 block h-full w-full object-cover"
          src="/hero-bg.png"
          alt="background"
        />
        <div class="mx-auto flex min-h-[700px] max-w-7xl items-center px-5">
          <div class="max-w-lg">
            <h1 class="mb-6 text-5xl leading-[60px] font-semibold text-black">
              Улучши свои <br /> навыки
            </h1>
            <p class="mb-5 text-lg leading-7 text-neutral-600">
              Учись онлайн, развивай навыки, достигай целей – с нами обучение
              просто и доступно.
            </p>
            <button class="inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-3xl bg-orange-500 px-6 py-2.5 text-lg leading-7 font-medium text-white">
              Список Курсов
            </button>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="mx-auto max-w-7xl px-5">
          <div class="mb-16 flex items-center justify-between">
            <div>
              <h2 class="mb-3 text-3xl leading-10 font-semibold">Категории</h2>
              <div class="text-lg leading-[27px] text-neutral-600">
                Ознакомьтесь с нашими популярными категориями
              </div>
            </div>
            <button class="inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-3xl border-2 border-neutral-400 px-6 py-2.5">
              <div class="text-lg leading-7 font-medium">Все Категории</div>
            </button>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(234px,1fr))] gap-7">
            <For each={staticCategories}>
              {(item) => <CategoryLink {...item} />}
            </For>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="mx-auto max-w-7xl px-5">
          <div class="mb-16 flex items-center justify-between">
            <div>
              <div class="mb-3 text-[32px] leading-10 font-semibold">
                Рекомендуемые Курсы
              </div>
              <div class="text-lg leading-7 text-neutral-600">
                Ознакомьтесь с нашими популярными курсами
              </div>
            </div>
            <button class="inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-3xl border-2 border-neutral-400 px-6 py-2.5">
              <div class="text-lg leading-7 font-medium">Все Курсы</div>
            </button>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(410px,1fr))] gap-7">
            <CourseRelevantCard
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={2 * 2592000000}
              studentsCount={156}
              oldPrice={19999}
              price={0}
            />
            <CourseRelevantCard
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={5 * 604800000}
              studentsCount={101}
              oldPrice={19999}
              price={11999}
            />
            <CourseRelevantCard
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={4 * 604800000}
              studentsCount={102}
              price={29999}
            />
            <CourseRelevantCard
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={2592000000}
              studentsCount={40}
              price={0}
            />
          </div>
        </div>
      </section>
      <div class="relative mb-24">
        <div class="mx-auto max-w-7xl px-5">
          <div class="relative p-12">
            <img
              src="/add-ons-bg.png"
              alt="background"
              class="absolute top-0 left-0 -z-10 h-full w-full rounded-3xl object-cover"
            />
            <div class="max-w-md">
              <div class="mb-3 leading-tight font-semibold text-neutral-600 capitalize">
                ПОЛУЧИТЕ БОЛЬШЕ ОТ ЧПИ
              </div>
              <div class="mb-6 text-3xl leading-10 font-bold capitalize">
                ЧПИ Дополнения
              </div>
              <div class="mb-5 text-lg leading-7 text-neutral-600">
                Новый уровень плагина ЧПИ - ЧПИ для WordPress. Более мощный,
                гибкий и волшебный внутри.
              </div>
              <div class="inline-flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-3xl bg-orange-500 px-6 py-2.5 text-white">
                <div class="text-lg leading-[27px] font-medium capitalize">
                  Исследуйте курс
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-24">
        <div class="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7 px-5">
          <div class="rounded-3xl bg-neutral-100 py-12 text-center">
            <div class="mb-3 text-2xl leading-10 font-semibold text-orange-500 capitalize">
              25K+
            </div>
            <div class="text-lg leading-7 font-medium">Активных студентов</div>
          </div>
          <div class="rounded-3xl bg-neutral-100 py-12 text-center">
            <div class="mb-3 text-2xl leading-10 font-semibold text-orange-500 capitalize">
              899
            </div>
            <div class="text-lg leading-7 font-medium">Полных Курсов</div>
          </div>
          <div class="rounded-3xl bg-neutral-100 py-12 text-center">
            <div class="mb-3 text-2xl leading-10 font-semibold text-orange-500 capitalize">
              158
            </div>
            <div class="text-lg leading-7 font-medium">Преподавателей</div>
          </div>
          <div class="rounded-3xl bg-neutral-100 py-12 text-center">
            <div class="mb-3 text-2xl leading-10 font-semibold text-orange-500 capitalize">
              100%
            </div>
            <div class="text-lg leading-7 font-medium">
              Удовлетворенных Студентов
            </div>
          </div>
        </div>
      </div>
      <section class="mb-24">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-10 px-5">
          <img
            src="/improve-skills.png"
            alt="improve your skills"
            class="max-w-xl"
          />
          <div class="max-w-lg">
            <h2 class="mb-6 text-3xl leading-10 font-semibold capitalize">
              Развивайте свои навыки <br /> с помощью ЧПИ
            </h2>
            <p class="mb-4 text-lg leading-7 text-neutral-600">
              Учись онлайн, развивай навыки, достигай целей – с нами обучение
              просто и доступно.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-2 text-lg leading-7">
                <img src="/check.svg" alt="check" class="size-4" />
                <div>Подтверждение</div>
              </li>
              <li class="flex items-center gap-2 text-lg leading-7">
                <img src="/check.svg" alt="check" class="size-4" />
                <div>Подтверждение</div>
              </li>
              <li class="flex items-center gap-2 text-lg leading-7">
                <img src="/check.svg" alt="check" class="size-4" />
                <div>Подтверждение</div>
              </li>
              <li class="flex items-center gap-2 text-lg leading-7">
                <img src="/check.svg" alt="check" class="size-4" />
                <div>Подтверждение</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="mx-auto max-w-7xl px-5">
          <h1 class="mb-3 text-center text-3xl leading-10 font-semibold capitalize">
            Отзывы студентов
          </h1>
          <div class="font- mb-12 text-center text-lg leading-7 text-neutral-600">
            Что студенты говорят о ЧПИ
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
            <div class="inline-flex flex-col items-start justify-start gap-7 rounded-3xl border border-gray-200 px-8 py-10">
              <div class="self-stretch text-lg leading-7 font-normal text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="flex flex-col items-start justify-start gap-2">
                <div class="text-xl leading-normal font-semibold text-black capitalize">
                  Кто-то там
                </div>
                <div class="text-lg leading-7 font-normal text-neutral-600">
                  Дизайнер
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const staticCategories: CategoryLinkProps[] = [
  {
    href: "/",
    imgSrc: "/design.svg",
    title: "Дизайн",
    count: 13,
  },
  {
    href: "/",
    imgSrc: "/development.svg",
    title: "Разработка",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/communication.svg",
    title: "Коммуникация",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/video-editing.svg",
    title: "Монтирование",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/photo-shooting.svg",
    title: "Фотосъемка",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/marketing.svg",
    title: "Маркетинг",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/texts.svg",
    title: "Тексты",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/finance.svg",
    title: "Финансы",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/science.svg",
    title: "Наука",
    count: 32,
  },
  {
    href: "/",
    imgSrc: "/design.svg",
    title: "Сети",
    count: 32,
  },
];
