export default function Home() {
  return (
    <main>
      <main class="container h-screen py-16">
        <div class="flex flex-col items-center justify-center gap-4">
          <h1 class="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span class="text-blue-200">Read</span>{" "}
            <span class="text-blue-400">Write</span>{" "}
            <span class="text-blue-600">Execute</span>
          </h1>
          <div class="w-full max-w-2xl overflow-y-scroll"></div>
        </div>
      </main>
    </main>
  );
}
