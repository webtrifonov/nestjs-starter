import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): object {
    return {
      date: `${new Date().toString()}`,
      utc: `${new Date().toUTCString()}`,
      iso: `${new Date().toISOString()}`,
    };
  }
}
