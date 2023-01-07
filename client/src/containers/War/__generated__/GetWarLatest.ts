/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWarLatest
// ====================================================

export interface GetWarLatest_warLatest_stats {
  __typename: 'Stats';
  troops: number | null;
  tanks: number | null;
  armouredVehicles: number | null;
  artillery: number | null;
  mlrs: number | null;
  warfareSystems: number | null;
  planes: number | null;
  helicopters: number | null;
  fuelTanks: number | null;
  warships: number | null;
  cruiseMissiles: number | null;
  uavSystems: number | null;
  specialEquip: number | null;
  atgmSrbmSystems: number | null;
}

export interface GetWarLatest_warLatest_increase {
  __typename: 'Stats';
  troops: number | null;
  tanks: number | null;
  armouredVehicles: number | null;
  artillery: number | null;
  mlrs: number | null;
  warfareSystems: number | null;
  planes: number | null;
  helicopters: number | null;
  fuelTanks: number | null;
  warships: number | null;
  cruiseMissiles: number | null;
  uavSystems: number | null;
  specialEquip: number | null;
  atgmSrbmSystems: number | null;
}

export interface GetWarLatest_warLatest {
  __typename: 'War';
  stats: GetWarLatest_warLatest_stats;
  increase: GetWarLatest_warLatest_increase | null;
}

export interface GetWarLatest {
  warLatest: GetWarLatest_warLatest | null;
}
