import {combineReducers} from 'redux';
import {reducer as watch} from './watch/watch';
import {NameSpace} from './name-space';

export default combineReducers({
  [NameSpace.WATCH]: watch,
});
