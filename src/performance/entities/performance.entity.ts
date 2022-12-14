import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId, SchemaTypes, Types } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';
import { Match } from 'src/matches/entities/match.entity';
import { BaseEntity } from 'src/base/base.entity';

export type PerformanceDocument = Performance & Document;

@Schema()
export class Performance {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  player: User;

  @Prop({ required: true}) 
  rating: number;

  @Prop({ required: true}) 
  kills: number;

  @Prop({ required: true}) 
  assists: number;

  @Prop({ required: true}) 
  deaths: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Match' })
  match: Match;

}

export const PerformanceSchema = SchemaFactory.createForClass(Performance);

export interface Performance extends BaseEntity {
  _id: ObjectId;
  player: User;
  rating: number;
  kills: number;
  assists: number;
  deaths: number;
  match: Match;
}