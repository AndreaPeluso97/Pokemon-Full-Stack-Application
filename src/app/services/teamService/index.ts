import { apolloClient } from "../../graphql";
import { GET_ALL_TEAMS } from "./queries";
import { GetTeams_teams } from "./__generated__/GetTeams";

class TeamService {

    public async getTeams(): Promise<GetTeams_teams[]> {
        const response = await apolloClient.query({query: GET_ALL_TEAMS}).catch((err) => {
            throw err;
        });

        if (response && response.data && response.data.teams) 
            return response.data.teams as GetTeams_teams[];

        return [];
    }
}

export default new TeamService();