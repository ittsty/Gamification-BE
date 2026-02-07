import { Injectable } from '@nestjs/common';
import { playHistory } from 'src/mock/db';

@Injectable()
export class HistoryService {
  getPlayHistory() {
    return playHistory
  }

  getRewardHistory() {
    return [
      {
        id: 'rh_001',
        rewardid: 'reward_001',
        rewarddesc: 'A',
        created_at: '2024-01-01T11:00:00Z',
      },
      {
        id: 'rh_002',
        rewardid: 'reward_002',
        rewarddesc: 'B',
        created_at: '2024-01-03T16:20:00Z',
      },
      {
        id: 'rh_003',
        rewardid: 'reward_003',
        rewarddesc: 'C',
        created_at: '2024-01-05T19:45:00Z',
      },
      {
        id: 'rh_004',
        rewardid: 'reward_001',
        rewarddesc: 'A',
        created_at: '2024-01-07T09:10:00Z',
      },
    ];
  }
}
