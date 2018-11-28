import * as mysql from 'mysql';

class Conn {

  static instance = null;
  query: any;

  constructor() {
    /** 单例
     * @return Conn.instance
     */
    if (!Conn.instance) {
      Conn.instance = Conn.connect();
    }
    this.query = Conn.instance.query;
    return Conn.instance;
  }

  static connect() {
    return mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'zm'
    });
  }

  // query(args) {
  //   return Conn.instance.query(args)
  // }
}

export default new Conn();
