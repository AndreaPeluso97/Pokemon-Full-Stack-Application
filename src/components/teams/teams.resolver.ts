import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from "@nestjs/graphql";
import { TeamsService } from "./teams.service";
import { TeamInput } from './inputs/team.input'
import { TeamType }  from './dto/create-team';
import { Pokemon } from './entities/pokemon';


@Resolver()
export class TeamsResolver {
    constructor(private teamsService: TeamsService) {

    }

    @Query(() => [TeamType])
    async teams() {
      return this.teamsService.findAll();
    }

    @Query(() => [TeamType])
    async filterTeamsByType(@Args('type') type: string) {
      return this.teamsService.filterTeamsByType(type);
    }
  
    @Mutation(() => TeamType)
    async createTeams(@Args('input') input: TeamInput) {
      return this.teamsService.create(input);
    }

    @Mutation(() => TeamType)
    async addPokemon(@Args('id') id: string, @Args('pokemon') pokemon: Pokemon) {
      return this.teamsService.addPokemon(id, pokemon);
    }

}