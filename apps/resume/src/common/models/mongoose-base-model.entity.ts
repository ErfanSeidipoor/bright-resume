import { Document } from "mongoose";
import { Prop, Schema } from "@nestjs/mongoose";
@Schema({ timestamps: true })
export abstract class MongooseBaseModel extends Document {
  @Prop({ type: Date })
  deletedAt: Date;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}
