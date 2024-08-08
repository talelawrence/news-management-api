import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'main_group_news' })
export class MainGroupNews {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}