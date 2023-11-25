import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getData() {
    return "Bright Resume Gateway Micro Service 🚀🚀";
  }
}
