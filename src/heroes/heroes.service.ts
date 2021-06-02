import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero, HeroDocument } from 'src/schemas/hero.schema';
import { CreateHeroInput } from './dto/create-hero.input';

@Injectable()
export class HeroesService {
  constructor(
    @InjectModel(Hero.name) private heroModel: Model<HeroDocument>,
  ) { }
  
  async create(createHeroInput: CreateHeroInput): Promise<Hero> {
    const createdHero = new this.heroModel(createHeroInput);
    return createdHero.save();
  }
    
  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

}
