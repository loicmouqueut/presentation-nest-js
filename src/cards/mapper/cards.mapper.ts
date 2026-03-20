import { Card } from "../entities/card.entity";
import { CardDto, CreateCardDto } from "../dtos/card.dto";




export function fromCreateCardDtoToCardEntity(card: CreateCardDto): Card {

    return {
        name: card.name,
        description: card.description,
        cost: card.cost,
        rarity: card.rarity,
    }
}

export function fromCardEntityToCardDto(card: Card): CardDto {

    return {
        id: card.id ?? 0,
        name: card.name,
        description: card.description,
        cost: card.cost,
        rarity: card.rarity,
    }
}
