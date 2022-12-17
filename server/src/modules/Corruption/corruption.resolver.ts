import { Query, Resolver } from '@nestjs/graphql';
import { CorruptionService } from './corruption.service';

@Resolver('Corruption')
export class CorruptionResolver {
  constructor(private corruptionService: CorruptionService) {}

  @Query()
  corruption() {
    return this.corruptionService.getCorruptionData();
  }
}
