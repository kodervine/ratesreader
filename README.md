# In progress...

Demo - https://ratesreader.brimble.app

## ratesreader

This tool provides real-time exchange rates, historical price data, and news updates for multiple currencies, displayed through intuitive visualizations

## About The Project

The currency data visualization dashboard is a tool that helps users stay updated on the latest currency exchange rates and market news. The dashboard displays real-time exchange rates for different currencies, along with historical price data and news updates. Users can also convert one currency to another using the latest exchange rate. The data is visualized in an intuitive and user-friendly way, using charts and graphs to show trends and patterns in the data.

### Built With

- React + Vite
- Tailwind css
- Typescript
- React Hooks
- [Tremor.so](https://www.tremor.so/) for data visualization
- [Exchange Rates Data API](https://apilayer.com/marketplace/exchangerates_data-api)

### Learned to use

- Github Actions for CI/CD

## Current Features

- Currency conversion: Able to convert one currency to another, using the latest exchange rate from exchange rates api.

- News updates related to the foreign exchange market with news api.

- Data visualization: The data is displayed an intuitive and user-friendly way, such as using charts to show trends and patterns in the data.

## Goals

- Real-time currency exchange rates: The dashboard will display the current exchange rates for different currencies in real-time.

- Historical price data: The dashboard will also show historical price data for different currencies, such as the price changes over time.

- Area Chart or bar chart (fluctuation of exchange rates)
  Input fields for start date, end date, base currency, and symbols (if applicable)

- Real-Time Exchange Rate Data Endpoint Section:

  - Live Updating Line Chart (real-time exchange rates)
  - Input fields for base currency and symbols (if applicable)

- Historical Rates Endpoint Section:
  - Line Chart (historical exchange rates)
  - Input fields for date, base currency, and symbols (if applicable)

<!-- Small screen still has some empty spaces especially on the dashboard, news api pages. maybe remove overflow. But overflow will affect the tabs that are on the news api then
Use area chart for the currency conversion rate
And use line chart for the fluctuations rate
Use bar chart for date. Like you want to get the specific date and currency exchange rate
-->
