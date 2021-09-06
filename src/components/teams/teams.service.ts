import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Team } from "./entities/team";
import { NewTeamInput } from './dto/newTeam.input'


@Injectable()
export class TeamsService {
    constructor(@InjectRepository(Team) private teamRepository: Repository<Team>) {

    }

    public async getAllTeams(): Promise<Team[]> {
        return await this.teamRepository.find({}).catch((err) => {
            throw new InternalServerErrorException();
        });
    }

    public async addTeam(newTeamData: NewTeamInput): Promise<Team> {
        const newTeam = this.teamRepository.create(newTeamData);
        await this.teamRepository.save(newTeam).catch((err) => {
            new InternalServerErrorException();
        });

        return newTeam;
    }
}