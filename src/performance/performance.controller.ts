import { Controller } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { BaseController } from 'src/base/base.controller';
import { Performance } from './entities/performance.entity';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('performance')
export class PerformanceController extends BaseController<Performance>{
  constructor(private readonly performanceService: PerformanceService) { super(performanceService); }

  // @Post()
  // create(@Body() createPerformanceDto: CreatePerformanceDto) {
  //   return this.performanceService.create(createPerformanceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.performanceService.findAll();
  // }

  @Get('find-performaces-match/:id')
  findAllByMatchId(@Param('id') id: string) {
    return this.performanceService.findAllByMatch(id).populate("player", "match");
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.performanceService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updatePerformanceDto: UpdatePerformanceDto) {
  //   return this.performanceService.update(id, updatePerformanceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.performanceService.remove(id);
  // }
}
