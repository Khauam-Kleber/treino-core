import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { User, UserSchema } from './entities/user.entity';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';
import { HttpModule } from '@nestjs/axios/dist';


@Module({
  imports: [MongooseModule.forFeature(
  [
    { name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),
    HttpModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService, 
    
   
  ],
  exports: [UsersService],
})
export class UsersModule {}
