import { ResumeEntity, ResumeSchema } from '@bright-resume/api-common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResumeService } from './service/resume.service';
import { ResumeResolver } from './resolver/resume.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ResumeEntity.name, schema: ResumeSchema },
    ]),
  ],
  providers: [ResumeService, ResumeResolver],
})
export class ResumeModule {}
