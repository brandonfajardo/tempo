import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                return isEmpty(rest.users) // If users have not been populated redirect to landing
                    ? <Redirect to="/" />
                    : (
                        <Component {...props} />
                    )
            }}
        />
    )
}

const mapState = ({ users: { users } }) => ({
    users
})

export default connect(mapState)(PrivateRoute);