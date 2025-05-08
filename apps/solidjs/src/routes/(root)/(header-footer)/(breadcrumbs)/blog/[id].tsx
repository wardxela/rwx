import edjsHTML from "editorjs-html";
import type { Component } from "solid-js";
import { ErrorBoundary, For, Show, Suspense, createEffect } from "solid-js";

import type { paths } from "@rwx/api";
import {
  type RouteSectionProps,
  action,
  createAsync,
  json,
  useSubmission,
} from "@solidjs/router";
import { z } from "zod";
import api from "#api";
import { AuthShow } from "#features/auth/guards";
import { NotFound } from "#features/site/not-found";
import { formatTimeDelta, getRussianOrdinalPluralWord } from "#intl";
import { getMyPosts, getPost, getPostComments, getPosts } from "#queries";
import { Avatar, AvatarFallback, AvatarImage } from "#ui/avatar";
import { Button } from "#ui/button";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldTextArea,
} from "#ui/text-field";
import { Toast } from "#ui/toast";

const edjsParser = edjsHTML();

export default function Page(props: RouteSectionProps) {
  const post = createAsync(() => getPost(props.params.id!));
  const comments = createAsync(() => getPostComments(props.params.id!));

  const content = () => {
    const json = post()?.content;
    if (!json) {
      return "";
    }
    try {
      // @ts-expect-error It is OutputData
      return edjsParser.parse(json);
    } catch {
      return "Запись в разработке...";
    }
  };

  const commentsCountText = () =>
    getRussianOrdinalPluralWord({
      count: Number(post()?.commentsCount),
      one: "Комментарий",
      few: "Комментария",
      many: "Комментариев",
    });

  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Suspense>
        <h1 class="mb-4 font-semibold text-xl leading-7 sm:mb-5 sm:text-4xl sm:leading-10">
          {post()?.title}
        </h1>
        <div class="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:mb-10">
          <div class="flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Автор</title>
              <path
                d="M3.33366 3.33335C3.33366 1.86002 4.52699 0.666687 6.00033 0.666687C7.47366 0.666687 8.66699 1.86002 8.66699 3.33335C8.66699 4.80669 7.47366 6.00002 6.00033 6.00002C4.52699 6.00002 3.33366 4.80669 3.33366 3.33335Z"
                fill="#FF782D"
              />
              <path
                d="M0.666992 9.33335C0.666992 7.56002 4.22033 6.66669 6.00033 6.66669C7.78032 6.66669 11.3337 7.56002 11.3337 9.33335V11.3334H0.666992V9.33335Z"
                fill="#FF782D"
              />
            </svg>
            <span class="text-neutral-600">
              {post()?.author.firstName} {post()?.author.lastName}
            </span>
          </div>
          <div class="flex items-center gap-1">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Дата</title>
              <g clip-path="url(#clip0_3233_1176)">
                <path
                  d="M13.3333 2.79964H12.6667V1.46631H11.3333V2.79964H4.66668V1.46631H3.33334V2.79964H2.66668C1.93334 2.79964 1.33334 3.39964 1.33334 4.13298V14.7996C1.33334 15.533 1.93334 16.133 2.66668 16.133H13.3333C14.0667 16.133 14.6667 15.533 14.6667 14.7996V4.13298C14.6667 3.39964 14.0667 2.79964 13.3333 2.79964ZM13.3333 14.7996H2.66668V6.13298H13.3333V14.7996Z"
                  fill="#FF782D"
                />
              </g>
              <defs>
                <clipPath id="clip0_3233_1176">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.799805)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Show when={post()}>
              <span class="text-neutral-600">
                {new Date(post()!.updatedAt).toLocaleString()}
              </span>
            </Show>
          </div>
          <div class="flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Комментарии</title>
              <path
                d="M12.333 0.333313H1.66634C0.933008 0.333313 0.333008 0.933313 0.333008 1.66665V13.6666L2.99967 11H12.333C13.0663 11 13.6663 10.4 13.6663 9.66665V1.66665C13.6663 0.933313 13.0663 0.333313 12.333 0.333313Z"
                fill="#FF782D"
              />
            </svg>
            <span class="text-neutral-600">
              {Number(post()?.commentsCount)} {commentsCountText()}
            </span>
          </div>
        </div>
        <Show when={post()?.image}>
          <img
            src={post()!.image!}
            alt="blog preview"
            class="mb-5 w-full rounded-3xl sm:mb-10"
          />
        </Show>
        <div class="prose mx-auto mb-6" innerHTML={content()} />
        <Show when={(post()?.tags.length ?? 0) > 0}>
          <div class="mb-4 flex flex-wrap items-center gap-2 sm:mb-6">
            <div class="mr-3 text-lg text-neutral-600">Теги:</div>
            <For each={post()?.tags}>
              {(tag) => (
                <div class="inline-flex gap-2.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-neutral-600 leading-7 sm:px-5 sm:py-2 sm:text-lg">
                  {tag.name}
                </div>
              )}
            </For>
          </div>
        </Show>
        <div>
          <h6 class="mb-1 font-semibold text-xl">Комментарии</h6>
          <div class="mb-4 text-neutral-600">
            {Number(post()?.commentsCount)} {commentsCountText()}
          </div>
          <div class="mb-10">
            <LeaveCommentForm postId={props.params.id!} />
          </div>
          <Suspense>
            <div class="space-y-5">
              <For each={comments()}>
                {(comment) => <ArticleComment comment={comment} />}
              </For>
            </div>
          </Suspense>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

