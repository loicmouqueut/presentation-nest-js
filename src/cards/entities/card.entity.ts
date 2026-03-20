export enum Rarity {
  COMMON = 'common',
  RARE = 'rare',
  MYTHIC = 'mythic',
  LEGENDARY = 'legendary',
}

export class Card {
  id?: string;
  name: string;
  description: string;
  cost: number;
  rarity: Rarity;
}