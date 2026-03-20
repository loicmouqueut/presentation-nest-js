import { Rarity } from "../entities/card.entity";
import { IsEnum, IsPositive, Length, IsNotEmpty } from "class-validator";

export class CardDto {

  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @Length(3, 10)
  name: string;

  @IsNotEmpty()
  @Length(5, 500)
  description: string;

  @IsPositive()
  cost: number;

  @IsEnum(Rarity)
  rarity: Rarity;
}

export class CreateCardDto {

  @IsNotEmpty()
  @Length(3, 10)
  name: string;

  @IsNotEmpty()
  @Length(5, 500)
  description: string;

  @IsPositive()
  cost: number;

  @IsEnum(Rarity)
  rarity: Rarity;
}