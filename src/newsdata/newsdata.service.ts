import { Injectable } from '@nestjs/common';
import { NewsData } from './entity/newsdata';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { NewsDataRequest, SearchRequest } from './dto/news.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class NewsdataService {
    constructor(
        @InjectRepository(NewsData)
        private readonly mainGroupNewRepository: Repository<NewsData>,
        private readonly configService: ConfigService
    ) { }


    async getNewsDataAll( ) {
        const domain = this.configService.get<string>('path.url');
        const pageUrl = this.configService.get<string>('path.domain');
        const data = await this.mainGroupNewRepository.query("SELECT ndt.id, ndt.news_title as superheader, ndt.news_image as image, sgn.name as `type`, ndt.news_detail as context FROM news_data ndt left join sub_group_news sgn ON sgn.id = ndt.sub_news_group ");
        
        data.map((item) => { 
            item.pathUrl = domain + pageUrl+ item.id;
        });
        return data;
    }

    async getNewsDataListSearch(req : SearchRequest) {
        const contentSearch = `%${req.contentsearch}%`; // For LIKE query
    const countrySearch = req.countrysearch;
    const flagDaily = 1;
    const flagSpecial = 2;

    console.log([contentSearch, countrySearch, flagDaily, req.startdate, req.enddate, req.fiscalyear])
    const dataDaily = await this.mainGroupNewRepository.query(
      "SELECT ndt.id, ndt.news_title as superheader, ndt.news_image as image, sgn.name as `type`, ndt.news_detail as context FROM news_data ndt left join sub_group_news sgn ON sgn.id = ndt.sub_news_group WHERE news_title LIKE ? AND country = ? AND flag = ? AND DATE(news_date) BETWEEN DATE(?) AND DATE(?) and YEAR(news_date) = ?",
      [contentSearch, countrySearch, flagDaily, req.startdate, req.enddate, req.fiscalyear]
    )

    const dataSpecial = await this.mainGroupNewRepository.query(
      "SELECT ndt.id, ndt.news_title as superheader, ndt.news_image as image, sgn.name as `type`, ndt.news_detail as context FROM news_data ndt left join sub_group_news sgn ON sgn.id = ndt.sub_news_group WHERE news_title LIKE ? AND country = ? AND flag = ? AND DATE(news_date) BETWEEN DATE(?) AND DATE(?) and YEAR(news_date) = ?",
      [contentSearch, countrySearch, flagSpecial, req.startdate, req.enddate, req.fiscalyear]
    );
    const data = {
        dailynews: dataDaily,
        specialnews : dataSpecial
    }
        
        return data;
    }

    async createNewsData( newsData: NewsDataRequest ) {

        const newSave = new NewsData();
        newSave.news_date = new Date(newsData.dateNews);
        newSave.news_title = newsData.newsTitle;
        newSave.news_detail = newsData.newsDetail;
        newSave.key_words = newsData.keywords;
        newSave.flag = newsData.flag;
        newSave.news_order = newsData.newsOrder;
        newSave.report_date = new Date(newsData.reportDate);
        newSave.incident_date = new Date(newsData.incidentDate);
        newSave.main_news_group = newsData.mainNewsGroup;
        newSave.sub_news_group = newsData.subNewsGroup;
        newSave.region = newsData.region;
        newSave.country = newsData.country;
        newSave.province = newsData.province;
        newSave.district = newsData.district;
        newSave.sub_district = newsData.subDistrict;
        newSave.location_name = newsData.locationName;
        newSave.latitude = newsData.latitude;
        newSave.longitude = newsData.longitude;
        newSave.news_image = newsData.newsImage;

        const data = await this.mainGroupNewRepository.save(newSave);
        return data;
    }
}
