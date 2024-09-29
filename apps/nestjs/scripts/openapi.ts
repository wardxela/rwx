import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import openapiTS, { astToString } from "openapi-typescript";

import { AppModule } from "../src/app.module";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const apiClientSchemaPath = path.resolve(
  dirname,
  "../../../packages/api/src/schema.d.ts",
);

async function main() {
  const app = await NestFactory.create(AppModule);

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
