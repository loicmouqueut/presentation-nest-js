import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cardsProvider } from './cards.provider';

@Module({
  providers: [CardsService, cardsProvider],
  controllers: [CardsController],
  imports: [DatabaseModule],
})
export class CardsModule {}
