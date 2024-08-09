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

    async getNewsDataListSearch(req: SearchRequest) {
        let baseQuery = `
            SELECT 
                ndt.id, 
                ndt.news_title as superheader, 
                ndt.news_image as image, 
                sgn.name as \`type\`, 
                ndt.news_detail as context 
            FROM 
                news_data ndt 
                LEFT JOIN sub_group_news sgn ON sgn.id = ndt.sub_news_group 
            WHERE 
                1=1`;
        
        let params: any[] = [];
    
        if (req.contentsearch) {
            baseQuery += " AND news_title LIKE ?";
            params.push(`%${req.contentsearch}%`);
        }
    
        if (req.countrysearch) {
            baseQuery += " AND country = ?";
            params.push(req.countrysearch);
        }
    
        if (req.startdate && req.enddate) {
            baseQuery += " AND DATE(news_date) BETWEEN DATE(?) AND DATE(?)";
            params.push(req.startdate, req.enddate);
        }
    
        if (req.fiscalyear) {
            baseQuery += " AND YEAR(news_date) = ?";
            params.push(req.fiscalyear);
        }
    
        const dailyQuery = baseQuery + " AND flag = ?";
        const specialQuery = baseQuery + " AND flag = ?";
        
        const dataDaily = await this.mainGroupNewRepository.query(dailyQuery, [...params, 1]);
        const dataSpecial = await this.mainGroupNewRepository.query(specialQuery, [...params, 2]);
    
        return {
            dailynews: dataDaily,
            specialnews: dataSpecial
        };
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

    async updateNewsData( newsData: NewsDataRequest, id: number ) {
        const data = await this.mainGroupNewRepository.findOneBy({ id : id});
        if (!data) {
            throw new Error('Data not found');
        }

        data.news_date = new Date(newsData.dateNews);
        data.news_title = newsData.newsTitle;
        data.news_detail = newsData.newsDetail;
        data.key_words = newsData.keywords;
        data.flag = newsData.flag;
        data.news_order = newsData.newsOrder;
        data.report_date = new Date(newsData.reportDate);
        data.incident_date = new Date(newsData.incidentDate);
        data.main_news_group = newsData.mainNewsGroup;
        data.sub_news_group = newsData.subNewsGroup;
        data.region = newsData.region;
        data.country = newsData.country;
        data.province = newsData.province;
        data.district = newsData.district;
        data.sub_district = newsData.subDistrict;
        data.location_name = newsData.locationName;
        data.latitude = newsData.latitude;
        data.longitude = newsData.longitude;
        data.news_image = newsData.newsImage;

        const result = await this.mainGroupNewRepository.save(data);
        return result;
    }
}
