import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team, TeamDocument } from './entities/team.entity';


@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
    private userService: UsersService
  ) { }


  async create(createTeamDto: CreateTeamDto) {
    let currentUser : User = await this.userService.getRequestUser(); //find current user request
    let newTeam = new this.teamModel(createTeamDto);
    newTeam.users.push(currentUser);
    newTeam = await newTeam.save();
    this.userService.updateUserTeam(currentUser, newTeam) //set a team for user

    return newTeam;
  }

  findAll() {
    return this.teamModel.find(); //.exec(); 
  }

  findOne(id: string) { //mudado o id para string pois no mongoDb nao é number
    return this.teamModel.findById(id).populate('users')
  }

  update(id: string, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true });
  }

  remove(id: string) {
    return this.teamModel.deleteOne({ _id: id }).exec();
  }
}
