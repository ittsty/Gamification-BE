import { Injectable } from '@nestjs/common';
import { playHistory, rewardHistory } from 'src/mock/db';

@Injectable()
export class HistoryService {
  getPlayHistory() {
    return playHistory
  }

  getRewardHistory() {
    return rewardHistory
  }
}
