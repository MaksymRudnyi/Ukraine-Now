import { gql } from '@apollo/client';

const STATS_FRAGMENT = gql`
  fragment Stats on Stats {
    personnel_units
    tanks
    armoured_fighting_vehicles
    artillery_systems
    mlrs
    aa_warfare_systems
    planes
    helicopters
    vehicles_fuel_tanks
    warships_cutters
    cruise_missiles
    uav_systems
    special_military_equip
    atgm_srbm_systems
  }
`;

export const GET_WAR_LATEST = gql`
  query GetWarLatest {
    warLatest {
      stats {
        ...Stats
      }
      increase {
        ...Stats
      }
    }
  }
  ${STATS_FRAGMENT}
`;

export const GET_WAR_HISTORY = gql`
  query GetWarHistory($type: TypeOfStats!) {
    warHistory(type: $type) {
      day
      date
      increase
    }
  }
`;
