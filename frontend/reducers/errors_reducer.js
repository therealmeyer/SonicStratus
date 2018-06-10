import {
  combineReducers
} from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import uploadErrorsReducer from './upload_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  upload: uploadErrorsReducer
});

export default errorsReducer;

