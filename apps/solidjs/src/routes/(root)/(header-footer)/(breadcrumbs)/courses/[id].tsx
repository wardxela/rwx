import {
  A,
  type RouteSectionProps,
  action,
  createAsync,
  json,
  useSubmission,
} from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import edjsHTML from "editorjs-html";
import {
  type Component,
  ErrorBoundary,
  For,
  Show,
  Suspense,
  createEffect,
} from "solid-js";
import { z } from "zod";
import api from "#api";
import { AuthShow } from "#features/auth/guards";
import { NotFound } from "#features/site/not-found";
import { SiteTitle } from "#features/site/site-title";
import { formatTimeDelta, getRussianOrdinalPluralWord } from "#intl";
import {
  getCourse,
  getCourseReviews,
  getCourseStructure,
  getMe,
  getMyCourseReview,
} from "#queries";
import { Button } from "#ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#ui/tabs";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldTextArea,
} from "#ui/text-field";
import { Toast } from "#ui/toast";

const edjsParser = edjsHTML();

const StarRating = clientOnly(() =>
  import("#ui/star-rating").then((module) => ({ default: module.StarRating })),
);

export default function Page(props: RouteSectionProps) {
  const courseId = () => props.params.id!;
  const course = createAsync(() => getCourse(courseId()));
  const structure = createAsync(() => getCourseStructure(courseId()));
  const reviews = createAsync(() => getCourseReviews(courseId()));

  const faq = () => {
    const json = course()?.faq;
    if (!json) {
      return "";
    }
    try {
      // @ts-expect-error It is OutputData
      return edjsParser.parse(json);
    } catch (e) {
      return "Вопрос-ответ в разработке...";
    }
  };

  const author = () =>
    `${course()?.author.firstName} ${course()?.author.lastName}`;

  const duration = () => formatTimeDelta(course()?.duration ?? 0);

  const studentsText = () =>
    getRussianOrdinalPluralWord({
      count: course()?.studentsCount ?? 0,
      one: "Студент",
      few: "Студента",
      many: "Студентов",
    });

  const lessonsText = () =>
    getRussianOrdinalPluralWord({
      count: course()?.lessonsCount ?? 0,
      one: "Занятие",
      few: "Занятия",
      many: "Занятий",
    });

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <Show when={course()}>
          <SiteTitle>{course()?.title}</SiteTitle>
        </Show>
        <div class="mb-12 bg-black py-12.5">
          <div class="container">
            <div class="xl:max-w-3xl">
              <div class="mb-5 flex items-center gap-5">
                <div class="inline-flex h-10 items-center justify-center gap-2.5 rounded-lg bg-neutral-600 px-3 py-2 font-medium text-white">
                  {course()?.category?.name}
                </div>
                <div>
                  <span class="text-neutral-400 text-sm sm:text-lg sm:leading-7">
                    Автор:{" "}
                  </span>
                  <span class="text-sm text-white sm:text-lg sm:leading-7">
                    {author()}
                  </span>
                </div>
              </div>
              <h1 class="mb-5 font-semibold text-white text-xl leading-7 sm:text-4xl sm:leading-10">
                {course()?.title}
              </h1>
              <div class="flex flex-wrap gap-x-4 gap-y-2.5">
                <div class="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary"
                  >
                    <title>Длительность</title>
                    <path
                      d="M7.50009 0.877014C3.84241 0.877014 0.877258 3.84216 0.877258 7.49984C0.877258 11.1575 3.8424 14.1227 7.50009 14.1227C11.1578 14.1227 14.1229 11.1575 14.1229 7.49984C14.1229 3.84216 11.1577 0.877014 7.50009 0.877014ZM1.82726 7.49984C1.82726 4.36683 4.36708 1.82701 7.50009 1.82701C10.6331 1.82701 13.1729 4.36683 13.1729 7.49984C13.1729 10.6328 10.6331 13.1727 7.50009 13.1727C4.36708 13.1727 1.82726 10.6328 1.82726 7.49984ZM8 4.50001C8 4.22387 7.77614 4.00001 7.5 4.00001C7.22386 4.00001 7 4.22387 7 4.50001V7.50001C7 7.63262 7.05268 7.7598 7.14645 7.85357L9.14645 9.85357C9.34171 10.0488 9.65829 10.0488 9.85355 9.85357C10.0488 9.65831 10.0488 9.34172 9.85355 9.14646L8 7.29291V4.50001Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="text-neutral-400 text-sm leading-4">
                    {duration()}
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-primary"
                  >
                    <title>Students</title>
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                  <div class="text-neutral-400 text-sm leading-4">
                    {course()?.studentsCount} {studentsText()}
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-primary"
                  >
                    <title>Lessons</title>
                    <path d="m16 6 4 14" />
                    <path d="M12 6v14" />
                    <path d="M8 8v12" />
                    <path d="M4 4v16" />
                  </svg>
                  <div class="text-neutral-400 text-sm leading-4">
                    {course()?.lessonsCount} {lessonsText()}
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-primary"
                  >
                    <title>Rating</title>
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    />
                  </svg>
                  <div class="text-neutral-400 text-sm leading-4">
                    {course()?.averageRating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container relative mb-10 flex flex-col-reverse gap-7 lg:flex-row lg:items-start">
          <div class="w-full overflow-x-auto md:overflow-x-visible xl:max-w-3xl">
            <Tabs class="min-w-140 md:min-w-auto" defaultValue="author">
              <TabsList class="grid grid-cols-5">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="structure">Структура</TabsTrigger>
                <TabsTrigger value="author">Автор</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div class="p-7">
                  <h6 class="mb-3 font-semibold text-xl">Обзор курса</h6>
                  <p class="text-lg text-neutral-600 leading-7">
                    {course()?.description}
                  </p>
                  <ul class="mt-5 list-disc pl-5 text-lg text-neutral-600">
                    <li>Длительность курса: {duration()}</li>
                    <li>
                      Кол-во занятий: {course()?.lessonsCount} {lessonsText()}
                    </li>
                    <li>Поддержка: чаты и форумы для участников</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="structure">
                <div class="p-7">
                  <h6 class="mb-3 font-semibold text-xl">Структура курса</h6>
                  <ul class="space-y-3 text-lg text-neutral-600 leading-7">
                    <For each={structure()}>
                      {(module) => (
                        <li>
                          <span class="font-semibold">
                            Модуль {module.position}:
                          </span>{" "}
                          {module.title}
                        </li>
                      )}
                    </For>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="author">
                <div class="p-7">
                  <div class="mb-2 flex items-start gap-6">
                    <div class="inline-grid size-40 shrink-0 place-items-center rounded-3xl bg-red-500/75 font-extrabold text-6xl text-white">
                      <img
                        src={course()?.author.image ?? "/user.jpg"}
                        alt={author()}
                      />
                    </div>
                    <div>
                      <h6 class="mb-3 font-semibold text-xl">{author()}</h6>
                      <p class="mb-3 text-lg text-neutral-600 leading-7">
                        {course()?.author.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="faq">
                <div class="p-7">
                  <div class="prose" innerHTML={faq()} />
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div class="p-7">
                  <h6 class="mb-3 font-semibold text-xl">Отзывы</h6>
                  <Show
                    when={reviews()?.length}
                    fallback="На этот курс еще нет отзывов"
                  >
                    <ul class="space-y-5 text-lg text-neutral-600 leading-7">
                      <For each={reviews()}>
                        {(review) => (
                          <li>
                            <blockquote>
                              <div class="mb-2">"{review.comment}"</div>
                              <div class="flex items-center gap-1.5">
                                <span class="block font-semibold text-primary text-sm">
                                  — {review.author.firstName}{" "}
                                  {review.author.lastName}
                                </span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="ml-2 text-primary"
                                >
                                  <title>Rating</title>
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                  />
                                </svg>
                                <div class="text-primary text-sm leading-4">
                                  {review.rating}
                                </div>
                              </div>
                            </blockquote>
                          </li>
                        )}
                      </For>
                    </ul>
                  </Show>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div class="-top-50 right-0 rounded-2xl border border-gray-200 bg-white lg:w-full lg:max-w-100 xl:absolute">
            <img
              src={course()?.image ?? undefined}
              class="aspect-[1.64] w-full rounded-t-2xl"
              alt={course()?.title}
              loading="lazy"
            />
            <div class="flex flex-col items-center justify-center gap-3 p-5 sm:gap-7.5 xl:px-13.5 xl:py-7.5">
              <div class="flex items-center gap-2">
                <Show when={course()?.oldPrice}>
                  <div class="text-neutral-400 text-sm line-through sm:text-base">
                    {course()?.oldPrice}₽
                  </div>
                </Show>
                <div class="font-semibold text-primary leading-normal sm:text-xl">
                  {course()?.price}₽
                </div>
              </div>
              <AuthShow
                unauth={
                  <Button variant="outline" as={A} href="/login">
                    Авторизуйтесь, чтобы посмотреть курс
                  </Button>
                }
              >
                <Button as={A} href={`/courses/${course()?.id}/lessons`}>
                  Перейти
                </Button>
              </AuthShow>
            </div>
          </div>
        </div>
        <LeaveReview courseId={courseId()} />
      </Suspense>
    </ErrorBoundary>
  );
}

const leaveReviewSchema = z.object({
  courseId: z.string(),
  comment: z.string().min(15).max(1000),
  rating: z.coerce.number().min(1).max(5),
});

const leaveReviewAction = action(async (formData: FormData) => {
  const validated = leaveReviewSchema.safeParse({
    courseId: formData.get("courseId"),
    comment: formData.get("comment"),
    rating: formData.get("rating"),
  });
  if (!validated.success) {
    return json(
      {
        data: null,
        errors: validated.error.formErrors.fieldErrors,
      },
      { revalidate: "nothing" },
    );
  }
  await api.POST("/courses/{id}/reviews", {
    params: { path: { id: validated.data.courseId } },
    body: {
      comment: validated.data.comment,
      rating: validated.data.rating,
    },
  });
  return json(
    {
      data: true,
      errors: null,
    },
    {
      revalidate: [
        getCourseReviews.key,
        getCourse.keyFor(validated.data.courseId),
        getCourseReviews.keyFor(validated.data.courseId),
      ],
    },
  );
}, "/courses/{id}/reviews:post");

interface LeaveReviewProps {
  courseId: string;
}

const LeaveReview: Component<LeaveReviewProps> = (props) => {
  let formRef!: HTMLFormElement;

  const existingReview = createAsync(() =>
    getMyCourseReview(props.courseId).catch(() => null),
  );

  const submission = useSubmission(leaveReviewAction);

  createEffect(() => {
    if (submission.result?.data) {
      formRef.reset();
    }
  });

  return (
    <>
      <div class="container">
        <Suspense>
          <Show when={existingReview() === null}>
            <div class="relative xl:max-w-3xl">
              <div class="mb-4 font-semibold text-lg">Оставить отзыв</div>
              <form
                ref={formRef}
                class="mb-10"
                action={leaveReviewAction}
                method="post"
              >
                <input type="hidden" name="courseId" value={props.courseId} />
                <TextField class="mb-4">
                  <TextFieldTextArea
                    required
                    name="comment"
                    placeholder="Комментарий"
                  />
                  <TextFieldErrorMessage>
                    {submission.result?.errors?.comment}
                  </TextFieldErrorMessage>
                </TextField>
                <div class="mb-4">
                  <StarRating required name="rating" />
                </div>
                <div>
                  <Button type="submit">Отправить</Button>
                </div>
              </form>
              <AuthShow
                unauth={
                  <>
                    <div class="absolute inset-0 z-20 grid place-items-center bg-white/85" />
                    <div class="-translate-1/2 absolute top-1/2 left-1/2 z-20 text-center">
                      <Button as="a" variant="link" href="/login">
                        Авторизуйтесь, чтобы оставить отзыв
                      </Button>
                    </div>
                  </>
                }
              />
            </div>
          </Show>
        </Suspense>
      </div>
      <Toast
        when={Boolean(submission.result?.errors)}
        action={(toast) => toast.error("Не удалось оставить отзыв")}
      />
      <Toast
        when={Boolean(submission.result?.data)}
        action={(toast) => toast.success("Отзыв успешно отправлен")}
      />
    </>
  );
};
