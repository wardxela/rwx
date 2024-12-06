import { Button } from "@rwx/ui/components/button";
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldTextArea,
} from "@rwx/ui/components/text-field";

export default function Page() {
  return (
    <>
      <div class="container mt-15 mb-15">
        <div class="flex flex-col gap-8 lg:flex-row">
          <div>
            <h1 class="mb-5 text-3xl leading-10 font-semibold sm:mb-7 sm:text-5xl">
              Нужна встреча?
            </h1>
            <p class="max-w mb-4 max-w-md text-neutral-600 sm:text-lg">
              Нужна встреча? Мы готовы обсудить ваши задачи и предложить
              оптимальные решения.
            </p>
            <div class="mb-4 flex gap-6">
              <div class="grid size-14 place-items-center rounded-lg bg-neutral-100">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.82667 10.3867C6.74667 14.16 9.84 17.24 13.6133 19.1733L16.5467 16.24C16.9067 15.88 17.44 15.76 17.9067 15.92C19.4 16.4133 21.0133 16.68 22.6667 16.68C23.4 16.68 24 17.28 24 18.0133V22.6667C24 23.4 23.4 24 22.6667 24C10.1467 24 0 13.8533 0 1.33333C0 0.6 0.6 0 1.33333 0H6C6.73333 0 7.33333 0.6 7.33333 1.33333C7.33333 3 7.6 4.6 8.09333 6.09333C8.24 6.56 8.13333 7.08 7.76 7.45333L4.82667 10.3867Z"
                    fill="#FF782D"
                  />
                </svg>
              </div>
              <div class="flex flex-col justify-between">
                <div class="leading-7 text-neutral-600">Телефон</div>
                <div class="leading-tight font-medium">+7 (900) 900 5555</div>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="grid size-14 place-items-center rounded-lg bg-neutral-100">
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.667 0.333313H3.33366C1.86699 0.333313 0.680326 1.53331 0.680326 2.99998L0.666992 19C0.666992 20.4666 1.86699 21.6666 3.33366 21.6666H24.667C26.1337 21.6666 27.3337 20.4666 27.3337 19V2.99998C27.3337 1.53331 26.1337 0.333313 24.667 0.333313ZM24.667 5.66665L14.0003 12.3333L3.33366 5.66665V2.99998L14.0003 9.66665L24.667 2.99998V5.66665Z"
                    fill="#FF782D"
                  />
                </svg>
              </div>
              <div class="flex flex-col justify-between">
                <div class="leading-7 text-neutral-600">Email</div>
                <div class="leading-tight font-medium">
                  contact@wardxela.com
                </div>
              </div>
            </div>
          </div>
          <div class="grow">
            <div
              style="position:relative;overflow:hidden;"
              class="w-full rounded-xl"
            >
              <a
                href="https://yandex.ru/maps/org/marko_moll/1139756887/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:0px;"
              >
                Marko Mall
              </a>
              <a
                href="https://yandex.ru/maps/11/ryazan/category/shopping_mall/184108083/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:14px;"
              >
                Shopping mall in Ryazan
              </a>
              <a
                href="https://yandex.ru/maps/11/ryazan/category/entertainment_center/184106372/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:28px;"
              >
                Entertainment center in Ryazan
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.637131%2C54.653901&mode=poi&poi%5Bpoint%5D=39.636234%2C54.650551&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1139756887&z=13.81"
                class="min-h-110 w-full"
                allowfullscreen={true}
                style="position:relative;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="container mb-24">
        <h6 class="mb-3 text-2xl leading-10 font-semibold sm:text-3xl">
          Напишите нам
        </h6>
        <div class="mb-5 leading-7 font-normal text-neutral-600">
          Ваш адрес электронной почты опубликован не будет. Поля, обязательные
          для заполнения, помечены *
        </div>
        <form class="mb-10 grid grid-cols-1 gap-7 sm:grid-cols-2">
          <TextField validationState="invalid">
            <TextFieldInput
              class="border-destructive"
              type="text"
              required
              placeholder="Имя*"
            />
            <TextFieldErrorMessage>Обязательное поле</TextFieldErrorMessage>
          </TextField>
          <TextField validationState="invalid">
            <TextFieldInput
              class="border-destructive"
              type="email"
              required
              placeholder="Email*"
            />
            <TextFieldErrorMessage>Неверный формат почты</TextFieldErrorMessage>
          </TextField>
          <TextField class="sm:col-span-2">
            <TextFieldTextArea required placeholder="Комментарий*" />
          </TextField>
          <div>
            <Button>Отправить</Button>
          </div>
        </form>
      </div>
    </>
  );
}
