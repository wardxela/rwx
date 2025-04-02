import { createApp } from "./app";

async function bootstrap() {
  const app = await createApp();
  await app.listen(3001);
}

void bootstrap();
