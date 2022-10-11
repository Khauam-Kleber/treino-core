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

  async findDashboardInfos(){
    let infoList = []
    infoList.push({"value" : await this.countAllWinMatches(), name: "Partidas Ganhas"})
    infoList.push({"value" : await this.countAllLoseMatches(), name: "Partidas Perdidas" })
    return infoList;
  }

  async countAllWinMatches() {
    return this.matchModel.count({ $expr: { $gt: [ "$scoreboardTeamHome" , "$scoreboardTeamAgainst" ] }});
  }

  async countAllLoseMatches() {
    return this.matchModel.count({ $expr: { $lt: [ "$scoreboardTeamHome" , "$scoreboardTeamAgainst" ] }});
  }
}
