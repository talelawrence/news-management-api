import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'department' })
export class Departement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}