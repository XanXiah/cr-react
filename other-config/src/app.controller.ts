import { Param , Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DataDto } from './dto/create-data.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  getdata(): any {
    console.log("Test Web");
    return this.appService.getdata();
  }

  @Post()
  async create(@Body() dataDto:DataDto) {
    return this.appService.create(dataDto);
  }

  @Post('setid/:specificid')
  async createSet(@Param('specificid') specificid:string , @Body() dataDto:DataDto) {
    return this.appService.createSet(specificid,dataDto);
  }

}
