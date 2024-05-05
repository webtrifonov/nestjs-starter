import { Controller, Get, Param, Res } from '@nestjs/common';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { publicPath } from '../common/utils/utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  home(): object {
    return this.appService.home();
  }

  @Get('public/:filename')
  public(@Param('filename') filename, @Res() res): Observable<object> {
    const filePath = join(publicPath(), filename);
    return of(res.sendFile(filePath));
  }
}
