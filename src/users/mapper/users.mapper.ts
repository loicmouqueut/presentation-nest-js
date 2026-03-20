import { fromCardEntityToCardDto } from "src/cards/mapper/cards.mapper";
import { CreateUserDto, UserDto } from "../dtos/user.dto";
import { User } from "../entities/user.entity";

export function fromCreateUserDtoToUserEntity(user: CreateUserDto): User {

    return {
        nom: user.nom,
        age: user.age,
        email: user.email,
        password: user.password,
        role: user.role,
        cards: [],
    }
}

export function fromUserEntityToUserDto(user: User): UserDto {

    return {
        id: user.id ?? "",
        nom: user.nom,
        age: user.age,
        email: user.email,
        role: user.role,
        cards: user.cards.map((card) => fromCardEntityToCardDto(card)),
    }
}

/*export function fromUserDtoToUserEntity(user: UserDto): User {

    return {
        id: user.id ?? "",
        nom: user.nom,
        password: user.password,
        age: user.age,
        email: user.email,
        role: user.role,
    }
}*/