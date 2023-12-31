import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BlogModule } from './blog.module';

const logger = new Logger('Blog');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BlogModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  await app.listen().then(() => logger.log('Microservice is listening'));
}
bootstrap();
