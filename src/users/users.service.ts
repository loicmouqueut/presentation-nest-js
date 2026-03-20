import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { fromCreateUserDtoToUserEntity, fromUserEntityToUserDto } from './mapper/users.mapper';
import { CreateUserDto, UserDto } from './dtos/user.dto';
import { Card } from 'src/cards/entities/card.entity';
import { CARD_REPO } from 'src/cards/cards.provider';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@Inject(CARD_REPO)
    private cardRepository: Repository<Card>,
        private readonly userRepository: UsersRepository) { }

    async findAll() {
        return (await this.userRepository.findAll()).map(user => fromUserEntityToUserDto(user));
    }

    async findOne(id: string): Promise<UserDto | null> {
        const user = await this.userRepository.findOne(id)
        return user != undefined
            ? fromUserEntityToUserDto(user)
            : null;
    }


    async create(user: CreateUserDto): Promise<UserDto> {

        const createdUser = await this.userRepository.create(
            fromCreateUserDtoToUserEntity(user)
        )
        return fromUserEntityToUserDto(createdUser);
    }

    async addCardToUser(userId: string, cardId: number): Promise<void> {
        const user = await this.userRepository.findOne(userId);
        if (!user) {
            throw new NotFoundException(`User with id ${userId} not found`);
        }

        const card = await this.cardRepository.findOneBy({ id: cardId });
        if (!card) {
            throw new NotFoundException(`Card with id ${cardId} not found`);
        }

        user.cards.push(card);
        await this.userRepository.save(user);
    }

}
