import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { Match, MatchDocument } from './entities/match.entity';

@Injectable()
export class MatchesService  extends BaseService<Match>{
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>,
  ) { 
    super(matchModel);
  }

  async findAll() {
    return this.matchModel.find().populate('teamAgainst'); //.exec(); 
  }
}
