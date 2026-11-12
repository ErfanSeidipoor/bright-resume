import { Controller, Get } from "@nestjs/common";
import { PdfService } from "./modules/pdf/pdf.service";

@Controller()
export class AppController {
  constructor(private readonly pdfService: PdfService) {}

  @Get()
  getData() {
    return "Bright Resume File Micro Service 🚀🚀";
  }
}
