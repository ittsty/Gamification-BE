import { Controller, Get} from "@nestjs/common";
import { HistoryService } from "./history.service";

@Controller("history")
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get("play")
  getPlayHistory() {
    return this.historyService.getPlayHistory();
  }

  @Get("reward")
  getRewardHistory() {
    return this.historyService.getRewardHistory();
  }
}
