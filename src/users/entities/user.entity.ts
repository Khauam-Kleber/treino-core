import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId, SchemaTypes, Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Team } from 'src/teams/entities/team.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true}) // -> documento (campos do objeto) -> "colunas da tabela"
  name: string;

  @Prop({ required: true,  unique: true })
  email: string;

  @Prop({ required: true })
  password: string;
  
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' } })
  team: Team;

  // @Prop({ required: false })
  // teste: String;

  // @Prop({ type: SchemaTypes.ObjectId, ref: 'Team', required: false })
  // team: Types.ObjectId;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Team.name })
  // @Type(() => Team)
  // team: Team;



}

export const UserSchema = SchemaFactory.createForClass(User);