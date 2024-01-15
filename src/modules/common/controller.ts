import { Controller, Get } from '@nestjs/common';
import { CommonService } from './service';

@Controller()
export class CommonController {
  constructor(private readonly service: CommonService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
