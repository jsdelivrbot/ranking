import { combineReducers } from 'redux';
import ContactsReducer from './reducerSongs'
import ActiveContactReducer from './reducerActiveSong'

const rootReducer = combineReducers({
	contacts: ContactsReducer,
	activeContact: ActiveContactReducer
});

export default rootReducer;
