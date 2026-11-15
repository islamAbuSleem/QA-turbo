import { UserView } from '../common/domain/user.entity';

export interface AuthSession {
  token: string;
  user: UserView;
}
