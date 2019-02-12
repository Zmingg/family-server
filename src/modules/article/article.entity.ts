import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ default: '' })
  subtitle: string;

  @Column({ default: '' })
  author: string;

  @Column()
  createtime: number;

  @Column()
  updatetime: number;
}