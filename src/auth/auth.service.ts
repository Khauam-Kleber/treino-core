import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private tokenService: TokenService, ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      // const { password, ...result } = user;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    const verificarExiste = await this.usersService.findOneByEmail(user.email);
    // if(!verificarExiste){
    //    throw new HttpException({
    //     errorMessage: 'Usuario não cadastrado!'
    //   }, HttpStatus.BAD_REQUEST)
    // }
    return {
      token: this.jwtService.sign(payload),
      data: new CreateUserDto(user)
    }
  };

}