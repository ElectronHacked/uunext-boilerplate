import { IRouteState } from './route/state';

/* new-imported-state-goes-here */

export interface IApplicationState {
  readonly route: IRouteState;
  /* new-imported-state-key-goes-here */
}
