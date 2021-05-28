import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CorsConfig, NestConfig } from 'configs/config.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation 输入验证
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');
  
  // Cors
  if (corsConfig.enabled) {
    app.enableCors();
  }
  
  await app.listen(process.env.PORT || nestConfig.port || 3000);
  console.log(`🚀 🚀 🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
