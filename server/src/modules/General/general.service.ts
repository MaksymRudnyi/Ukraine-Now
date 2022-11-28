import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneralService {
  getOccupied() {
    return ({
      value: 15,
      remoteIframeURL: 'https://deepstatemap.live/'
    })
  }
}
