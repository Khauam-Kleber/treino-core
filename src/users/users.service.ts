import { HttpException, HttpStatus, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectModel, SchemaFactory } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { Team } from 'src/teams/entities/team.entity';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, @Inject(REQUEST) private readonly request: Request,
  ) 
  {}

  async create(createUserDto: CreateUserDto) {
    let userExist = await this.findOneByEmail(createUserDto.email)
    if(userExist){
      throw new HttpException({
        errorMessage: 'Email Já Cadastrado'
      }, HttpStatus.FORBIDDEN)
    }

    const user = new this.userModel(createUserDto);
    user.password = bcrypt.hashSync(createUserDto.password, 8);
    return user.save();
  }

  findAll(){
    return this.userModel.find().populate('team'); //.exec(); 
  }

  findOneByEmail(email: string){
   // return this.userModel.findOne(user => user.email === email); //verificar funcionamento
    return this.userModel.findOne({email : email});

  }

  findOne(id: string){ //mudado o id para string pois no mongoDb nao é number
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 8); // verificar se senha mudou pra nao encrip 2x a mesma senha
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
  }

  async updateUserTeam(user: User, team: Team){
    return await this.userModel.findByIdAndUpdate({_id: user._id}, { $set: { team: team._id }}, {new: true});
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id: id}).exec();
  }

  
  getRequestUser(){
    return this.findOneByEmail(this.request.user['email']);
  }

}
