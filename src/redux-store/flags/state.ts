export type IFlagProgressFlags = '' | 'checkAuth';
export type IFlagSucceededFlags = '';
export type IFlagFailedFlags = '';
export type IFlagActionedFlags = '';

export interface IFlagsState {
  readonly isInProgress?: { [key in IFlagProgressFlags]?: boolean };
  readonly succeeded?: { [key in IFlagSucceededFlags]?: boolean };
  readonly failed?: { [key in IFlagFailedFlags]?: boolean };
  readonly actioned?: { [key in IFlagActionedFlags]?: boolean };
}
