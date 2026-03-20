import { IsEmail, IsEnum, IsNotEmpty, Length, Min } from "class-validator";
import { UserRole } from "../entities/user.entity";
import { CardDto } from "src/cards/dtos/card.dto";

export class CreateUserDto {

    @IsNotEmpty()
    nom: string;

    @IsNotEmpty()
    @Min(18)
    age: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(4, 20)
    password: string;

    @IsNotEmpty()
    @IsEnum(UserRole)
    role: UserRole;
}

export class UserDto {

    id: string;
    nom: string;
    age: number;
    email: string;
    role: UserRole;
    cards: CardDto[];
}

export class UserWithPasswordDto {

    id: string;
    nom: string;
    password: string;
    age: number;
    email: string;
    role: UserRole;
}