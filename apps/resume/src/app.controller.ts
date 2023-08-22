import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthChecker(): string {
    return 'health';
  }
}
