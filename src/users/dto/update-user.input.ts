import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

// TODO 
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
   @Field(() => String)
   _id: string;
}
