import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class AiService {

  findAll(): User[] {
    return [];
  }
}