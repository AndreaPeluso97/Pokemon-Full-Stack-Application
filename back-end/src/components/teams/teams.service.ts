import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './interfaces/team.interface';
import { TeamInput } from './inputs/team.input';
import { Pokemon } from './entities/pokemon';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Teams') private teamModel: Model<Team>) {}

  async create(createTeamDto: TeamInput): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async addPokemon(id: string, pokemon: Pokemon): Promise<Team> {
    return this.teamModel.findOneAndUpdate({'_id': id}, 
    {'$addToSet': { pokemon: pokemon} },
    );
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }

  async filterTeamsByType(type: string): Promise<Team[]> {
    return this.teamModel.find({"pokemon.types.name": type}).exec();
  }

}
 