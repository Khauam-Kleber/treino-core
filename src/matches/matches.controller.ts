import { Controller } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from './entities/match.entity';
import { BaseController } from 'src/base/base.controller';
import { Get, Query } from '@nestjs/common/decorators';
@Controller('matches')
export class MatchesController extends BaseController<Match>{
  constructor(
    private readonly matchesService: MatchesService,
  
    ) {
      super(matchesService);
    }

    @Get("find-dashboard-info")
    findDashboardInfos() {
      return this.matchesService.findDashboardInfos();
    }

    @Get("find-pagination-info")
    findMatchesPagination(@Query() params) {
      return this.matchesService.findMatchesPagination(params);
    }
  
}
