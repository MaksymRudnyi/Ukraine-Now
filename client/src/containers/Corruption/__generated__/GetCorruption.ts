/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCorruption
// ====================================================

export interface GetCorruption_corruption {
  __typename: "Corruption";
  iso3: string;
  rank: number | null;
  score: number | null;
  region: string | null;
  year: number;
  country: string | null;
}

export interface GetCorruption {
  corruption: (GetCorruption_corruption | null)[] | null;
}
