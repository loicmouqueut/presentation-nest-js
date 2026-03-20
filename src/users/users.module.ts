import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { userProvider } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { cardsProvider } from 'src/cards/cards.provider';

@Module({
  providers: [UsersService, userProvider, UsersRepository, cardsProvider],
  controllers: [UsersController],
  imports: [DatabaseModule],
})
export class UsersModule {}
