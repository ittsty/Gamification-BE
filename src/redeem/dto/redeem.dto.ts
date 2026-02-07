import { IsString } from 'class-validator';

export class redeemDTO {
  @IsString()
  uid: string;
  rewardID: string;
}
