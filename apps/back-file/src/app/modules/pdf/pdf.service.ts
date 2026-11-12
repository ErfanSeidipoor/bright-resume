import { EnvironmentVariablesEnum } from "@@back-file/app/enums";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import puppeteer from "puppeteer";

@Injectable()
export class PdfService {
  constructor(private readonly configService: ConfigService) {}

  async generatePdf(fileId: string, resumeId: string) {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    });

    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.goto(
      this.configService.get(EnvironmentVariablesEnum.RESUME_URL) +
        "/resume/" +
        resumeId
    );

    await page.emulateMediaType("print");

    const filename = fileId + ".pdf";
    const path = join(process.cwd(), "./files/" + filename);

    await page.pdf({
      path,
      format: "A4",
      printBackground: true,
      width: "21cm",
      height: "29.7cm",
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    });

    await browser.close();

    return path;
  }
}
