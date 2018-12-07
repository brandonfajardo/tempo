import { combineReducers } from 'redux';
import teamsReducer from './teams'
import usersReducer from './users'

const rootReducer = combineReducers({
	teams: teamsReducer,
	users: usersReducer
});

export default rootReducer;
