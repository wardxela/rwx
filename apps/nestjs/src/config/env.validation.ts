import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  YANDEX_CLIENT_ID: z.string().nonempty(),
  YANDEX_CLIENT_SECRET: z.string().nonempty(),
  GITHUB_CLIENT_ID: z.string().nonempty(),
  GITHUB_CLIENT_SECRET: z.string().nonempty(),
  NESTJS_URL: z.string().url(),
  NESTJS_CLIENT_URL: z.string().url(),
  NESTJS_CLIENT_AUTH_CALLBACK_URL: z.string().url(),
  NESTJS_SESSION_SECRET: z.string().nonempty(),
});

export type Env = z.infer<typeof envSchema>;

export function validate(config: Record<string, unknown>): Env {
  return envSchema.parse(config);
}
