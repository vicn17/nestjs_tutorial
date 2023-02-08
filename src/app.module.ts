import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { connectDB } from './config/mongodb/db.connect';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.url_connect || connectDB),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
