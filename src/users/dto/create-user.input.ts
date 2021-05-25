import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsEmail()
    @Field(() => String)
    useremail: string;
    @Length(6,20)
    @Field(() => String)
    password: string;
}
