import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Passport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column({ length: 32 })
  password: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  createtime: number;

  @Column()
  expiretime: number;
}