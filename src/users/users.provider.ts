import { DATA_SOURCE } from "src/database/database.provider";
import { User } from "./entities/user.entity";
import { DataSource } from "typeorm";
import { Provider } from "@nestjs/common";

export const USER_REPO = Symbol('USER_REPO');

export const userProvider: Provider = {
    provide: USER_REPO,
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(User),
    inject: [DATA_SOURCE],
}