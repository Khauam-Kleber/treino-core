import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { User } from 'src/users/entities/user.entity';
import { TeamsService } from 'src/teams/teams.service';
import { Team } from 'src/teams/entities/team.entity';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService, private teamService: TeamsService, ) {}

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

    return {
      token: this.jwtService.sign(payload),
      data: new CreateUserDto(user)
    }
  };

}