import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHeroInput {
  @Field(() => String)
  heroTitle: string;
  @Field(() => String)
  heroBody: string;
}
