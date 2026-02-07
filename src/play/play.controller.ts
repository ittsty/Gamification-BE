import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PlayService } from './play.service';
import { PlayDto } from './dto/play.dto';

@Controller()
export class PlayController {
  constructor(private readonly playService: PlayService) {}

  @Post('play')
  @HttpCode(HttpStatus.OK)
  play(@Body() dto: PlayDto) {
    return {data: this.playService.play(dto.uid) };
  }
}
