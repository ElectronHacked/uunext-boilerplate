import { combineReducers, Reducer, AnyAction } from 'redux';
import { IApplicationState } from './applicationState';

import route from './route/reducer';
import flags from './flags/reducer';

/* new-imported-reducer-goes-here */

const rootReducer: Reducer<IApplicationState, AnyAction> = combineReducers<IApplicationState>({
  route,
  flags,
  /* new-tranformed-reducer-export-goes-here */
});

export default rootReducer;
