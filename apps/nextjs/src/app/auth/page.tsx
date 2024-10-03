import Image from "next/image";
import Link from "next/link";

import { Button } from "@rwx/ui/button";

import { env } from "~/env";

export default function Page() {
  return (
    <div className="grid h-full place-items-center">
      <div className="flex flex-col items-center rounded-xl bg-zinc-900 p-12 text-center">
        <h1 className="mb-8 text-3xl font-bold">Welcome to RWX</h1>
        <div className="flex w-full max-w-60 flex-col">
          <Button asChild>
            <Link
              href={`${env.NEXT_PUBLIC_NESTJS_URL}/auth/yandex`}
              className="gap-2"
            >
              <Image alt="Yandex" src="/yandex.png" width={20} height={20} />
              Continue with Yandex
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
