import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import currentTrackReducer from './current_tracks_reducer';
import loadingReducer from './loading_reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';
const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  currentTrack: currentTrackReducer,
  uiLoading: loadingReducer,
  loadingBar: loadingBarReducer
});

export default rootReducer;