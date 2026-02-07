import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ResetService } from './reset.service';

@Controller()
export class ResetController {
  constructor(private readonly resetService: ResetService) {}

  @Post('reset')
  @HttpCode(HttpStatus.OK)
  reset() {
    return this.resetService.resetAll();
  }
}
