import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HeroesModule } from './heroes/heroes.module';
import config from '../configs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
    }),
    MongooseModule.forRoot('mongodb+srv://photonactivity:@liujing1984@cluster0.79oqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UsersModule,
    HeroesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
