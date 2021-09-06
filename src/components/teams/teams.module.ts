import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team';
import { TeamsResolver } from './teams.resolver';
import { TeamsService } from './teams.service';

@Module({
    imports: [TypeOrmModule.forFeature([Team])],
    providers: [TeamsService, TeamsResolver],
    exports: [TeamsService]
})
export class TeamsModule {}