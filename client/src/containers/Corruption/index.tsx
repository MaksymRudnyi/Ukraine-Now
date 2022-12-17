import { GET_CORRUPTION } from "./queries";
import { QueryData } from '../../components';
import { CorruptionView} from "./CorruptionView";

export const Corruption = () => {
  return (
    <QueryData query={GET_CORRUPTION}>
      {({ corruption }) => <CorruptionView corruption={corruption}/> }
    </QueryData>
  )
}