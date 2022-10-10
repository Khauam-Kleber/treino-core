import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { SetMetadata } from '@nestjs/common';
import { User } from './entities/user.entity';
import { BaseController } from 'src/base/base.controller';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Controller('users')
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService, private authService: AuthService) {  super(usersService); }

 
  @Public() // todos os metodos sem o public terao que ter token para acesso
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post()
  create(@Body() createUserDto: User) {
    delete createUserDto._id;
    return this.usersService.create(createUserDto);
  }

  @Get('team-users/:id')
  findAllByTeamId(@Param('id') teamId: string) {
    return this.usersService.findAllByTeamId(teamId);
  }
}
