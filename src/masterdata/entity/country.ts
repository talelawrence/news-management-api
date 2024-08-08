import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'country' })
export class Country {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}