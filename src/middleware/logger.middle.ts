import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from '../lib/logger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger: Logger;

  constructor() {
    this.logger = new Logger('controller');
  }

  use(req: Request, res: Response, next: Function) {

    const {url, headers} = req;
    const serverTime = Date.now();
    this.logger.info(`${serverTime} ${url}`);

    next();
  }

}