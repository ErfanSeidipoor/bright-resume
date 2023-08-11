import { Prop, Schema } from '@nestjs/mongoose';
@Schema()
export abstract class MongooseBaseEntity extends Document {
  // @Prop({
  //   type: Types.ObjectId,
  //   required: true,
  //   unique: true,
  //   get: (v) => v.toString(),
  // })
  // _id: Types.ObjectId;

  // @Prop({
  //   type: Types.ObjectId,
  //   ref: Collection.USER,
  // })
  // owner: PopulatedDoc<User>;

  // @Prop({
  //   type: Types.ObjectId,
  //   ref: Collection.USER,
  // })
  // updatedBy: PopulatedDoc<User>;

  @Prop({ type: Date })
  deletedAt: Date;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}