const CommentSchema = z.object({
  postId: z.string().uuid(),
  content: z.string().min(1).max(10000),
});

const leaveCommentAction = action(async (formData: FormData) => {
  const validated = CommentSchema.safeParse({
    postId: formData.get("postId"),
    content: formData.get("content"),
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
  await api.POST("/blog/posts/{id}/comments", {
    params: {
      path: {
        id: validated.data.postId,
      },
    },
    body: {
      content: validated.data.content,
    },
  });
  return json(
    {
      data: true,
      errors: null,
    },
    {
      revalidate: [
        getPosts.key,
        getMyPosts.key,
        getPost.keyFor(validated.data.postId),
        getPostComments.keyFor(validated.data.postId),
      ],
    },
  );
}, "/blog/posts/{id}/comments:post");

const LeaveCommentForm = (props: { postId: string }) => {
  let formRef!: HTMLFormElement;

  const submission = useSubmission(leaveCommentAction);

  createEffect(() => {
    if (submission.result?.data) {
      formRef.reset();
    }
  });

  return (
    <div class="relative">
      <form
        ref={formRef}
        method="post"
        action={leaveCommentAction}
        class="space-y-4"
      >
        <input type="hidden" name="postId" value={props.postId} />
        <TextField
          validationState={
            submission.result?.errors?.content ? "invalid" : "valid"
          }
        >
          <TextFieldTextArea
            name="content"
            required
            placeholder="Текст комментария"
          />
          <TextFieldErrorMessage>
            {submission.result?.errors?.content}
          </TextFieldErrorMessage>
        </TextField>
        <div>
          <Button type="submit">Отправить</Button>
        </div>
      </form>
      <AuthShow
        unauth={
          <>
            <div class="absolute inset-0 grid place-items-center bg-white/85" />
            <div class="-translate-1/2 absolute top-1/2 left-1/2 text-center">
              <Button as="a" variant="link" href="/login">
                Авторизуйтесь, чтобы оставлять комментарии
              </Button>
            </div>
          </>
        }
      />
      <Toast
        when={Boolean(submission.result?.errors)}
        action={(toast) => toast.error("Не удалось оставить комментарий")}
      />
      <Toast
        when={Boolean(submission.result?.data)}
        action={(toast) => toast.success("Комментарий успешно оставлен")}
      />
    </div>
  );
};

interface ArticleCommentProps {
  comment: paths["/blog/posts/{id}/comments"]["get"]["responses"]["200"]["content"]["application/json"][number];
}

const ArticleComment: Component<ArticleCommentProps> = (props) => {
  return (
    <div>
      <div class="grid grid-cols-[48px_1fr] gap-2.5 border-neutral-200 border-t pt-5 sm:gap-5">
        <Avatar class="size-12">
          <AvatarImage src={props.comment.author.image ?? undefined} />
          <AvatarFallback>{`${props.comment.author.firstName.at(0)}${props.comment.author.lastName.at(0)}`}</AvatarFallback>
        </Avatar>
        <div>
          <div class="mb-2 flex justify-between gap-2">
            <div class="font-semibold text-sm sm:text-base">
              {props.comment.author.firstName} {props.comment.author.lastName}
            </div>
            <div class="text-neutral-600 text-sm">
              {formatTimeDelta(
                Date.now() - new Date(props.comment.updatedAt).getTime(),
              )}{" "}
              назад
            </div>
          </div>
          <div class="text-neutral-600 leading-7">{props.comment.content}</div>
        </div>
      </div>
      {/* <Show when={props.comments?.length}>
        <div class="mt-5 ml-10 space-y-5">
          <For each={props.comments}>
            {(comment) => (
              <ArticleComment
                author={comment.author}
                text={comment.text}
                date={comment.date}
              />
            )}
          </For>
        </div>
      </Show> */}
    </div>
  );
};
