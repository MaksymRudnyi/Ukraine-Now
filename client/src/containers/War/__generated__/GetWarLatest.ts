/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWarLatest
// ====================================================

export interface GetWarLatest_warLatest_stats {
  __typename: 'Stats';
  personnel_units: number | null;
  tanks: number | null;
  armoured_fighting_vehicles: number | null;
  artillery_systems: number | null;
  mlrs: number | null;
  aa_warfare_systems: number | null;
  planes: number | null;
  helicopters: number | null;
  vehicles_fuel_tanks: number | null;
  warships_cutters: number | null;
  cruise_missiles: number | null;
  uav_systems: number | null;
  special_military_equip: number | null;
  atgm_srbm_systems: number | null;
}

export interface GetWarLatest_warLatest_increase {
  __typename: 'Stats';
  personnel_units: number | null;
  tanks: number | null;
  armoured_fighting_vehicles: number | null;
  artillery_systems: number | null;
  mlrs: number | null;
  aa_warfare_systems: number | null;
  planes: number | null;
  helicopters: number | null;
  vehicles_fuel_tanks: number | null;
  warships_cutters: number | null;
  cruise_missiles: number | null;
  uav_systems: number | null;
  special_military_equip: number | null;
  atgm_srbm_systems: number | null;
}

export interface GetWarLatest_warLatest {
  __typename: 'War';
  stats: GetWarLatest_warLatest_stats;
  increase: GetWarLatest_warLatest_increase | null;
}

export interface GetWarLatest {
  warLatest: GetWarLatest_warLatest | null;
}
