import { Body, Controller, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
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
    if (file) {
      newsData.newsImage = `/uploads/${file.filename}`;
    }

    // Call the service to save the news data
    try {
      const data = await this.newsdataService.createNewsData(newsData);
      return { success: true, message: 'News data created successfully', data : data };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Get('/list')
  async getNewsDataListSearch(@Query() req) {
    try {
      const data = await this.newsdataService.getNewsDataListSearch(req);
      return { success: true, message: 'News data found', data: data };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Put('/:id')
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
  async update(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() newsData: NewsDataRequest,
  ) {
    // Set the newsImage path in the DTO if a new file is uploaded
    if (file) {
      newsData.newsImage = `/uploads/${file.filename}`;
    }
  
    // Call the service to update the news data
    try {
      const data = await this.newsdataService.updateNewsData(newsData, id);
      return { success: true, message: 'News data updated successfully', data : data };
    } catch (err) {
      return { success: false, message: err.message };
    }

  }

  @Get('edit/:id')
  async getNewsDataById(@Param('id') id: number) {
    try {
      const data = await this.newsdataService.getNewsDataById(id);
      return { success: true, message: 'News data found', data: data };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Get('detail/:id')
  async getNewsDataDetail(@Param('id') id: number) {
    try {
      const data = await this.newsdataService.getNewsDataDetail(id);
      return { success: true, message: 'News data found', data: data };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }
  
  
}
