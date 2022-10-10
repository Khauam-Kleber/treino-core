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

  // async create(createPerformanceDto: CreatePerformanceDto) {
  //   let newPerformance = new this.performaceModel(createPerformanceDto);
  //   newPerformance = await newPerformance.save();
  //   return newPerformance;
  // }

  findAllByMatch(matchId) {
    return this.performaceModel.find({match: matchId}); //.exec(); 
  }

  // findOne(id: string) {
  //   return this.performaceModel.findById(id);
  // }

  // update(id: string, updatePerformanceDto: UpdatePerformanceDto) {
  //   return this.performaceModel.findByIdAndUpdate(id, updatePerformanceDto, { new: true });
  // }

  // remove(id: string) {
  //   return this.performaceModel.deleteOne({ _id: id }).exec();
  // }
}
