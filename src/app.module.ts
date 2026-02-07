import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryModule } from './history/history.module';
import { PlayModule } from './play/play.module';
import { RedeemModule } from './redeem/redeem.module';
import { ResetModule } from './reset/reset.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HistoryModule,PlayModule,RedeemModule,ResetModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
