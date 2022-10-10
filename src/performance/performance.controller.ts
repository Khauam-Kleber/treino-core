import { Controller} from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { BaseController } from 'src/base/base.controller';
import { Performance } from './entities/performance.entity';

@Controller('performance')
export class PerformanceController  extends BaseController<Performance>{
  constructor(private readonly performanceService: PerformanceService) {  super(performanceService); }

  // @Post()
  // create(@Body() createPerformanceDto: CreatePerformanceDto) {
  //   return this.performanceService.create(createPerformanceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.performanceService.findAll();
  // }

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
