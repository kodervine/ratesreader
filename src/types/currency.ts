export type CurrencyFluctuationData = {
  [currencyCode: string]: {
    change: number;
    change_pct: number;
    end_rate: number;
    start_rate: number;
  };
};

export type FluctuationApiResponse = {
  base: string;
  end_date: string;
  fluctuation: boolean;
  rates: CurrencyFluctuationData;
  start_date: string;
  success: boolean;
};

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

export {};
