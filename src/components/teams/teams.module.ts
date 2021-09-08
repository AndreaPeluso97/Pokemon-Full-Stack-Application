import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsResolver } from './teams.resolver';
import { TeamSchema } from './teams.schema';
import { TeamsService } from './teams.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Teams', schema: TeamSchema}])],
    providers: [TeamsService, TeamsResolver]
})
export class TeamsModule {}