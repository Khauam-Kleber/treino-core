import { Controller, Get, SetMetadata} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './entities/team.entity';
import { BaseController } from 'src/base/base.controller';
import { Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';

@Controller('teams')
export class TeamsController extends BaseController<Team> {
  constructor(private readonly teamsService: TeamsService) { super(teamsService); }

  @Get('againsts/teams') 
  findAgainstTeams() {
    return this.teamsService.findAgainstTeams();
  }

}
