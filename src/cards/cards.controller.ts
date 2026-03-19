import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { Card } from './entities/card.entity';

@Controller('cards')
export class CardsController {

    constructor(private readonly cardsService: CardsService) { }

    @Get()
    findAll(): Promise<Card[]> {
        return this.cardsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Card> {
        return this.cardsService.findOne(id);
    }

    @Post()
    create(@Body() newCard: Card) {
        return this.cardsService.create(newCard);
    }

}
