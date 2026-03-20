import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { DATA_SOURCE } from "../database/database.provider";

@Injectable()
export class UsersRepository {
    private userRepo: Repository<User>

    constructor(
        @Inject(DATA_SOURCE)
        private datasource: DataSource,
    ) {
        this.userRepo = this.datasource.getRepository(User);
    }

    async findAll(): Promise<User[]> {
        return this.userRepo.find({
            relations: {
                cards: true,
            },
        });
    }

    async findOne(id: string): Promise<User | null> {
        return this.userRepo.findOne({
            where: { id },
            relations: {
                cards: true,
            },
        });
    }

    async create(user: User): Promise<User> {
        return this.userRepo.save(user);
    }

    async save(user: User): Promise<User> {
        return this.userRepo.save(user);
    }

}