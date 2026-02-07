import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { PlayModule } from './play/play.module';

@Module({
  imports: [HistoryModule,PlayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
