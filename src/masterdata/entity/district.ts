import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'district' })
export class District {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}