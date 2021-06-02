import { Injectable } from '@nestjs/common';


@Injectable()
export class HeroesService {

  findAll() {
    return `serve start`;
  }

}
