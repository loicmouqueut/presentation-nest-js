import { DATA_SOURCE } from "src/database/database.provider";
import { Card } from "./entities/card.entity";
import { DataSource } from "typeorm";
import { Provider } from "@nestjs/common";

export const CARD_REPO = Symbol('CARD_REPO');

export const cardsProvider: Provider = {
    provide: CARD_REPO,
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Card),
    inject: [DATA_SOURCE],
}