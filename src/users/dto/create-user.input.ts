import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
 @Field(() => String)
 useremail: string;
 @Field(() => String)
 password: string;
}
