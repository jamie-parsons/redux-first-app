import { combineReducers } from 'redux';
import todos from './todos';
import nextId from './nextId';

const rootReducers = combineReducers({
    todos,
    nextId
});

export default rootReducers;