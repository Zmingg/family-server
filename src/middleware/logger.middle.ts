import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { Logger } from '../lib/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger;

  constructor() {
    this.logger = new Logger('controller');
  }

  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const {baseUrl, headers} = req;
      const startTime = Date.now();
      res.on('finish', () => {
        const {statusCode} = res;
        const time = `${Date.now() - startTime}ms`;
        this.logger.info(`${baseUrl} ${statusCode} ${headers.host} ${time}`);
      });
      next();
    };
 }
}