import { Injectable, NotFoundException } from '@nestjs/common';
import { users, playHistory } from '../mock/db';
import { randomUUID } from 'crypto';

@Injectable()
export class PlayService {
  play(uid: string) {
    const user = users.find((u) => u.uid === uid);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const MAX_POINT = 10000;
    const pointRandom = [300, 500, 1000, 3000];
    const randomIndex = Math.floor(Math.random() * pointRandom.length);
    const point = pointRandom[randomIndex];

    if (user.totalpoint + point > MAX_POINT) {
      user.totalpoint = MAX_POINT;
    } else {
      user.totalpoint += point;
    }

    playHistory.push({
      id: randomUUID(),
      uid,
      point,
      created_at: new Date(),
    });

    return {
      point,
      totalpoint: user.totalpoint,
    };
  }
}
