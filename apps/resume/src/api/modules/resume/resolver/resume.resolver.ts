import { Resume } from '@bright-resume/api-common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ResumeService } from '../service/resume.service';

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Query(() => Resume)
  async author(@Args('id') id: string): Promise<Resume> {
    return this.resumeService.findOneById({ id });
  }
}
