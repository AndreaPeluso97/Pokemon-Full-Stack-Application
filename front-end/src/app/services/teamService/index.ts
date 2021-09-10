import { apolloClient } from "../../graphql";
import { FILTER_TEAMS, GET_ALL_TEAMS } from "./queries";
import { GetTeams_teams } from "./__generated__/GetTeams";

class TeamService {

    public async getTeams(): Promise<GetTeams_teams[]> {
        apolloClient.cache.reset();
        const response = await apolloClient.query({query: GET_ALL_TEAMS}).catch((err) => {
            throw err;
        });

        console.log(response.data.teams)

        if (response && response.data && response.data.teams) { 
            let arrayForSort = [...response.data.teams]
            arrayForSort.reverse();
            let teams = arrayForSort
            return teams as GetTeams_teams[];
            }

        return [];
    }

    public async filterTeams(type: any): Promise<GetTeams_teams[]> {
        const response = await apolloClient.query({query: FILTER_TEAMS, variables: { type }}).catch((err) => {
            throw err;
        });

        if (response && response.data && response.data.filterTeamsByType) { 
            let arrayForSort = [...response.data.filterTeamsByType]
            arrayForSort.reverse();
            let teams = arrayForSort
            return teams as GetTeams_teams[];
            } else {
                return [];
            }

    }

}

export default new TeamService();