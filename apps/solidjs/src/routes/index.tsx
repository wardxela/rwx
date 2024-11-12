import { For } from "solid-js";

import { Button } from "@rwx/ui/components/button";

import type { CourseCategoryLinkProps } from "~/features/courses";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { BlogArticleCardLink } from "~/features/blog/blog-article-card-link";
import { CourseCategoryLink, CourseRelevantCardLink } from "~/features/courses";

export default function HomePage() {
  return (
    <>
      <Header />
      <section class="relative mb-24">
        <img
          class="absolute top-0 left-0 -z-10 block h-full w-full object-cover"
          src="/hero-bg.png"
          alt="background"
        />
        <div class="container flex min-h-[700px] items-center">
          <div class="max-w-lg">
            <h1 class="mb-6 text-5xl leading-[60px] font-semibold text-black">
              Улучши свои <br /> навыки
            </h1>
            <p class="mb-5 text-lg leading-7 text-neutral-600">
              Учись онлайн, развивай навыки, достигай целей – с нами обучение
              просто и доступно.
            </p>
            <Button size="lg">Список Курсов</Button>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="container">
          <div class="mb-16 flex items-center justify-between">
            <div>
              <h2 class="mb-3 text-3xl leading-10 font-semibold">Категории</h2>
              <div class="text-lg leading-[27px] text-neutral-600">
                Ознакомьтесь с нашими популярными категориями
              </div>
            </div>
            <Button size="lg" variant="outline">
              Все Категории
            </Button>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(234px,1fr))] gap-7">
            <For each={staticCategories}>
              {(item) => <CourseCategoryLink {...item} />}
            </For>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="container">
          <div class="mb-16 flex items-center justify-between">
            <div>
              <div class="mb-3 text-[32px] leading-10 font-semibold">
                Рекомендуемые Курсы
              </div>
              <div class="text-lg leading-7 text-neutral-600">
                Ознакомьтесь с нашими популярными курсами
              </div>
            </div>
            <Button size="lg" variant="outline">
              Все Курсы
            </Button>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(410px,1fr))] gap-7">
            <CourseRelevantCardLink
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={2 * 2592000000}
              studentsCount={156}
              oldPrice={19999}
              price={0}
            />
            <CourseRelevantCardLink
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={5 * 604800000}
              studentsCount={101}
              oldPrice={19999}
              price={11999}
            />
            <CourseRelevantCardLink
              preview="/course-preview.png"
              author="Артем Неизвестный"
              title="Создай веб-сайт с помощью  LMS plugin"
              category="Фотосъемка"
              durationMs={4 * 604800000}
              studentsCount={102}
              price={29999}
            />
            <CourseRelevantCardLink
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
        <div class="container">
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
              <Button size="lg">Исследуйте курс</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-24">
        <div class="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
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
        <div class="container flex items-center justify-between gap-10">
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
        <div class="container">
          <h2 class="mb-3 text-center text-3xl leading-10 font-semibold capitalize">
            Отзывы студентов
          </h2>
          <div class="font- mb-12 text-center text-lg leading-7 text-neutral-600">
            Что студенты говорят о ЧПИ
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
            <div class="flex flex-col justify-start rounded-3xl border border-gray-200 px-8 py-10">
              <img src="/quote.svg" alt="quote" class="mb-5 w-10" />
              <div class="mb-7 text-lg leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </div>
              <div class="mt-auto mb-2 text-xl font-semibold capitalize">
                Кто-то там
              </div>
              <div class="text-lg leading-7 text-neutral-600">Дизайнер</div>
            </div>
            <div class="flex flex-col justify-start rounded-3xl border border-gray-200 px-8 py-10">
              <img src="/quote.svg" alt="quote" class="mb-5 w-10" />
              <div class="mb-7 text-lg leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-auto mb-2 text-xl font-semibold capitalize">
                Кто-то там
              </div>
              <div class="text-lg leading-7 text-neutral-600">Дизайнер</div>
            </div>
            <div class="flex flex-col justify-start rounded-3xl border border-gray-200 px-8 py-10">
              <img src="/quote.svg" alt="quote" class="mb-5 w-10" />
              <div class="mb-7 text-lg leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-auto mb-2 text-xl font-semibold capitalize">
                Кто-то там
              </div>
              <div class="text-lg leading-7 text-neutral-600">Дизайнер</div>
            </div>
            <div class="flex flex-col justify-start rounded-3xl border border-gray-200 px-8 py-10">
              <img src="/quote.svg" alt="quote" class="mb-5 w-10" />
              <div class="mb-7 text-lg leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div class="mt-auto mb-2 text-xl font-semibold capitalize">
                Кто-то там
              </div>
              <div class="text-lg leading-7 text-neutral-600">Дизайнер</div>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="container">
          <div class="flex items-center rounded-3xl bg-gradient-to-r from-sky-200 to-purple-200 px-12 py-16">
            <div class="grid size-32 place-items-center rounded-full bg-white">
              <img src="/student.svg" alt="student" class="w-16" />
            </div>
            <h2 class="ml-8 text-xl font-semibold">Давайте Начнем Учиться</h2>
            <Button size="lg" variant="outline-primary" class="ml-auto">
              Я студент
            </Button>
            <Button size="lg" class="ml-5">
              Стать Преподавателем
            </Button>
          </div>
        </div>
      </section>
      <section class="mb-24">
        <div class="container">
          <div class="mb-16 flex items-center justify-between">
            <div>
              <div class="mb-3 text-[32px] leading-10 font-semibold">
                Последние Публикации
              </div>
              <div class="text-lg leading-7 text-neutral-600">
                Ознакомьтесь с нашими бесплатными статьями
              </div>
            </div>
            <Button size="lg" variant="outline">
              Все Статьи
            </Button>
          </div>
          <div class="grid grid-cols-[repeat(auto-fill,minmax(410px,1fr))] gap-7">
            <BlogArticleCardLink />
            <BlogArticleCardLink />
            <BlogArticleCardLink />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const staticCategories: CourseCategoryLinkProps[] = [
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
