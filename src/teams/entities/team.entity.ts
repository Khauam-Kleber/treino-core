
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ required: true}) // -> documento (campos do objeto) -> "colunas da tabela"
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: User[]
}

export const TeamSchema = SchemaFactory.createForClass(Team);

// TeamSchema.virtual('users', {
//   ref: 'User',
//   localField: '_id',
//   foreignField: 'team',
// });