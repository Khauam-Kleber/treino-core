import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';
import { Token, TokenSchema } from './token.entity';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [MongooseModule.forFeature(
  [
    { name: Token.name, schema: TokenSchema }]),
    forwardRef(() => AuthModule),
    UsersModule
  ],
  controllers: [TokenController],
  providers: [
    TokenService, 
  ],
  exports: [TokenService],
})
export class TokenModule {}
