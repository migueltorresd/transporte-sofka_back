import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo';

@Module({
  imports: [MongoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
