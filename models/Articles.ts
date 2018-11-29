import {request} from './index';

export default class Article {

  /**
   * Find Articles.
   *
   * @return {function(*=): function(*, *)}
   */
  static findArticles = request({
    sql: 'SELECT * FROM `article`',
    callback: (error, results, fields) => ({
      code: 0,
      data: results
    })
  });


}
