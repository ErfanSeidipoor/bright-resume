import { Resume, ResumeEntity, repository } from '@bright-resume/api-common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(ResumeEntity.name)
    private readonly resumeRepo: repository<ResumeEntity>
  ) {}

  async findOneById({ id }: { id: string }): Promise<Resume> {
    const entity = await this.resumeRepo.findById(id);
    return this.convertToModel(entity);
  }

  convertToModel(
    entity: Document<unknown, Record<string, never>, ResumeEntity>
  ): Resume {
    return new Resume(entity.toJSON());
  }
}
