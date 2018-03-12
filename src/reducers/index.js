import { combineReducers } from 'redux';
import ContactsReducer from './reducerSongs'
import ActiveContactReducer from './reducerActiveSong'
import DownVoteReducer from './reducerDownVote'
import UpVoteReducer from './reducerUpVote'

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer,
	downVote: DownVoteReducer, 
	upVote: UpVoteReducer
});

export default rootReducer;
