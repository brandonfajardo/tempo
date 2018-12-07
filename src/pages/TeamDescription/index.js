import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
import styles from './index.css'

class TeamDescription extends Component {
	componentDidMount() {
		const { teams, location, fetchTeamDetails } = this.props
		const id = this.props.location.pathname.split("/")[2]

		if (!teams[id].members) {
			fetchTeamDetails(id)
		}
	}

	render() {
		const { loading, users, teams, location } = this.props

		const team = teams && teams[location.pathname.split("/")[2]]
		const teamName = get(team, 'name')
		const teamMembers = get(team, 'members')
		const teamLeadId = get(team, 'lead')
		const teamLead = users && get(users[teamLeadId], 'username')

		if (loading) {
			return <CircularProgress />
		}

		return (
			<div>
				<Link className={styles.backButton} to="/">
					<Button color="primary" variant="outlined">
						Back
					</Button>
				</Link>
				<h1>{teamName}</h1>
				<div className={styles.teamLeadContainer}>
					<div className={styles.photo} />
					<Link className={styles.leadUsername} to={`/users/${teamLeadId}`}>{teamLead}</Link>
				</div>
				{teamMembers && teamMembers.map((member) => {
					const username = get(users[member], 'username')
					return (
						<div key={`member--${member}`} className={styles.teamMemberContainer}>
							<div className={styles.photo} />
							<Link className={styles.teamMemberUsername} to={`/users/${member}`}>{username}</Link>
						</div>
					)
				})}
			</div>
		)
	}
}

const mapState = ({ teams, users }) => ({
	loading: teams.loadingTeamDetails,
	teams: teams.teams,
	users: users.users
})

const mapDispatch = {
	fetchTeamDetails: actions.fetchTeamDetails
}

export default connect(mapState, mapDispatch)(TeamDescription)