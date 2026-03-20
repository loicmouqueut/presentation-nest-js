import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  fromCardEntityToCardDto,
  fromCreateCardDtoToCardEntity,
} from './mapper/cards.mapper';
import { CardDto, CreateCardDto } from './dtos/card.dto';
import { CARD_REPO } from './cards.provider';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
      constructor(@Inject(CARD_REPO) private cardRepo: Repository<Card>) {}

    async findAll(): Promise<CardDto[]> {
        const cards = await this.cardRepo.find();
        return cards.map((card) => fromCardEntityToCardDto(card));
    }

    async findOne(id: number): Promise<CardDto> {
        const card = await this.cardRepo.findOneBy({ id });

        if (!card) {
            throw new NotFoundException(`Card with id ${id} not found`);
        }
        return Promise.resolve(fromCardEntityToCardDto(card));
    }

    async create(card: CreateCardDto): Promise<CardDto> {
        const newCard = fromCreateCardDtoToCardEntity(card);
        const savedCard = await this.cardRepo.save(newCard);
        return Promise.resolve(fromCardEntityToCardDto(savedCard));
    }

}
