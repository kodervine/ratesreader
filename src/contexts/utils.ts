export const { VITE_API_LAYER_EXCHANGE_RATES_API_KEY } = import.meta.env;

export const EXCHANGE_API_URL = "https://api.apilayer.com/exchangerates_data/";
export const apiLayerFetchHeaders = new Headers();
apiLayerFetchHeaders.append("apikey", VITE_API_LAYER_EXCHANGE_RATES_API_KEY);
export const requestOptions = {
  headers: apiLayerFetchHeaders,
};
