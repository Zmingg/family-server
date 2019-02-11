import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import PassportService from './passport.service';

@Controller('passports')
export default class PassportController {
  constructor(private readonly passportService: PassportService) {}

  @Post()
  create(@Body() createCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query) {
    return this.passportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.passportService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}