import { Injectable, NotFoundException } from '@nestjs/common';
import { Card, Rarity } from './entities/card.entity';

@Injectable()
export class CardsService {

    private cards: Card[] = [
        {
            id: '1',
            name: 'Chevalier de l\'Aube',
            description: 'Un chevalier courageux et loyal.',
            cost: 5,
            rarity: Rarity.COMMON
        },
        {
            id: '2',
            name: 'Dragon de Feu',
            description: 'Un dragon puissant et redoutable.',
            cost: 8,
            rarity: Rarity.MYTHIC
        },
        {
            id: '3',
            name: 'Sorcier des Ténèbres',
            description: 'Un sorcier mystérieux et puissant, maîtrisant les forces obscures.',
            cost: 7,
            rarity: Rarity.LEGENDARY
        }
    ];

    findAll(): Promise<Card[]> {
        return Promise.resolve(this.cards);
    }

    findOne(id: string): Promise<Card> {
        const card = this.cards.find(c => c.id === id);

        if (!card) {
            throw new NotFoundException(`Card with id ${id} not found`);
        }
        return Promise.resolve(card);
    }

    create(card: Card): Promise<Card> {
        this.cards.push(card);
        return Promise.resolve(card);
    }

}
