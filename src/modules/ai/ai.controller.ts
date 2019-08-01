import { Controller, Get, Param, Query } from '@nestjs/common';
import { AiService } from './ai.service';
import { User } from './interfaces/user.interface';
import { ApiUseTags, ApiBearerAuth, ApiResponse} from '@nestjs/swagger';
import { GerUserDto } from './dto/GetUserDto'
import { ResponseDto, Response } from '../ResponseDto'

type aa = string

@ApiUseTags('ai')
@ApiBearerAuth()
@Controller()
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('user')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Response<User>,
  })
  findOne(
    //   @Param('id') id: number,
      @Query() query: GerUserDto
      ): User {

    return {
      id: 99,
      age: 10,
      name: 'ss'
    };
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.aiService.findAll();
  }
}