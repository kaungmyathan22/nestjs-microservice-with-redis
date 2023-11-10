import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
    });
  }

  public getHello(): Promise<string> {
    return this.client.send<string, string>('getHello', 'Michael').toPromise();
  }
}
