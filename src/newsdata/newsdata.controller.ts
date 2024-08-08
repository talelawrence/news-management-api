import { Body, Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { NewsdataService } from './newsdata.service';
import { NewsDataRequest } from './dto/news.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { query } from 'express';

@Controller('newsdata')
export class NewsdataController {
  constructor(private readonly newsdataService: NewsdataService) {}

  @Get('/all')
  getAll() {
    return this.newsdataService.getNewsDataAll();
  }
  

  @Post('/create')
  @UseInterceptors(
    FileInterceptor('newsImage', {
      storage: diskStorage({
        destination: './uploads', // Specify the destination directory
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() newsData: NewsDataRequest,
  ) {
    // Set the newsImage path in the DTO
    newsData.newsImage = `/uploads/${file.filename}`;

    // Call the service to save the news data
    const data = await this.newsdataService.createNewsData(newsData);
    return data;
  }

  @Get('/list')
  async getNewsDataListSearch(@Query() req) {
    return this.newsdataService.getNewsDataListSearch(req);
  }
}
