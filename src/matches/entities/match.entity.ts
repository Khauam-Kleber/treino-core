import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { Team } from 'src/teams/entities/team.entity';

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

}

export const MatchSchema = SchemaFactory.createForClass(Match);
