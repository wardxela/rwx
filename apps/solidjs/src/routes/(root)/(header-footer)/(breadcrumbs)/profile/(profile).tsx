import { Button } from "@rwx/ui/components/button";
import { Label } from "@rwx/ui/components/label";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";
import {
  action,
  createAsync,
  json,
  useAction,
  useSubmission,
} from "@solidjs/router";
import { Suspense } from "solid-js";
import { z } from "zod";
import { UserAvatar } from "~/features/user/avatar";
import api from "~/shared/api";
import { getMe, uploadFileAction } from "~/shared/queries";

const UpdateUserSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  bio: z.string().max(500).optional(),
  image: z.string().optional(),
});

const updateProfile = action(async (formData: FormData) => {
  const data = UpdateUserSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    bio: formData.get("bio"),
    image: formData.get("image"),
  });
  console.log(data.error);
  if (!data.success) {
    return json({
      data: null,
      errors: data.error.errors,
    });
  }
  const response = await api.POST("/users/me", {
    body: data.data,
  });
  return json(
    {
      data: response.data,
      errors: null,
    },
    {
      revalidate: getMe.key,
    },
  );
});

export default function Page() {
  const profile = createAsync(() => getMe());
  const submission = useSubmission(updateProfile);
  const uploadFile = useAction(uploadFileAction);

  let fileInputRef!: HTMLInputElement;
  let inputImageHiddenRef!: HTMLInputElement;
  let firstNameRef!: HTMLInputElement;
  let lastNameRef!: HTMLInputElement;
  let bioRef!: HTMLTextAreaElement;

  const onReset = () => {
    submission.clear();
    const p = profile();
    if (!p) {
      return;
    }
    firstNameRef.value = p.firstName;
    lastNameRef.value = p.lastName;
    bioRef.value = p.bio ? p.bio : "";
  };

  const handleFileChange = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const url = await uploadFile(formData);
    if (!url) {
      return;
    }
    inputImageHiddenRef.value = url;
  };

  const firstNameError = () => {
    const error = submission.result?.errors?.find((error) =>
      error.path.includes("firstName"),
    );
    return error;
  };

  const lastNameError = () => {
    const error = submission.result?.errors?.find((error) =>
      error.path.includes("lastName"),
    );
    return error;
  };

  const bioError = () => {
    const error = submission.result?.errors?.find((error) =>
      error.path.includes("bio"),
    );
    return error;
  };

  return (
    <Suspense>
      <form
        class="mx-auto max-w-2xl space-y-8"
        action={updateProfile}
        method="post"
      >
        <div class="space-y-6">
          <h2 class="font-semibold text-xl">Данные</h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="col-span-full">
              <Label for="photo">Аватар</Label>
              <div class="mt-2 flex items-center gap-x-3">
                <UserAvatar class="size-12" />
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  class="hidden"
                />
                <input ref={inputImageHiddenRef} type="hidden" />
                <Button variant="outline" onClick={() => fileInputRef.click()}>
                  Изменить
                </Button>
              </div>
            </div>
            <TextField validationState={firstNameError() ? "invalid" : "valid"}>
              <TextFieldLabel>Имя</TextFieldLabel>
              <TextFieldInput
                ref={firstNameRef}
                type="text"
                name="firstName"
                placeholder="Имя"
                value={profile()?.firstName}
              />
              <TextFieldErrorMessage>
                {firstNameError()?.message}
              </TextFieldErrorMessage>
            </TextField>
            <TextField validationState={lastNameError() ? "invalid" : "valid"}>
              <TextFieldLabel>Фамилия</TextFieldLabel>
              <TextFieldInput
                ref={lastNameRef}
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={profile()?.lastName}
              />
              <TextFieldErrorMessage>
                {lastNameError()?.message}
              </TextFieldErrorMessage>
            </TextField>
            <TextField>
              <TextFieldLabel>Email</TextFieldLabel>
              <TextFieldInput
                disabled
                readonly
                type="email"
                placeholder="Email"
                value={profile()?.email}
              />
            </TextField>
          </div>
          <TextField validationState={bioError() ? "invalid" : "valid"}>
            <TextFieldLabel>Обо мне</TextFieldLabel>
            <TextFieldTextArea
              ref={bioRef}
              name="bio"
              placeholder="Люблю учиться, увлекаюсь программированием..."
              value={profile()?.bio ?? ""}
              class="resize-none"
            />
            <TextFieldErrorMessage>{bioError()?.message}</TextFieldErrorMessage>
          </TextField>
        </div>
        <div class="flex justify-end gap-x-4">
          <Button variant="secondary" onClick={onReset}>
            Отменить
          </Button>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </Suspense>
  );
}
