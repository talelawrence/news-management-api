import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { region } from './entity/region';
import { Repository } from 'typeorm';

@Injectable()
export class MasterdataService {

    constructor(
        @InjectRepository(region)
        private readonly regionRepository: Repository<region>,
    ) { }
    
    async testapi( ) {
        const checkUsername = await this.regionRepository.find();
        console.log(checkUsername);
    }
}
