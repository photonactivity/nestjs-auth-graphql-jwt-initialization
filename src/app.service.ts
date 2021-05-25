import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'photondance api';
  }

  getHelloName(name: string): string {
    return `Hello ${name}!`;
  }
}