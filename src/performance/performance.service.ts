import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { PerformanceDocument, Performance } from './entities/performance.entity';

@Injectable()
export class PerformanceService extends BaseService<Performance>{
  constructor(
    @InjectModel(Performance.name) private performaceModel: Model<PerformanceDocument>,
  ) {  super(performaceModel); }

  findAllByMatch(matchId) {
    return this.performaceModel.find({match: matchId}); //.exec(); 
  }

  verifyIfUserContainsPerformaces(userId){
    return this.performaceModel.find({player: userId}); //.exec(); 
  }
  
}
