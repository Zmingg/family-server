import conn from '../conn';
import Auth from '../auth';

/**
 *
 * @param sql
 * @param params [key]
 * @param authRequire
 * @param callback
 */
const request = ({sql, params = [], authRequire = true, callback}) => (ctx, next) => new Promise(resolve => {
  const body = ctx.request.body;
  const header = ctx.request.header;

  if (authRequire) {
    const auth = Auth.verify(header['token']);
    if (!auth.auth) {
      return resolve(ctx.body = {
        code: 101,
        data: '',
        msg: auth.message,
        serverTime: new Date(),
      });
    }
  }

  const bodyParams = params.map(param => body[param]);
  conn.query({
    sql: sql,
    values: bodyParams,
    timeout: 10000
  }, (...args) => {

    const {code = 0, data = '', ...rest} = callback(...args);
    const response = {
      code,
      data,
      msg: args.error ? 'failed' : 'succeed',
      serverTime: new Date(),
      ...rest
    };

    return resolve(ctx.body = response);
  });
});

export {request};
