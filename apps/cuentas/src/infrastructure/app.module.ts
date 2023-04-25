import { Module } from '@nestjs/common';
import { MongoModule } from './persistence/database/mongo';
import { Controllers } from './controller';
import { Services } from './service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({ secret: process.env.SECRET_KEY }),
    MongoModule,
  ],
  controllers: [...Controllers],
  providers: [...Services],
  exports: [...Services],
})
export class AppModule {}
