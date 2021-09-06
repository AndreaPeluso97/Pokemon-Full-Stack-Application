import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from "@nestjs/graphql";
import { Team } from './entities/team';
import { TeamsService } from "./teams.service";
import { NewTeamInput } from './dto/newTeam.input'

@Resolver()
export class TeamsResolver {
    constructor(private teamsService: TeamsService) {

    }

    @Query(() => [Team])
    public async teams(): Promise<Team[]> {
        return await this.teamsService.getAllTeams().catch((err) => {
            throw err;
        })
    }

    @Mutation(returns => Team)
    public async addNewTeam(@Args('newTeamData') newTeamData: NewTeamInput): Promise<Team> {
        return await this.teamsService.addTeam(newTeamData).catch((err) => {
            throw err;
        });
    }
}