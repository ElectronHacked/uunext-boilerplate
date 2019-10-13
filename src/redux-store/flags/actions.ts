import { createAction } from 'redux-actions';
import { SET_IS_IN_PROGRESS_FLAG, SET_SUCCEEDED_FLAG, SET_FAILED_FLAG, SET_ACTIONED } from './constants';
import { IFlagsState, IFlagProgressFlags, IFlagSucceededFlags, IFlagFailedFlags, IFlagActionedFlags } from './state';

export const setIsInProgressFlag = createAction<IFlagsState, IFlagProgressFlags, boolean>(
  SET_IS_IN_PROGRESS_FLAG,
  (isInProgressPayload, booleanPayload) => ({
    isInProgressPayload,
    booleanPayload,
  })
);

export const setSucceededFlag = createAction<IFlagsState, IFlagSucceededFlags, boolean>(
  SET_SUCCEEDED_FLAG,
  (succeededPayload, booleanPayload) => ({
    succeededPayload,
    booleanPayload,
  })
);

export const setFailedFlag = createAction<IFlagsState, IFlagFailedFlags, boolean>(
  SET_FAILED_FLAG,
  (failedPayload, booleanPayload) => ({
    failedPayload,
    booleanPayload,
  })
);

export const setActionedFlag = createAction<IFlagsState, IFlagActionedFlags, boolean>(
  SET_ACTIONED,
  (actionedPayload, booleanPayload) => ({
    actionedPayload,
    booleanPayload,
  })
);
