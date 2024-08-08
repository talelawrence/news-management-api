import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sub_district' })
export class SubDistrict {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}