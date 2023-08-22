import { MongooseBaseEntity } from './mongoose-base.entity';
import { ResumeInterface } from '../interface/resume';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ResumeEntity
  extends MongooseBaseEntity
  implements ResumeInterface
{
  @Prop({ type: String })
  fullName: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  introduction: string;
}

export const ResumeSchema = SchemaFactory.createForClass(ResumeEntity);
