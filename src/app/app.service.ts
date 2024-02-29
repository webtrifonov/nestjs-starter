import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      date: `${new Date().toString()}`,
      utc: `${new Date().toUTCString()}`,
      iso: `${new Date().toISOString()}`,
    };
  }
}
