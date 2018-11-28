import {request} from './index';
import Auth from '../auth';

export default class User {

  /**
   * 获取用户列表
   * @return {function(*=): function(*, *)}
   */
  static findUsers = request({
    sql: 'SELECT * FROM `user`',
    callback: (error, results, fields) => ({
      code: 0,
      data: results
    })
  });

  /**
   * 登陆
   */
  static createSession = request({
    sql: 'SELECT * FROM `user` WHERE `username` = ? AND `password` = ?',
    params: ['user', 'pass'],
    authRequire: false,
    callback(error, results, fields) {
      if (error) {
        return {
          code: 1,
          msg: error
        }
      }
      if (results && results.length === 1) {
        const {password, ...rest} = results[0];
        const token = Auth.sign(results[0]);
        return {
          code: 0,
          data: {
            token: token,
            session: rest
          }
        };
      }
      if (results && results.length === 0) {
        return {
          code: 101,
          msg: '用户名密码不正确',
        }
      }
    }
  })


}