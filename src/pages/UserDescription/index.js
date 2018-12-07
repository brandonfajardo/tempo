import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import { get } from 'lodash'
import styles from './index.css'

class UserDescription extends Component {
	componentWillMount() {
		const { location, users, getUserDetails } = this.props
		const userId = location.pathname.split("/")[2]

		if (!users[userId].member_teams) {
			getUserDetails(userId)
		}
	}

	render() {
		const { loading, users, teams } = this.props
		const userId = location.pathname.split("/")[2]
		const user = users[userId]

		if (loading) {
			return <CircularProgress />
		}
		return (
			<div>
				<h1>Profile</h1>
				<div className={styles.userContainer}>
					<div className={styles.photo} />
					<div className={styles.nameContainer}>
						<h2 className={styles.userName}>{user.username}</h2>
						<small>{user.name}</small>
					</div>
				</div>
				{user.lead_teams && user.lead_teams.map(team => {
					return <Chip key={`team-${team.id}`} className={styles.chip} color="primary" label={get(teams[team], 'name')} />
				})}

				{user.member_teams && user.member_teams.map(team => {
					return <Chip key={`team--${team.id}`} className={styles.chip} color="primary" label={get(teams[team], 'name')} />
				})}
			</div>
		)
	}
}

const mapState = ({ users, teams }) => ({
	loading: users.userDetailsLoading,
	users: users.users,
	teams: teams.teams
})

const mapDispatch = {
	getUserDetails: actions.getUserDetails
}

export default connect(mapState, mapDispatch)(UserDescription);