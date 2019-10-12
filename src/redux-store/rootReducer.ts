import { combineReducers, Reducer, AnyAction } from 'redux';
import { IApplicationState } from './applicationState';

import route from './route/reducer';

/* new-imported-reducer-goes-here */

const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers<IApplicationState>({
  route,
  /* new-tranformed-reducer-export-goes-here */
});

export default rootReducer;
