import { Injectable } from '@nestjs/common';
import { NewsData } from './entity/newsdata';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsDataRequest } from './dto/news.dto';

@Injectable()
export class NewsdataService {
    constructor(
        @InjectRepository(NewsData)
        private readonly mainGroupNewRepository: Repository<NewsData>,
    ) { }


    async getNewsDataAll( ) {
        const data = await this.mainGroupNewRepository.query("SELECT mgn.name as dogeName FROM news_data ndt inner join main_group_news mgn on mgn.id = ndt.main_news_group ");
        console.log(data[0].dogeName);
        return data;
    }

    async createNewsData( newsData: NewsDataRequest ) {
        
        const data = await this.mainGroupNewRepository.save(newsData);
        return data;
    }
}
