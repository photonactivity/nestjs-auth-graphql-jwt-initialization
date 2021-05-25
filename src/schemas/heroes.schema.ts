import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type HeroesDocument = Heroes & Document;

@ObjectType()
@Schema()
export class Heroes {
  @Field(type => String)
  @Prop()
  title: string;
  @Field(type => String)
  @Prop()
  lead: string;
}

export const HeroesSchema = SchemaFactory.createForClass(Heroes);