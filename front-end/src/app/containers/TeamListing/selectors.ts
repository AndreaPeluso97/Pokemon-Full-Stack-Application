import { createSelector } from "reselect";
import { IRootAppState } from "../../../typings";

const selectTeamListing = (state: IRootAppState) => state.teamListing;

export const makeSelectTeams = createSelector(
    selectTeamListing, 
    (teamListing) => teamListing.teams
    );