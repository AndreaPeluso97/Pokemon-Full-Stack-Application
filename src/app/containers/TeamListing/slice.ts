import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { GetTeams_teams } from "../../services/teamService/__generated__/GetTeams";
import { ITeamListingState } from "./type";

const initialState: ITeamListingState = {
    teams: []
}

export const teamListingSlice = createSlice({
    name: 'teamListing',
    initialState,
    reducers: {
        setTeams: (state, action: PayloadAction<GetTeams_teams[]>) => {
            state.teams = action.payload;
        }
    }
});

export const { setTeams } = teamListingSlice.actions;
export default teamListingSlice.reducer;