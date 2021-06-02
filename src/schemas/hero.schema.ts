import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type HeroDocument = Hero & Document;

@ObjectType()
@Schema()
export class Hero {
  @Field(() => String)
  _id: Types.ObjectId;
  @Field(type => String)
  @Prop()
  heroTitle: string;
  @Field(type => String)
  @Prop()
  heroBody: string;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);