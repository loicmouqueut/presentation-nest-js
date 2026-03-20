import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardDto, CreateCardDto } from './dtos/card.dto';

@Controller('cards')
export class CardsController {

    constructor(private readonly cardsService: CardsService) { }

    @Get()
    findAll(): Promise<CardDto[]> {
        return this.cardsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<CardDto> {
        return this.cardsService.findOne(id);
    }

    @Post()
    //@UsePipes(ValidationPipe)
    create(@Body() newCard: CreateCardDto): Promise<CardDto> {
        return this.cardsService.create(newCard);
    }

}
