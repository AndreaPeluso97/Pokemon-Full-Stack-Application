import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './interfaces/team.interface';
import { TeamInput } from './inputs/team.input';

@Injectable()
export class TeamsService {
  constructor(@InjectModel('Teams') private teamModel: Model<Team>) {}

  async create(createTeamDto: TeamInput): Promise<Team> {
    const createdTeam = new this.teamModel(createTeamDto);
    return createdTeam.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }
}
