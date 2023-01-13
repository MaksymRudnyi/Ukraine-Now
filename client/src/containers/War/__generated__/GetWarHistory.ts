/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TypeOfStats } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetWarHistory
// ====================================================

export interface GetWarHistory_warHistory {
  __typename: 'WarHistory';
  day: number | null;
  date: string;
  increase: number | null;
}

export interface GetWarHistory {
  warHistory: (GetWarHistory_warHistory | null)[] | null;
}

export interface GetWarHistoryVariables {
  type: TypeOfStats;
}
