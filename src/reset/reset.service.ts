import { Injectable } from '@nestjs/common';
import { users, playHistory, rewardHistory } from 'src/mock/db';

@Injectable()
export class ResetService {
  resetAll() {

    playHistory.length = 0;
    rewardHistory.length = 0;

    return {
      message: 'Reset success',
      userCount: users.length,
    };
  }
}
