import { UseFilters, Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import ArticleService from './article.service';
import { ArticleDto } from './article.dto';
import HttpException from '../../exceptions/http';

@UseFilters(new HttpException())
@Controller('articles')
export default class PassportController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: ArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.articleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto: ArticleDto) {
    return this.articleService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.articleService.delete(id);
  }
}