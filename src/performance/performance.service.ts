import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePerformanceDto } from './dto/create-performance.dto';
import { UpdatePerformanceDto } from './dto/update-performance.dto';
import { PerformanceDocument, Performance } from './entities/performance.entity';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectModel(Performance.name) private performaceModel: Model<PerformanceDocument>,
  ) { }

  async create(createPerformanceDto: CreatePerformanceDto) {
    let newPerformance = new this.performaceModel(createPerformanceDto);
    newPerformance = await newPerformance.save();
    return newPerformance;
  }

  findAll() {
    return this.performaceModel.find(); //.exec(); 
  }

  findOne(id: string) {
    return this.performaceModel.findById(id);
  }

  update(id: string, updatePerformanceDto: UpdatePerformanceDto) {
    return this.performaceModel.findByIdAndUpdate(id, updatePerformanceDto, { new: true });
  }

  remove(id: string) {
    return this.performaceModel.deleteOne({ _id: id }).exec();
  }
}
