import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, Req, Query } from '@nestjs/common';
import { TokenService } from './token.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  // @Public()
  // @Get('refresh')
  // refresh(@Query() params/*@Body() data: RefreshTokenDto*/) { //@Query() params
  //   console.log(params)
  //   return this.tokenService.refreshToken(params.oldToken);
  // }


}
