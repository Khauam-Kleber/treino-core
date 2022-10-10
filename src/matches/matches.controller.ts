import { Controller } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Match } from './entities/match.entity';
import { BaseController } from 'src/base/base.controller';

@Controller('matches')
export class MatchesController extends BaseController<Match>{
  constructor(
    private readonly matchesService: MatchesService
    ) {
      super(matchesService);
    }
}
