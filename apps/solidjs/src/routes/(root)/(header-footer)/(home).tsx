import { A, createAsync } from "@solidjs/router";
import { type Component, For, type JSX, Show, Suspense } from "solid-js";

import { Button } from "#ui/button";

import { PostLink, PostLinkSkeleton } from "#features/blog/post-link";
import {
  CourseCardLink,
  CourseLinkSkeleton,
} from "#features/course/course-card-link";
import {
  CourseCategoryLink,
  type CourseCategoryLinkProps,
} from "#features/course/course-category-card-link";
import { SiteTitle } from "#features/site/site-title";
import { getCourseCategories, getCourses, getPosts } from "#queries";
import { Skeleton } from "#ui/skeleton";

const staticReviews = [
  {
    quote:
      "Платформа удобная и интуитивно понятная. Прошёл курс по веб-разработке — всё структурировано и доступно.",
    author: "Иван Петров",
    position: "Фронтенд-разработчик",
  },
  {
    quote:
      "Очень понравился подход к обучению: теория чередуется с практикой, а преподаватели всегда на связи.",
    author: "Екатерина Смирнова",
    position: "Преподаватель английского",
  },
  {
    quote:
      "Прошёл несколько курсов по маркетингу — теперь использую полученные знания в работе. Отличный ресурс!",
    author: "Алексей Воронов",
    position: "SMM-специалист",
  },
  {
    quote:
      "Учиться на платформе комфортно даже с телефона. Приятный интерфейс и полезный контент.",
    author: "Мария Козлова",
    position: "Студентка",
  },
];

