import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from "@nestjs/graphql";
import { TeamsService } from "./teams.service";
import { TeamInput } from './inputs/team.input'
import { TeamType }  from './dto/create-team';


@Resolver()
export class TeamsResolver {
    constructor(private teamsService: TeamsService) {

    }

    @Query(() => [TeamType])
    async teams() {
      return this.teamsService.findAll();
    }
  
    @Mutation(() => TeamType)
    async createTeams(@Args('input') input: TeamInput) {
      return this.teamsService.create(input);
    }

}