import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'region' })
export class Region {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}