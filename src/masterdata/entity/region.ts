import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'region' })
export class region {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}