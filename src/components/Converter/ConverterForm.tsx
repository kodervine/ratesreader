// BeautifulForm.tsx

import { useSelectedCurrencyContext } from "contexts";
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
    selectedCurrencyDropdown1,
    selectedCurrencyDropdown2,
    handleSelectedCurrencyDropdown1Value,
    handleSelectedCurrencyDropdown2Value,
  } = useSelectedCurrencyContext();

  // State to hold the options for dropdowns
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([]);
  // Check if currencyNumberInput is NaN and set it to 0 if true

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectedCurrencyDropdown1, selectedCurrencyDropdown2);
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
            onChange={(e) =>
              handleCurrencyNumberInputValue(parseInt(e.target.value, 10))
            }
            placeholder="Enter any amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 outline-none"
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
          <select
            value={selectedCurrencyDropdown1}
            name="from"
            onChange={(e) =>
              handleSelectedCurrencyDropdown1Value(e.target.value)
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 "
            placeholder="Doe"
          >
            <option value="">Choose an option</option>
            {dropdownOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code + " - " + option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="to"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            to
          </label>
          <select
            value={selectedCurrencyDropdown2}
            onChange={(e) =>
              handleSelectedCurrencyDropdown2Value(e.target.value)
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 "
          >
            <option value="">Choose another option</option>
            {dropdownOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code + " - " + option.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </form>
  );
};
