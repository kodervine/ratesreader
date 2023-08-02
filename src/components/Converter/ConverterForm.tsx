import { SearchSelect, SearchSelectItem } from "@tremor/react";
import {
  useCurrencyConverterApiContext,
  useSelectedCurrencyContext,
} from "contexts";
import React, { useState, useEffect } from "react";

interface DropdownOption {
  code: string;
  name: string;
}

/**

This component provides a  form for converting currencies.
The form consists of three inputs: an amount input, and two dropdowns for selecting the "from" and "to" currencies.
The component fetches and parses data from local storage to populate the dropdown options.
@example
// Usage inside a React component
@returns A  form for currency conversion.
*/

export const ConverterForm: React.FC = () => {
  const {
    currencyNumberInput,
    handleCurrencyNumberInputValue,
    selectedFromCurrencyValue,
    selectedToCurrencyValue,
    handleselectedFromCurrencyValue,
    handleselectedToCurrencyValue,
  } = useSelectedCurrencyContext();
  const { fetchConvertedCurrencyAmount } = useCurrencyConverterApiContext();

  // State to hold the options for dropdowns
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([]);
  // Check if currencyNumberInput is NaN and set it to 0 if true

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFromCurrencyValue && selectedToCurrencyValue) {
      fetchConvertedCurrencyAmount();
    }
  };

  // let ref: any;
  // ref = useRef<HTMLFormElement>();
  // function handleKeyUp(event: any) {
  //   event.preventDefault()
  //   if (event.keyCode === 13) {
  //     ref.current.submit();
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("keyup", handleKeyUp);
  //   return () => {
  //     window.removeEventListener("keyup", handleKeyUp);
  //   };
  // }, []);

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
  //
  // fetch data from local storage on component mount
  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <section className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Amount
          </label>

          <input
            type="number"
            name="amount"
            value={currencyNumberInput}
            onChange={
              (e) => handleCurrencyNumberInputValue(e.target.value)
              // handleCurrencyNumberInputValue(parseInt(e.target.value, 10))
            }
            placeholder="Enter any amount"
            className="text-gray-900 border border-gray-300  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            From
          </label>
          {/* className="bg-gray-800 border border-gray-300 text-gray-50  ext-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" */}
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
            // onBlur={handleSubmit}
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
