export interface ICurrency {
  exchangedate: string;
  cc: string;
  txt: string | null;
  r030: number | null;
  rate: number;
  enname?: string | null;
}
