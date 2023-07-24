import { Global, Module } from '@nestjs/common';
import { MongooseModule } from './mongo/mongoose.module';

@Global()
@Module({ imports: [MongooseModule] })
export class DatabaseModule {}
