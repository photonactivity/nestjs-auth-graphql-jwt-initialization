import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { CreateHeroInput } from './dto/create-hero.input';
import { Hero } from 'src/schemas/hero.schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-jwt.guard';

@Resolver(() => Hero)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Mutation(() => Hero)
  @UseGuards(GqlAuthGuard)
  async createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    return this.heroesService.create(createHeroInput);
  }

  @Query(() => [Hero], { name: 'heroes' })
  async findAll() {
    return this.heroesService.findAll();
  }

}
