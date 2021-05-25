import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResolver } from './heroes.resolver';

@Module({
  providers: [HeroesResolver, HeroesService]
})
export class HeroesModule {}
