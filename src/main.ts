import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
import * as dotenv from 'dotenv';
dotenv.config();
bootstrap();
dotenv.config({ path: './.env' });