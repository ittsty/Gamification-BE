import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { rewardHistory, rewards, users } from 'src/mock/db';

@Injectable()
export class RedeemService {
  redeemReward(uid: string, rewardID: string) {
    const user = users.find((u) => u.uid === uid);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const reward = rewards.find((r) => r.id === rewardID);
    if (!reward) {
      throw new NotFoundException('Reward not found');
    }
    const alreadyRedeemed = rewardHistory.some(
      (h) => h.uid === uid && h.rewardid === rewardID,
    );

    if (alreadyRedeemed) {
      throw new ConflictException('Reward already redeemed');
    }

    if (user.totalpoint < reward.point) {
      throw new BadRequestException('Not enough point');
    }

    const record = {
      id: randomUUID(),
      uid,
      rewardid: rewardID,
      created_at: new Date(),
    };

    rewardHistory.push(record);

    return {
      id: record.id,
      rewardID,
      created_at: record.created_at,
    };
  }
  viewReward(){
    return rewards
  }
}
