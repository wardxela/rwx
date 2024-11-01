export default function Page() {
  // TODO
  return (
    <div class="grid h-full place-items-center">
      <div class="flex flex-col items-center rounded-xl bg-zinc-900 p-12 text-center">
        <h1 class="mb-8 text-3xl font-bold">Welcome to RWX</h1>
        <div class="flex w-full max-w-60 flex-col">
          <a
            href={`${process.env.NEXT_PUBLIC_NESTJS_URL}/auth/yandex`}
            class="gap-2"
          >
            <img alt="Yandex" src="/yandex.png" width={20} height={20} />
            Continue with Yandex
          </a>
        </div>
      </div>
    </div>
  );
}
