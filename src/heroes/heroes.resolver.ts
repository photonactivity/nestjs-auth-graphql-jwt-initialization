import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { Hero } from './entities/hero.entity';
import { CreateHeroInput } from './dto/create-hero.input';
import { UpdateHeroInput } from './dto/update-hero.input';

@Resolver(() => Hero)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Mutation(() => Hero)
  createHero(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    return this.heroesService.create(createHeroInput);
  }

  @Query(() => [Hero], { name: 'heroes' })
  findAll() {
    return this.heroesService.findAll();
  }

  @Query(() => Hero, { name: 'hero' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.heroesService.findOne(id);
  }

  @Mutation(() => Hero)
  updateHero(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
    return this.heroesService.update(updateHeroInput.id, updateHeroInput);
  }

  @Mutation(() => Hero)
  removeHero(@Args('id', { type: () => Int }) id: number) {
    return this.heroesService.remove(id);
  }
}
