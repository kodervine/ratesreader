export interface ICurrencyConversion {
  date: string;
  info: {
    timestamp: number;
    rate: number;
  };
  query: {
    from: string;
    to: string;
    amount: number;
  };
  result: number;
  success: boolean;
}

interface SymbolsNamesResponse {
  [currencyCode: string]: string;
}

interface SymbolsResponse {
  success: boolean;
  symbols: SymbolsNamesResponse;
}

interface ExchangeRateResponse {
  [currencyCode: string]: number;
}
interface ExchangeRatesResponse {
  [date: string]: ExchangeRateResponse;
}

interface TimeseriesResponse {
  success: boolean;
  timeseries: boolean;
  start_date: string;
  end_date: string;
  base: string;
  rates: ExchangeRatesResponse;
}

interface ExchangeRatesByDate {
  [date: string]: number;
}

interface CurrencyName {
  code: string;
  name: string;
}

export type {
  SymbolsResponse,
  TimeseriesResponse,
  CurrencyName,
  ExchangeRatesByDate,
};
