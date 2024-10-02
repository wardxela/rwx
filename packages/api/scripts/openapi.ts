import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import openapiTS, { astToString } from "openapi-typescript";

import { createApp } from "@rwx/nestjs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const apiClientSchemaPath = path.resolve(dirname, "../src/dist/schema.d.ts");

async function main() {
  const app = await createApp();

  const config = new DocumentBuilder()
    .setTitle("RWX API")
    .setDescription("RWX API description")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const ast = await openapiTS(JSON.stringify(document));
  const contents = astToString(ast);

  await fs.writeFile(apiClientSchemaPath, contents);
}

void main();
