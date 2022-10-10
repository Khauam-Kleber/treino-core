
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/base.entity';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true})
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
  teamOwner: Team;
}

export const TeamSchema = SchemaFactory.createForClass(Team);

export interface Team extends BaseEntity {
  _id: ObjectId;
  name: string;
  users: User[]
  teamOwner: Team;
}