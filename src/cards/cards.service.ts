import { Injectable, NotFoundException } from '@nestjs/common';
import { Card, Rarity } from './entities/card.entity';
import {
  fromCardEntityToCardDto,
  fromCreateCardDtoToCardEntity,
} from './mapper/cards.mapper';
import { CardDto, CreateCardDto } from './dtos/card.dto';

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

    findAll(): Promise<CardDto[]> {
        return Promise.resolve(this.cards.map(card => fromCardEntityToCardDto(card)));
    }

    findOne(id: string): Promise<CardDto> {
        const card = this.cards.find(c => c.id === id);

        if (!card) {
            throw new NotFoundException(`Card with id ${id} not found`);
        }
        return Promise.resolve(fromCardEntityToCardDto(card));
    }

    create(card: CreateCardDto): Promise<CardDto> {
        const newCard = fromCreateCardDtoToCardEntity(card);
        this.cards.push(newCard);
        return Promise.resolve(fromCardEntityToCardDto(newCard));
    }

}
