import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

export default class Auth {

  static cert = fs.readFileSync(path.resolve(__dirname, 'private.key'));

  static sign(data) {
    return jwt.sign({data}, Auth.cert, {expiresIn: '1h'});
  }

  static verify(token) {
    return jwt.verify(token, Auth.cert, function(error, data) {
      if (error) {
        return {
          auth: false,
          message: `${error.name}: ${error.message}`
        }
      } else {
        return {
          auth: true,
          ...data
        };
      }
    });
  }

}
