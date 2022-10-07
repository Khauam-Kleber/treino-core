import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel, SchemaFactory } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { HttpService } from '@nestjs/axios';
import { Token, TokenDocument } from './token.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { Inject } from '@nestjs/common/decorators';
import { forwardRef } from '@nestjs/common/utils';

@Injectable()
export class TokenService {
  constructor(
      @InjectModel(Token.name) private userModel: Model<TokenDocument>, 
      private userService: UsersService,

      @Inject(forwardRef(() => AuthService))
      private authService: AuthService
  
     )
  {}
 
  async create(token: string, email:string) {
    let tokenInstace = await this.userModel.findOne({email : email});
    // const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10); usar bcrypt para armazenar no banco
    if(tokenInstace){
      return this.userModel.findByIdAndUpdate(tokenInstace.id, { hash: token, email: email }, {new: true});
    }else{
      const user = new this.userModel({ hash: token, email: email });
      return user.save();
    }
  }

  // async refreshToken(oldToken: string) {

  //   let oldTokenInstance = await this.userModel.findOne({hash : oldToken});
  //   if(oldToken && oldTokenInstance){
  //     let userInstance = await this.userService.findOneByEmail(oldTokenInstance.email);
  //     return this.authService.login(userInstance);
  //   }
  //   else{
  //     throw new HttpException({
  //       errorMessage: 'Invalid Token'
  //     }, HttpStatus.UNAUTHORIZED)
  //   }
  // }

}