export default function Page() {
  const categories = createAsync(() => getCourseCategories());

  return (
    <>
      <SiteTitle>Главная</SiteTitle>
      <div class="[&>*]:mb-16 sm:[&>*]:mb-24">
        <section class="relative">
          <img
            class="absolute top-0 left-0 block h-full w-full object-cover object-left md:object-center"
            src="/hero-bg.png"
            alt="background"
            loading="lazy"
          />
          <div class="container relative z-10 flex min-h-96 items-center sm:min-h-[500px] md:min-h-[700px]">
            <div class="max-w-68 sm:max-w-lg">
              <h1 class="mb-5 font-semibold text-3xl text-black leading-10 sm:mb-6 sm:text-5xl sm:leading-[60px]">
                Улучши свои <br /> навыки
              </h1>
              <p class="mb-5 text-lg text-neutral-600 leading-7">
                Учись онлайн, развивай навыки, достигай целей – с нами обучение
                просто и доступно.
              </p>
              <Button as={A} href="/courses" size="lg">
                Список Курсов
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <SectionHeader
              title="Категории"
              description="Ознакомьтесь с нашими популярными категориями"
              action={
                <Button as={A} href="/courses" size="lg" variant="outline">
                  Все Категории
                </Button>
              }
            />
            <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 sm:gap-7">
              <Suspense
                fallback={
                  <For each={Array.from({ length: 10 })}>
                    {(_, index) => (
                      <Skeleton
                        class="aspect-square rounded-3xl"
                        classList={{
                          "max-sm:hidden": index() > 3,
                        }}
                      />
                    )}
                  </For>
                }
              >
                <For each={categories()?.slice(0, 10)}>
                  {(category, index) => (
                    <CourseCategoryLink
                      class={index() > 3 ? "max-sm:hidden" : undefined}
                      data={category}
                    />
                  )}
                </For>
              </Suspense>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <SectionHeader
              title="Рекомендуемые Курсы"
              description="Ознакомьтесь с нашими популярными курсами"
              action={
                <Button as={A} href="/courses" size="lg" variant="outline">
                  Все Курсы
                </Button>
              }
            />
            <FavouriteCourses />
          </div>
        </section>
        <div class="relative">
          <div class="container">
            <div class="relative md:p-12">
              <img
                src="/add-ons-bg.png"
                alt="background"
                class="-z-10 absolute top-0 left-0 hidden h-full w-full rounded-3xl object-cover xl:block"
              />
              <div class="max-w-md">
                <div class="mb-3 font-semibold text-neutral-600 capitalize leading-tight">
                  ПОЛУЧИТЕ БОЛЬШЕ ОТ ЧИП
                </div>
                <div class="mb-6 font-bold text-3xl capitalize leading-10">
                  ЧИП Дополнения
                </div>
                <div class="mb-5 text-lg text-neutral-600 leading-7">
                  Изучите новые темы и углубитесь в интересующие области с
                  нашими дополнительными материалами и ресурсами.
                </div>
                <Button size="lg">Исследуйте курс</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="container grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 sm:gap-7">
            <div class="rounded-3xl bg-neutral-100 py-12 text-center">
              <div class="mb-3 font-semibold text-2xl text-orange-500 capitalize leading-10">
                25K+
              </div>
              <div class="font-medium text-lg leading-7">
                Активных студентов
              </div>
            </div>
            <div class="rounded-3xl bg-neutral-100 py-12 text-center">
              <div class="mb-3 font-semibold text-2xl text-orange-500 capitalize leading-10">
                899
              </div>
              <div class="font-medium text-lg leading-7">Полных Курсов</div>
            </div>
            <div class="rounded-3xl bg-neutral-100 py-12 text-center">
              <div class="mb-3 font-semibold text-2xl text-orange-500 capitalize leading-10">
                158
              </div>
              <div class="font-medium text-lg leading-7">Преподавателей</div>
            </div>
            <div class="rounded-3xl bg-neutral-100 py-12 text-center">
              <div class="mb-3 font-semibold text-2xl text-orange-500 capitalize leading-10">
                100%
              </div>
              <div class="font-medium text-lg leading-7">
                Удовлетворенных Студентов
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="container flex items-center justify-between gap-10">
            <div class="hidden md:block">
              <img src="/improve-skills.svg" alt="improve your skills" />
            </div>
            <div class="max-w-sm md:shrink-0">
              <h2 class="mb-4 font-semibold text-xl capitalize leading-7 sm:mb-6 sm:text-3xl sm:leading-10">
                Развивайте свои навыки <br /> с помощью ЧИП
              </h2>
              <p class="mb-4 text-lg text-neutral-600 leading-7">
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
        <section>
          <div class="container">
            <h2 class="mb-3 text-center font-semibold text-3xl capitalize leading-10">
              Отзывы студентов
            </h2>
            <div class="mb-7 text-center text-lg text-neutral-600 leading-7 md:mb-12">
              Что студенты говорят о ЧИП
            </div>
            <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-7 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              <For each={staticReviews}>
                {(review) => (
                  <div class="flex flex-col justify-start rounded-3xl border border-gray-200 px-8 py-10">
                    <img src="/quote.svg" alt="quote" class="mb-5 w-10" />
                    <div class="mb-7 text-lg leading-7">{review.quote}</div>
                    <div class="mt-auto mb-2 font-semibold text-xl capitalize">
                      {review.author}
                    </div>
                    <div class="text-lg text-neutral-600 leading-7">
                      {review.position}
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="flex flex-wrap items-center gap-4 rounded-3xl bg-gradient-to-r from-sky-200 to-purple-200 px-6 py-8 sm:px-12 sm:py-16">
              <div class="grid size-16 shrink-0 place-items-center rounded-full bg-white p-4 lg:size-32">
                <img src="/student.svg" alt="student" class="aspect-square" />
              </div>
              <h2 class="mx-auto font-semibold text-xl sm:ml-8">
                Давайте Начнем Учиться
              </h2>
              <Button
                as="a"
                href="/login"
                size="lg"
                variant="outline-primary"
                class="ml-auto w-full sm:w-auto"
              >
                Я студент
              </Button>
              <Button
                as="a"
                href="/login"
                size="lg"
                class="ml-auto w-full sm:w-auto lg:ml-0"
              >
                Стать Преподавателем
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <SectionHeader
              title="Последние Публикации"
              description="Ознакомьтесь с нашими бесплатными статьями"
              action={
                <Button as="a" href="/blog" size="lg" variant="outline">
                  Все Статьи
                </Button>
              }
            />
            <RecentPosts />
          </div>
        </section>
      </div>
    </>
  );
}

const FavouriteCourses = () => {
  const courses = createAsync(() => getCourses({ limit: 4 }));
  return (
    <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-7 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
      <Suspense
        fallback={
          <For each={Array.from({ length: 4 })}>
            {() => <CourseLinkSkeleton />}
          </For>
        }
      >
        <Show when={courses()?.page.length} fallback="Ничего не найдено">
          <For each={courses()?.page}>
            {(post) => (
              <CourseCardLink href={`/courses/${post.id}`} data={post} />
            )}
          </For>
        </Show>
      </Suspense>
    </div>
  );
};

const RecentPosts = () => {
  const posts = createAsync(() => getPosts({ limit: 4 }));

  return (
    <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
      <Suspense
        fallback={
          <For each={Array.from({ length: 3 })}>
            {() => <PostLinkSkeleton />}
          </For>
        }
      >
        <For each={posts()?.page}>
          {(post) => (
            <PostLink
              link={`/blog/${post.id}`}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              updatedAt={post.updatedAt}
            />
          )}
        </For>
      </Suspense>
    </div>
  );
};

const SectionHeader: Component<{
  title: string;
  description: string;
  action: JSX.Element;
}> = (props) => {
  return (
    <div class="mb-7 flex flex-col sm:flex-row sm:items-center sm:justify-between md:mb-16">
      <div class="mb-4 sm:mb-0">
        <h2 class="mb-3 font-semibold text-3xl leading-10">{props.title}</h2>
        <div class="text-lg text-neutral-600 leading-[27px]">
          {props.description}
        </div>
      </div>
      {props.action}
    </div>
  );
};
