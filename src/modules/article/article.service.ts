import { Injectable } from '@nestjs/common';
import Article from './article.interface';
import ArticleEntity from './article.entity';
import { ArticleDto } from './article.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articles: Repository<Article>
  ) {}

  async findOne(id: number): Promise<Article> {
    const res = await this.articles.find({
      id: id
    });
    const passport = res.length > 0 ? res[0] : null;
    return passport;
  }

  async findAll(): Promise<Article[]> {
    return await this.articles.find();
  }

  async create(createArticleDto: ArticleDto): Promise<any> {
    const time: number = Math.round(new Date().getTime() / 1000);
    return await this.articles.insert({
      ...createArticleDto,
      createtime: time,
      updatetime: time
    });
  }

  async update(id: number, updateArticleDto: ArticleDto): Promise<any> {
    const time: number = Math.round(new Date().getTime() / 1000);
    const article: any = await this.articles.findOne(id);
 
    return await this.articles.save({
      ...article,
      ...updateArticleDto,
      updatetime: time
    });
  }

  async delete(id: number): Promise<any> {
    const article: any = await this.articles.findOne(id);
    if (!article) return 'no record';
    return await this.articles.remove(article);
  }
}