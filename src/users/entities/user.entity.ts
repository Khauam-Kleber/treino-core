import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId, SchemaTypes, Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Team } from 'src/teams/entities/team.entity';
import { BaseEntity } from 'src/base/base.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true}) // -> documento (campos do objeto) -> "colunas da tabela"
  name: string;

  @Prop({ required: true,  unique: true })
  email: string;

  @Prop({ required: false })
  password: string;
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
  team: Team;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface User extends BaseEntity { //vai servir de DTO para o crud generico
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  team: Team;
}