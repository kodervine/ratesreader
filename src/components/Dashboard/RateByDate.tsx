import { SearchSelect, SearchSelectItem, DatePicker } from "@tremor/react";
import {
  useSelectedCurrencyContext,
  useExchangeRatesByDateContext,
} from "contexts";
import React, { useState, useEffect } from "react";

interface DropdownOption {
  code: string;
  name: string;
}

export const RateByDate: React.FC = () => {
  const {
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
    handleselectedFromCurrencyValue,
    handleselectedToCurrencyValue,
    selectedDateValue,
    handleSelectedDateValue,
  } = useSelectedCurrencyContext();

  const { getExchangeRatesByDate } = useExchangeRatesByDateContext();

  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getExchangeRatesByDate();
  };

  // Function to fetch and parse data from local storage for dropdowns
  const fetchDataFromLocalStorage = () => {
    const dataFromLocalStorage = localStorage.getItem("currencyList");
    if (dataFromLocalStorage) {
      try {
        const parsedData = JSON.parse(dataFromLocalStorage) as DropdownOption[];
        setDropdownOptions(parsedData);
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  };

  // fetch data from local storage on component mount
  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <section className="grid gap-6 mb-3 px-4">
        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <DatePicker
            className="w-full"
            onValueChange={handleSelectedDateValue}
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Base Currency
          </label>
          <SearchSelect
            value={selectedFromCurrencyValue}
            onValueChange={handleselectedFromCurrencyValue}
            id="from"
            placeholder="Choose a currency"
          >
            {dropdownOptions.map((option) => (
              <SearchSelectItem key={option.code} value={option.code}>
                {option.code + " - " + option.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
        <div>
          <label
            htmlFor="to"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            to
          </label>
          <SearchSelect
            value={selectedToCurrencyValue}
            onValueChange={handleselectedToCurrencyValue}
            id="to"
            onBlur={handleSubmit}
            placeholder="Choose another currency"
          >
            {dropdownOptions.map((option) => (
              <SearchSelectItem key={option.code} value={option.code}>
                {option.code + " - " + option.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
      </section>
    </form>
  );
};
