import * as crypto from "node:crypto";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";

@Injectable()
export class FilesService {
  private basePath = path.join(process.cwd(), "uploads");

  constructor(private configService: ConfigService) {}

  private generateUniqueFileName(originalName: string): string {
    const extension = path.extname(originalName);
    const uuid = crypto.randomUUID();
    return `${uuid}${extension}`;
  }

  async save(originalFileName: string, buffer: Buffer): Promise<string> {
    try {
      await fs.mkdir(this.basePath, { recursive: true });
    } catch {
      // Ignore error
    }
    const fileName = this.generateUniqueFileName(originalFileName);
    const filePath = path.join(this.basePath, fileName);
    await fs.writeFile(filePath, buffer);
    return fileName;
  }

  async get(fileName: string): Promise<Buffer | null> {
    const filePath = path.join(this.basePath, fileName);
    try {
      return await fs.readFile(filePath);
    } catch (error) {
      return null;
    }
  }

  resolve(pathOrUrl: string): string {
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
      return pathOrUrl;
    }
    return `${this.configService.get("NESTJS_URL")}${pathOrUrl}`;
  }
}
