import {combineReducers} from 'redux';

import {todosReducer as todos} from '../pods/TodoApp/reducers';
import {resumeReducer as resume} from '../pods/Resume/reducers';

const rootReducer = combineReducers({
  todos,
  resume
});

export default rootReducer;
