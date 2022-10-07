import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ModuleRef, ContextIdFactory } from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor( private moduleRef: ModuleRef) {
    super({
      // passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string, request: Request,): Promise<any> {

    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    
    const user = await authService.validateUser(email, password);
    if (!user) {
      throw new HttpException({
        errorMessage: 'UNAUTHORIZED'
      }, HttpStatus.UNAUTHORIZED)
    }
    return user;
  }
}