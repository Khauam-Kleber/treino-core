import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { Match, MatchDocument } from './entities/match.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MatchesService extends BaseService<Match>{
  constructor(
    @InjectModel(Match.name) private matchModel: Model<MatchDocument>, private usersService: UsersService,
  ) {
    super(matchModel);
  }

  async findAll() {
    throw new BadGatewayException("Não dispnivel");
    return [];
  }

  async findMatchesPagination(params) {
    let pageNumber = params.page;
    let limit = params.size;
    // const query = { $text: { $search: params.term } };
    // if(params.term === ''){
    //   return this.userModel.find().sort({'price.7_days.sold':-1}).collation({locale:"en_US", numericOrdering:true}).skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * limit ) : 0 ).limit(limit);
    // }else{
    //   return this.userModel.find(query).sort({'price.7_days.sold':-1}).collation({locale:"en_US", numericOrdering:true}).skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * limit ) : 0 ).limit(limit);
    // }

    let user = await this.usersService.getRequestUser();
    if (user.team) {
      const data = await this.matchModel.find({ teamHome: user.team._id.toString() }).populate('teamAgainst').skip(pageNumber > 0 ? ((pageNumber - 1) * limit) : 0).limit(limit);
      const count = await this.matchModel.count({ teamHome: user.team._id.toString() });
      return { data, count };
    } else {
      return [];
    }
    // return this.matchModel.find().populate('teamAgainst'); //.exec(); 

  }

  async findDashboardInfos() {
    let user = await this.usersService.getRequestUser();
    let infoList = []
    if (user.team) {
      infoList.push({ "value": await this.countAllWinMatches(user.team._id.toString()), name: "Partidas Ganhas" })
      infoList.push({ "value": await this.countAllLoseMatches(user.team._id.toString()), name: "Partidas Perdidas" })
    }
    return infoList;
  }

  async countAllWinMatches(userId) {
    return this.matchModel.count({ teamHome: userId, $expr: { $gt: ["$scoreboardTeamHome", "$scoreboardTeamAgainst"] } });
  }

  async countAllLoseMatches(userId) {
    return this.matchModel.count({ teamHome: userId, $expr: { $lt: ["$scoreboardTeamHome", "$scoreboardTeamAgainst"] } });
  }
}
