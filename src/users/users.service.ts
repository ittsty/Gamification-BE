import { Injectable, NotFoundException } from '@nestjs/common';
import { rewardHistory, users } from 'src/mock/db';

@Injectable()
export class UsersService {
  getUserPoint(uid: string) {
    const user = users.find((u) => u.uid === uid);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const history = rewardHistory
      .filter((h) => h.uid === uid)
      .map((h) => ({
        id: h.rewardid,
        created_at: h.created_at,
      }));
    return {
      uid: user.uid,
      totalpoint: user.totalpoint,
      history,
    };
  }
}
