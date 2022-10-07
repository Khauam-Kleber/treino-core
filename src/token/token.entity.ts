import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TokenDocument = Token & Document;

@Schema()
export class Token {
  id: string;

  @Prop({ required: true })
  hash: string;

  @Prop({ required: true })
  email: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);