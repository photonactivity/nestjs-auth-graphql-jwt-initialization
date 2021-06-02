import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: Types.ObjectId;
  @Field(type => String)
  @Prop()
  useremail: string;
  @Field(type => String)
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);