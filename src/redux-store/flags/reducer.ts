import { IFlagsState } from './state';
import { SET_IS_IN_PROGRESS_FLAG, SET_SUCCEEDED_FLAG, SET_FAILED_FLAG, SET_ACTIONED } from './constants';

const initialState: IFlagsState = {
  isInProgress: [],
  succeeded: [],
  failed: [],
  actioned: [],
};

const flagToggle = (array: any[], value: any, flag?: boolean) => {
  return flag ? Array.from(new Set([...array, value])) : array.filter(val => val !== value);
};

const flagsReducer = (state: IFlagsState = initialState, { type, payload }: ReduxActions.Action<IFlagsState>) => {
  switch (type) {
    case SET_IS_IN_PROGRESS_FLAG: {
      const { isInProgress } = state;
      const { isInProgressPayload, booleanPayload } = payload;

      return {
        ...state,
        isInProgress: isInProgress && flagToggle(isInProgress, isInProgressPayload, booleanPayload),
      };
    }
    case SET_SUCCEEDED_FLAG: {
      const { succeeded } = state;
      const { isInProgressPayload, booleanPayload } = payload;

      return {
        ...state,
        succeeded: succeeded && flagToggle(succeeded, isInProgressPayload, booleanPayload),
      };
    }
    case SET_FAILED_FLAG: {
      const { failed } = state;
      const { failedPayload, booleanPayload } = payload;

      return {
        ...state,
        failed: failed && flagToggle(failed, failedPayload, booleanPayload),
      };
    }
    case SET_ACTIONED: {
      const { actioned } = state;
      const { actionedPayload, booleanPayload } = payload;

      return {
        ...state,
        isInProgress: actioned && flagToggle(actioned, actionedPayload, booleanPayload),
      };
    }

    default:
      break;
  }
};

export default flagsReducer;
