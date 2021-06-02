import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResolver } from './heroes.resolver';
import { Hero, HeroSchema } from 'src/schemas/hero.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/auth/strategys/jwt.strategy';

@Module({
  imports:[MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }])],
  providers: [HeroesResolver, HeroesService, JwtStrategy]
})
export class HeroesModule {}
