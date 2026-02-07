import { IsString } from "class-validator";

export class PlayDto {
  @IsString()
  uid: string;
}
