import { Controller, Get} from "@nestjs/common";
import { HistoryService } from "./history.service";

@Controller("history")
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get("play")
  getPlayHistory() {
    return {data:this.historyService.getPlayHistory()}
  }

  @Get("reward")
  getRewardHistory() {
    return {data:this.historyService.getRewardHistory()}
  }
}
