import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // / runds predifined function
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //rou
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()//route
  getBye(): string {
    return this.appService.getBye();
  }
}
