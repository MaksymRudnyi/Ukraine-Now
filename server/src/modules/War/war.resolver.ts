import { Query, Resolver, Args } from '@nestjs/graphql';
import { WarService } from './war.service';

@Resolver('War')
export class WarResolver {
  constructor(private warService: WarService) {}

  @Query()
  warLatest() {
    return this.warService.getLatest();
  }

  @Query()
  warHistory(@Args() { type }: { type: string }) {
    return this.warService.history(type);
  }
}
