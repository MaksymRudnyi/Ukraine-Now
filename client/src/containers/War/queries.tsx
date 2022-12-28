import { gql } from '@apollo/client';

const STATS_FRAGMENT = gql`
    fragment Stats on Stats {
        personnel: personnel_units
        tanks
        armouredVehicles: armoured_fighting_vehicles
        artillery: artillery_systems
        mlrs
        warfareSystems: aa_warfare_systems
        planes
        helicopters
        fuelTanks: vehicles_fuel_tanks
        warships: warships_cutters
        cruiseMissiles: cruise_missiles
        uavSystems: uav_systems
        specialEquip: special_military_equip
        atgmSrbmSystems: atgm_srbm_systems
    }
`

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
