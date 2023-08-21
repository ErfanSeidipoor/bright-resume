import { MongooseBaseInterface } from '../mongoose-base.interface';

export interface ResumeInterface extends MongooseBaseInterface {
  fullName: string;
  phoneNumber: string;
  email: string;
  introduction: string;
}
