import { Card } from "src/cards/entities/card.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    ADMIN = "admin",
    READER = "reader",
}

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 500 })
    nom: string;

    @Column('int')
    age: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.READER })
    role: UserRole;

    @ManyToMany(() => Card, (card) => card.users)
    @JoinTable()
    cards: Card[];
}