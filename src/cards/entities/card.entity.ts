import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Rarity {
  COMMON = 'common',
  RARE = 'rare',
  MYTHIC = 'mythic',
  LEGENDARY = 'legendary',
}

@Entity()
export class Card {

  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ length: 10 })
  name: string;
  
  @Column({ length: 500 })
  description: string;

  @Column()
  cost: number;

  @Column({
    type: 'enum',
    enum: Rarity,
  })
  rarity: Rarity;
}