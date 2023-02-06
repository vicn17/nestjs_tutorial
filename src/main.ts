import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.port || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(`http://localhost:${port}/`);
}
bootstrap();
