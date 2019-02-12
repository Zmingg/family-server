export default interface Passport {
  id: number;
  user: string;
  password: string;
  nickname: string;
  email: string;
  phone: number;
  createtime: number;
  expiretime: number;
}