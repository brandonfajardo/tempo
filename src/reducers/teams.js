import {
    FETCH_ALL_TEAMS_AND_USERS,
    FETCH_ALL_TEAMS_AND_USERS_SUCCESS,
    FETCH_TEAM_DETAILS,
    FETCH_TEAM_DETAILS_SUCCESS
} from '../actions/types'

const initialState = {
    loadingLandingPage: false,
    landingPage: [],
    loadingTeamDetails: false,
    teams: {}
}

const teams = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_TEAMS_AND_USERS:
            return {
                ...state,
                loadingLandingPage: true
            }
        case FETCH_ALL_TEAMS_AND_USERS_SUCCESS:
            const { teams } = payload

            const allTeams = teams.reduce((acc, team) => {
                acc[team.id] = { ...team };
                return acc;
            }, {})

            return {
                ...state,
                loadingLandingPage: false,
                landingPage: teams,
                teams: allTeams
            }
        case FETCH_TEAM_DETAILS:
            return {
                ...state,
                loadingTeamDetails: true
            }
        case FETCH_TEAM_DETAILS_SUCCESS:
            return {
                ...state,
                loadingTeamDetails: false,
                teams: {
                    ...state.teams,
                    [payload.id]: {
                        ...payload.details
                    }
                }
            }
        default:
            return state
    }
}

export default teams