import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export class AuthRequest extends Request {
  user: User;
}
