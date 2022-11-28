import { Module } from '@nestjs/common';

import {GeneralModule} from "./modules/General/general.module";

@Module({
  imports: [
    GeneralModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
