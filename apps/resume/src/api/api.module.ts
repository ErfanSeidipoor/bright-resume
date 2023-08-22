import { Module } from '@nestjs/common';
import { ResumeModule } from './modules/resume/resume.module';

@Module({
  imports: [ResumeModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
