import { Button } from "@rwx/ui/components/button";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";
import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { getMe } from "~/shared/queries";

export default function Page() {
  let firstNameRef!: HTMLInputElement;
  let lastNameRef!: HTMLInputElement;
  let bioRef!: HTMLTextAreaElement;

  const profile = createAsync(() => getMe());

  const onReset = () => {
    const p = profile();
    if (!p) {
      return;
    }
    firstNameRef.value = p.firstName;
    lastNameRef.value = p.lastName;
    bioRef.value = p.bio ? p.bio : "";
  };

  return (
    <Suspense>
      <form class="mx-auto max-w-2xl space-y-8">
        <div class="space-y-6">
          <h2 class="font-semibold text-xl">Профиль</h2>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <TextField>
              <TextFieldLabel>Имя</TextFieldLabel>
              <TextFieldInput
                ref={firstNameRef}
                type="text"
                placeholder="Имя"
                value={profile()?.firstName}
              />
            </TextField>
            <TextField>
              <TextFieldLabel>Фамилия</TextFieldLabel>
              <TextFieldInput
                ref={lastNameRef}
                type="text"
                placeholder="Фамилия"
                value={profile()?.lastName}
              />
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
          <TextField>
            <TextFieldLabel>Обо мне</TextFieldLabel>
            <TextFieldTextArea
              ref={bioRef}
              placeholder="Люблю учиться, увлекаюсь программированием..."
              value={profile()?.bio ?? ""}
              class="resize-none"
            />
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
