export type IFlagProgressFlags = '' | 'checkAuth';
export type IFlagSucceededFlags = '';
export type IFlagFailedFlags = '';
export type IFlagActionedFlags = '';

export interface IFlagsState {
  readonly isInProgress?: IFlagProgressFlags[];
  readonly succeeded?: IFlagSucceededFlags[];
  readonly failed?: IFlagFailedFlags[];
  readonly actioned?: IFlagActionedFlags[];

  readonly isInProgressPayload?: IFlagProgressFlags;
  readonly succeededPayload?: IFlagSucceededFlags;
  readonly failedPayload?: IFlagFailedFlags;
  readonly actionedPayload?: IFlagActionedFlags;

  readonly booleanPayload?: boolean;
}
