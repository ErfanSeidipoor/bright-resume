import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongooseBaseInterface } from '../interface';
@Schema()
export abstract class MongooseBaseEntity
  extends Document
  implements MongooseBaseInterface
{
  id: string;

  @Prop({ type: Date })
  deletedAt: Date;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}
