import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match, MatchDocument } from './entities/match.entity';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) { }

  async create(createMatchDto: CreateMatchDto) {
    let newMatch = new this.matchModel(createMatchDto);
    newMatch = await newMatch.save();
    return newMatch;
  }

  findAll() {
    return this.matchModel.find(); //.exec(); 
  }

  findOne(id: string) {
    return this.matchModel.findById(id);
  }

  update(id: string, updateMatchDto: UpdateMatchDto) {
    return this.matchModel.findByIdAndUpdate(id, updateMatchDto, { new: true });
  }

  remove(id: string) {
    return this.matchModel.deleteOne({ _id: id }).exec();
  }
}
