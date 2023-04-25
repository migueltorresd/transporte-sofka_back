import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo';
import { Controllers } from './controller';
import { Services } from './service';

@Module({
  imports: [MongoModule],
  controllers: [...Controllers],
  providers: [...Services],
})
export class AppModule {}
