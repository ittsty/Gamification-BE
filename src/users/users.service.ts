import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from 'src/mock/db';

@Injectable()
export class UsersService {
  getUserPoint(uid: string) {
    const user = users.find((u) => u.uid === uid);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      uid: user.uid,
      totalpoint: user.totalpoint
    };
  }
}
