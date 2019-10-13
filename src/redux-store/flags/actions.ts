import { createAction } from 'redux-actions';
import { SET_IS_IN_PROGRESS_FLAG, SET_SUCCEEDED_FLAG, SET_FAILED_FLAG, SET_ACTIONED_FLAG } from './constants';
import { IFlagsState, IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags } from './state';

export const setIsInProgressFlag = createAction<IFlagsState, { [key in IFlagProgressFlags]?: boolean }>(
  SET_IS_IN_PROGRESS_FLAG,
  key => ({
    isInProgress: key,
  })
);

export const setSucceededFlag = createAction<IFlagsState, { [key in IFlagSucceededFlags]?: boolean }>(
  SET_SUCCEEDED_FLAG,
  key => ({
    succeeded: key,
  })
);

export const setFailedFlag = createAction<IFlagsState, { [key in IFlagFailedFlags]?: boolean }>(
  SET_FAILED_FLAG,
  key => ({
    failed: key,
  })
);

export const setActionedFlag = createAction<IFlagsState, { [key in IFlagActionedFlags]?: boolean }>(
  SET_ACTIONED_FLAG,
  key => ({
    actioned: key,
  })
);
