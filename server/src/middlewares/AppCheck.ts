import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import firebaseAdmin from 'firebase-admin';

@Injectable()
export class AppCheckMiddleware implements NestMiddleware {
  async use(req, res: Response, next) {
    const token = req.headers['x-firebase-appcheck'];

    if (process.env.NODE_ENV !== 'production') {
      next();
      return;
    }

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const appCheckClaims = await firebaseAdmin.appCheck().verifyToken(token);

      if (appCheckClaims) {
        next();
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
