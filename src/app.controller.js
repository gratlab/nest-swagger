import { Controller, Dependencies, Get, Param, Bind } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get(':id')
  @Bind(Param('id'))
  findById(id) {
      return `This action returns a #${id} contract`;
  }
}
