import React, { Component } from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import styles from './index.css'

class Users extends Component {
    render() {
        const { users } = this.props
        const userList = Object.keys(users).map(i => users[i])
        return (
            <div>
                <h1>Users</h1>
                {userList && userList.map(user => {
                    return (
                        <div key={`user--${user.id}`} className={styles.user}>
                            <div className={styles.photo} />
                            <Link className={styles.link} to={`/users/${user.id}`}>{user.username}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapState = ({ users }) => ({
    users: users.users
})

export default connect(mapState)(Users)