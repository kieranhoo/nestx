import { AppModule } from '@/modules';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

export default class App {
  private engine: NestFastifyApplication;

  public async initialize() {
    this.engine = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
  }

  public async listen(port: number) {
    await this.engine.listen(port);
  }
}
