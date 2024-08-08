import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sub_group_news' })
export class SubGroupNews {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    main_id: number;

    @Column()
    name: string;

}