import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { CreateHeroInput } from './dto/create-hero.input';
import { Hero } from 'src/schemas/hero.schema';

@Resolver(() => Hero)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Mutation(() => Hero)
  async createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    return this.heroesService.create(createHeroInput);
  }

  @Query(() => [Hero], { name: 'heroes' })
  async findAll() {
    return this.heroesService.findAll();
  }

}
