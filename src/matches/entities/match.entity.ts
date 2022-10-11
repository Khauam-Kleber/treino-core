import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Team } from 'src/teams/entities/team.entity';
import { BaseEntity } from 'src/base/base.entity';

export type MatchDocument = Match & Document;

@Schema()
export class Match {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
  teamHome: Team;

  @Prop()
  scoreboardTeamHome: number;

  @Prop()
  scoreboardTeamAgainst: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Team' })
  teamAgainst: Team;

  @Prop()
  roundsToObserve: string;

  @Prop()
  learnings: string;

  @Prop()
  date: Date;

  //colocar data fixa ou dinamica para utilizar nos filtros depois
  //seria bom colocar um status -> AVALIAR, AVALIADO...

}

export const MatchSchema = SchemaFactory.createForClass(Match);


export interface Match extends BaseEntity {
  _id: ObjectId;
  teamHome: Team;
  scoreboardTeamHome: number;
  scoreboardTeamAgainst: number;
  teamAgainst: Team;
  roundsToObserve: string;
  learnings: string;
  date: Date;
}