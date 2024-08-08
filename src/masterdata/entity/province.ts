import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'province' })
export class Province {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}