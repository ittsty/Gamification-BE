import { Body, Controller, Post } from '@nestjs/common';
import { RedeemService } from './redeem.service';
import { redeemDTO } from './dto/redeem.dto';

@Controller()
export class RedeemController {
  constructor(private readonly redeemService: RedeemService) {}
  @Post('redeem')
  redeem(@Body() dto: redeemDTO) {
    return { data: this.redeemService.redeemReward(dto.uid, dto.rewardID) };
  }
}
