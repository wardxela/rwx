import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import openapiTS, { astToString } from "openapi-typescript";

import { createApp } from "../dist/app";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const output = path.resolve(dirname, "../../../packages/api/src");
const apiClientSchemaPath = path.resolve(output, "schema.d.ts");

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

  await fs.mkdir(output, { recursive: true });
  await fs.writeFile(apiClientSchemaPath, contents);
}

void main();
