import { Injectable } from '@nestjs/common';
import Passport from './passport.interface';
import PassportEntity from './passport.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';


@Injectable()
export default class PassportService {
  constructor(
    @InjectRepository(PassportEntity)
    private readonly passports: Repository<Passport>
  ) {}

  async findOne(@Param('id') id): Promise<Passport> {
    const res = await this.passports.find({
      id: id
    });
    const passport = res.length > 0 ? res[0] : null;
    return passport;
  }

  async findAll(): Promise<Passport[]> {
    return await this.passports.find();
  }
}