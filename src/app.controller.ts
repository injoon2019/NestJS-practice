import { Body, Controller, Get, Param, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() Body,
    @Param() param: { id: string; name: string },
  ): string {
    return this.appService.getHello();
  }
}
