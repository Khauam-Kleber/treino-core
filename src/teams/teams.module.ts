import { forwardRef, Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Team, TeamSchema } from './entities/team.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[ 
   MongooseModule.forFeature([{name: Team.name, schema: TeamSchema }]),
   forwardRef(() => AuthModule),
   UsersModule
  ],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
