import { Controller, Get} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Team } from './entities/team.entity';
import { BaseController } from 'src/base/base.controller';

@Controller('teams')
export class TeamsController extends BaseController<Team> {
  constructor(private readonly teamsService: TeamsService) { super(teamsService); }

  @Get('againsts/teams') 
  findAgainstTeams() {
    return this.teamsService.findAgainstTeams();
  }

}
