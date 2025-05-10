import * as path from "node:path";
import {
  Controller,
  Get,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import * as mime from "mime-types";
import { SessionGuard } from "src/auth/guards/session.guard";
import { FileDto } from "./dto/file.dto";
import { FilesService } from "./files.service";

@Controller("files")
export class FilesController {
  constructor(private fileService: FilesService) {}

  @Get(":fileName")
  async getFile(@Param("fileName") fileName: string, @Res() res: Response) {
    const file = await this.fileService.get(fileName);
    if (!file) {
      throw new NotFoundException("File not found");
    }
    const ext = path.extname(fileName);
    const mimeType = mime.lookup(ext) || "application/octet-stream";
    res.type(mimeType);
    res.send(file);
  }

  @Post("upload")
  @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
        ],
      }),
    )
    file: Express.Multer.File,
  ): Promise<FileDto> {
    const fileName = await this.fileService.save(
      file.originalname,
      file.buffer,
    );
    return { url: `/files/${fileName}` };
  }
}
