import { IRouteState } from './route/state';
import { IFlagsState } from './flags/state';

/* new-imported-state-goes-here */

export interface IApplicationState {
  readonly route: IRouteState;
  readonly flags: IFlagsState;
  /* new-imported-state-key-goes-here */
}
