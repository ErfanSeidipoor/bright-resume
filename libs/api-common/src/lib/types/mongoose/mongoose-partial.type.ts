import { FlattenMaps, Types } from 'mongoose';
import { MongooseBaseEntity } from '../../entity';

export type MongoosePartial<Entity extends MongooseBaseEntity> = Partial<
  FlattenMaps<Entity & { _id: Types.ObjectId }>
>;
