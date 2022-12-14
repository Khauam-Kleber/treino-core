import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/base/base.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Team, TeamDocument } from './entities/team.entity';


@Injectable()
export class TeamsService extends BaseService<Team> {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    private userService: UsersService
  ) { 
    super(teamModel);
  }

  async create(createTeamDto: Team) {
  
    let newTeam = await new this.teamModel(createTeamDto).save({validateBeforeSave: true})
    if(createTeamDto.teamOwner == null || createTeamDto.teamOwner == undefined){
      let currentUser : User = await this.userService.getRequestUser(); //find current user request
      newTeam.users.push(currentUser);
      newTeam = await newTeam.save(); //TODO verificar meio de otimizar para nao chamar o save 2x
      this.userService.updateUserTeam(currentUser, newTeam) //set a team for user
    }

    return newTeam;
  }

  async findAll() {
    return this.teamModel.find(); //.exec(); 
  }

  async findOne(id: string) { //mudado o id para string pois no mongoDb nao é number
    return this.teamModel.findById(id).populate('users');
  }

  async findAgainstTeams(){
    let currentUser : User = await this.userService.getRequestUser(); //find current user request
    let idTeam = currentUser.team._id.toString()
    return this.teamModel.find({ teamOwner: idTeam }).populate('teamOwner');
  }
}
