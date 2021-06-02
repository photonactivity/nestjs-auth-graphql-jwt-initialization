import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResolver } from './heroes.resolver';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }])],
  providers: [HeroesResolver, HeroesService]
})
export class HeroesModule {}
