import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

// Taken from https://stefangabos.github.io/world_countries/
import * as uk from './locals/uk.json';
import * as en from './locals/en.json';

@Controller('countries')
export class CountiesController {
  @Get()
  exchange(@Res() res: Response, @Query() query: { locale: string }) {
    res.status(HttpStatus.OK).json(query.locale === 'en' ? en : uk);
  }
}
