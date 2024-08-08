import { join } from "path";
import { MainGroupNews } from "src/masterdata/entity/maingroupnews";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'news_data' })
export class NewsData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    news_date: Date;

    @Column()
    news_title: string;

    @Column()
    news_detail: string;

    @Column()
    key_words: string;

    @Column()
    flag: number;

    @Column()
    news_order: number;

    @Column()
    report_date: Date;

    @Column()
    incident_date: Date;

    @Column()
    main_news_group: number;

    @Column()
    sub_news_group : number;

    @Column()
    region  : number;

    @Column()
    country : number;

    @Column()
    province : number;

    @Column()
    district : number;
    
    @Column()
    sub_district : number;
    
    @Column()
    location_name : string;
    
    @Column()
    latitude : string;
    
    @Column()
    longitude : string;
    
    @Column()
    news_image : string;

}