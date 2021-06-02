import { Resolver, Query } from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { Hero } from 'src/schemas/heroes.schema';

@Resolver(() => Hero)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Query(() => [Hero], { name: 'heroes' })
  findAll() {
    return this.heroesService.findAll();
  }

}
