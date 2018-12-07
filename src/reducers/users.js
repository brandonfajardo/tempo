import {
    FETCH_ALL_TEAMS_AND_USERS_SUCCESS,
    FETCH_USER_DETAILS,
    FETCH_USER_DETAILS_SUCCESS
} from '../actions/types'

const initialState = {
    users: {},
    userDetailsLoading: false
}

const users = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_TEAMS_AND_USERS_SUCCESS:
            const { users } = payload

            const allUsers = users.reduce((acc, user) => {
                acc[user.id] = { ...user }
                return acc;
            }, {});

            return {
                users: allUsers
            }
        case FETCH_USER_DETAILS:
            return {
                ...state,
                userDetailsLoading: true
            }
        case FETCH_USER_DETAILS_SUCCESS:
            const { id, details } = payload

            return {
                users: {
                    ...state.users,
                    [id]: {
                        ...state.users[id],
                        ...details
                    }
                },
                userDetailsLoading: false
            }
        default:
            return state
    }
}

export default users