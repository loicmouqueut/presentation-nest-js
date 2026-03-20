import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: any) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user);
    }

    @Post(':id/cards/:cardId')
    addCardToUser(@Param('id') userId: string, @Param('cardId') cardId: number) {
        return this.usersService.addCardToUser(userId, cardId);
    }

}
