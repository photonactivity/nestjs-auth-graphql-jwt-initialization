import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: Types.ObjectId;
  @ApiProperty({ description: 'The useremail of the User' })
  @Field(type => String)
  @Prop()
  useremail: string;
  @ApiProperty({ description: 'The password of the User' })
  @Field(type => String)
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);