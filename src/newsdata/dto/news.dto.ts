export class newsDataResponse {
    superheader: string;
    image: string;
    type: string;
    date: string;
    header: string;
    context: string;
}

export class NewsDataRequest {
    dateNews: string;
    newsImage: any;
    department: number;
    mainNewsGroup: number;
    subNewsGroup: number;
    newsTitle: string;
    flag: number;
    newsDetail: string;
    keywords: string;
    newsOrder: number;
    reportDate: string;
    incidentDate: string;
    region: number;
    country: number;
    province: number;
    district: number;
    subDistrict: number;
    locationName: string;
    latitude: string;
    longitude: string;
}