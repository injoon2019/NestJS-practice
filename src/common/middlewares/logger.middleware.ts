import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
