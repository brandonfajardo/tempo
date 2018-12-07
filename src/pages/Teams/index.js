import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import styles from './index.css'
import { Link } from 'react-router-dom'

class Teams extends Component {
	componentWillMount() {
		const { teams, users } = this.props

		if (teams.length === 0) {
			this.props.fetchAllTeamsAndUsers()
		}
	}

	render() {
		const { loading, teams } = this.props

		if (loading) return <CircularProgress />

		return teams && teams.map(team => {
			return (
				<Link
					key={`team--${team.id}`}
					className={styles.link}
					to={`/team/${team.id}`}>
					<Card className={styles.card}>
						<div className={styles.cardInnerContainer}>
							<div className={styles.photo} />
							<h2 className={styles.teamText}>{team.name}</h2>
						</div>
					</Card>
				</Link>
			)
		})
	}
}

const mapState = ({ teams: { landingPage, loadingLandingPage } }) => ({
	teams: landingPage,
	loading: loadingLandingPage
})

const mapDispatch = {
	fetchAllTeamsAndUsers: actions.fetchAllTeamsAndUsers
}

export default connect(mapState, mapDispatch)(Teams)