import {
  action,
  createAsync,
  json,
  redirect,
  useSubmission,
} from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { z } from "zod";
import api from "#api";
import {
  CourseCardLink,
  CourseLinkSkeleton,
} from "#features/course/course-card-link";
import { getCourses, getMyCourses } from "#queries";
import { Button } from "#ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#ui/dialog";
import { CommonPagination, useSearchParamsPagination } from "#ui/pagination";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
} from "#ui/text-field";

const CreateCourseSchema = z.object({
  title: z.string().min(3).max(100),
});

const createCourseAction = action(async (formData: FormData) => {
  const validated = CreateCourseSchema.safeParse({
    title: formData.get("title"),
  });
  if (!validated.success) {
    return json({
      data: null,
      errors: validated.error.formErrors.fieldErrors,
    });
  }
  const response = await api.POST("/courses", {
    body: validated.data,
  });
  if (!response.data) {
    return json({
      data: null,
      errors: null,
    });
  }
  return redirect(`/author/courses/${response.data}`, {
    revalidate: [getCourses.key, getMyCourses.key],
  });
}, "/courses:post");

const pageSize = 8;

export default function Page() {
  const submission = useSubmission(createCourseAction);
  const { offset, intermidiatePage, setCurrentPage } =
    useSearchParamsPagination({ size: pageSize });
  const courses = createAsync(() =>
    getMyCourses({
      limit: pageSize,
      offset: offset(),
    }),
  );
  const pagesCount = () => Math.ceil((courses()?.total ?? 0) / pageSize);

  return (
    <div class="flex h-full flex-col px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Курсы</h1>
        <Dialog>
          <DialogTrigger as={Button}>Создать</DialogTrigger>
          <DialogContent>
            <form action={createCourseAction} method="post">
              <DialogHeader>
                <DialogTitle>Создать курс</DialogTitle>
                <DialogDescription>
                  Создайте образовательный курс и поделитесь своими знаниями.
                  Разработайте структурированный материал, который поможет
                  ученикам освоить новые навыки.
                </DialogDescription>
                <div class="grid gap-4 py-4">
                  <TextField
                    name="title"
                    class="grid grid-cols-4 items-start gap-4"
                    validationState={
                      submission.result?.errors?.title ? "invalid" : "valid"
                    }
                  >
                    <TextFieldLabel class="mt-3 ml-2 justify-self-start text-right">
                      Название
                    </TextFieldLabel>
                    <div class="col-span-3">
                      <TextFieldInput type="text" />
                      <TextFieldErrorMessage>
                        {submission.result?.errors?.title}
                      </TextFieldErrorMessage>
                    </div>
                  </TextField>
                </div>
                <DialogFooter>
                  <Button type="submit">Создать</Button>
                </DialogFooter>
              </DialogHeader>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4">
        <Suspense
          fallback={
            <For each={Array.from({ length: 4 })}>
              {() => <CourseLinkSkeleton />}
            </For>
          }
        >
          <Show when={courses()?.page.length} fallback="У вас нет курсов">
            <For each={courses()?.page}>
              {(post) => (
                <CourseCardLink
                  href={`/author/courses/${post.id}`}
                  data={post}
                />
              )}
            </For>
          </Show>
        </Suspense>
      </div>
      <Suspense>
        <Show when={pagesCount() > 1}>
          <div class="mt-auto flex justify-center">
            <CommonPagination
              count={pagesCount()}
              page={intermidiatePage()}
              onPageChange={setCurrentPage}
            />
          </div>
        </Show>
      </Suspense>
    </div>
  );
}
