import api from "~/shared/api";

export default async function HomePage() {
  const result = await api
    .GET("/", { parseAs: "text" })
    .then((res) => res.data);

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-blue-200">Read</span>{" "}
          <span className="text-blue-400">Write</span>{" "}
          <span className="text-blue-600">Execute</span>
        </h1>
        {result}
        <div className="w-full max-w-2xl overflow-y-scroll"></div>
      </div>
    </main>
  );
}
