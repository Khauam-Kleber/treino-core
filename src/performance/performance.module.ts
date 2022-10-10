import { Module } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Performance, PerformanceSchema } from './entities/performance.entity';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Performance.name, schema: PerformanceSchema }]),
    forwardRef(() => AuthModule
  )],
  controllers: [PerformanceController],
  providers: [PerformanceService],
  exports: [PerformanceService]
})
export class PerformanceModule {}
