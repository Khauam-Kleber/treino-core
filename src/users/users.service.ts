import { HttpException, HttpStatus, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectModel, SchemaFactory } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Team } from 'src/teams/entities/team.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, @Inject(REQUEST) private readonly request: Request,
  ) { super(userModel); }

  async create(createUserDto: User): Promise<User> {

    let userExist = await this.findOneByEmail(createUserDto.email)
    if (userExist) {
      throw new HttpException({
        errorMessage: 'Email Já Cadastrado'
      }, HttpStatus.FORBIDDEN)
    }

    if (!createUserDto.email) {
      createUserDto.email = createUserDto.name + "@treino.com";
    }

    if (createUserDto.password) {
      createUserDto.password = bcrypt.hashSync(createUserDto.password, 8);
    }

    return await new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find().populate('team'); //.exec(); 
  }

  findOneByEmail(email: string) {
    // return this.userModel.findOne(user => user.email === email); //verificar funcionamento
    return this.userModel.findOne({ email: email });

  }

  // findOne(id: string) { //mudado o id para string pois no mongoDb nao é number
  //   return this.userModel.findById(id);
  // }

  findAllByTeamId(teamId: string) {
    return this.userModel.find({ team: teamId }).populate('team');
  }

  async update(user: User) {
    user.password = bcrypt.hashSync(user.password, 8); // verificar se senha mudou pra nao encrip 2x a mesma senha
    return this.userModel.findByIdAndUpdate(user._id, user, { new: true });
  }

  async updateUserTeam(user: User, team: Team) {
    return await this.userModel.findByIdAndUpdate({ _id: user._id }, { $set: { team: team._id } }, { new: true });
  }

  // remove(id: string) {
  //   return this.userModel.deleteOne({ _id: id }).exec();
  // }


  getRequestUser() {
    return this.findOneByEmail(this.request.user['email']);
  }

}
