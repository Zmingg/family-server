import mysql from 'mysql';

class Conn {

  static instance = null;

  constructor() {
    /** 单例
     * @return Conn.instance
     */
    if (!Conn.instance) {
      Conn.instance = Conn.connect();
    }
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


}

export default new Conn();
