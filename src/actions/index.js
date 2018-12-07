import {
	FETCH_ALL_TEAMS_AND_USERS,
	FETCH_ALL_TEAMS_AND_USERS_SUCCESS,
	FETCH_TEAM_DETAILS,
	FETCH_TEAM_DETAILS_SUCCESS,
	FETCH_USER_DETAILS,
	FETCH_USER_DETAILS_SUCCESS
} from './types'

export const fetchAllTeamsAndUsers = () => {
	return dispatch => {

		dispatch({ type: FETCH_ALL_TEAMS_AND_USERS })

		Promise.all(
			[
				fetch('http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/'),
				fetch('http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/')
			]
		).then(res => Promise.all([res[0].json(), res[1].json()]))
			.then(data => {
				dispatch({
					type: FETCH_ALL_TEAMS_AND_USERS_SUCCESS, payload: {
						teams: data[0],
						users: data[1]
					}
				})
			})
	}
}

export const fetchTeamDetails = id => {
	return dispatch => {
		dispatch({ type: FETCH_TEAM_DETAILS })

		fetch(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${id}/`)
			.then(res => res.json())
			.then(details => {
				dispatch({
					type: FETCH_TEAM_DETAILS_SUCCESS, payload: {
						id,
						details
					}
				})
			})
	}
}

export const getUserDetails = id => {
	return dispatch => {
		dispatch({ type: FETCH_USER_DETAILS })

		fetch(`http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/${id}`)
			.then(res => res.json())
			.then(details => {
				dispatch({
					type: FETCH_USER_DETAILS_SUCCESS, payload: {
						id,
						details
					}
				})
			})
	}
}
