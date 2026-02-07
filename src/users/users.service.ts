import { Injectable, NotFoundException } from '@nestjs/common';
import { rewardHistory, users } from 'src/mock/db';

@Injectable()
export class UsersService {
  getUserPoint(uid: string) {
    let user = users.find((u) => u.uid === uid);

    if (!user) {
      user = {
        uid,
        totalpoint: 0,
      };
      users.push(user);
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
