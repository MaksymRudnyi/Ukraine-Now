import {GetCorruption_corruption} from "./__generated__/GetCorruption";

export type SeriesType = {
  name: string;
  data: {
    x: number,
    y: number
  }[]
}

export type CurruptionGraphProps = {
  corruption: GetCorruption_corruption[];
  title?: string;
  yAxis?: string;
  series?: SeriesType[]
};