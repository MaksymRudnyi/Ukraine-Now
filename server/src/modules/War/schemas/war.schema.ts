import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WarDocument = HydratedDocument<War>;

@Schema()
export class War {
  @Prop()
  date: string;

  @Prop()
  day: number;

  @Prop()
  resource: string;

  @Prop(
    raw({
      personnel_units: { type: Number },
      tanks: { type: Number },
      armoured_fighting_vehicles: { type: Number },
      artillery_systems: { type: Number },
      mlrs: { type: Number },
      aa_warfare_systems: { type: Number },
      planes: { type: Number },
      helicopters: { type: Number },
      vehicles_fuel_tanks: { type: Number },
      warships_cutters: { type: Number },
      cruise_missiles: { type: Number },
      uav_systems: { type: Number },
      special_military_equip: { type: Number },
      atgm_srbm_systems: { type: Number },
    }),
  )
  stats: Record<number, any>;

  // @Prop(raw({
  //   personnel_units: {type: Number },
  //   tanks: {type: Number },
  //   armoured_fighting_vehicles: {type: Number },
  //   artillery_systems: {type: Number },
  //   mlrs: {type: Number },
  //   aa_warfare_systems: {type: Number },
  //   planes: {type: Number },
  //   helicopters: {type: Number },
  //   vehicles_fuel_tanks: {type: Number },
  //   warships_cutters: {type: Number },
  //   cruise_missiles: {type: Number },
  //   uav_systems: {type: Number },
  //   special_military_equip: {type: Number },
  //   atgm_srbm_systems: {type: Number },
  // }))
  // increase: Record<number, any>
}

export const WarSchema = SchemaFactory.createForClass(War);
