// BeautifulForm.tsx

import React, { useState, useEffect } from "react";

interface DropdownOption {
  code: string;
  name: string;
}

export const ConverterForm: React.FC = () => {
  // State to hold the values of the inputs
  const [numberInput, setNumberInput] = useState<string>("");
  const [dropdown1, setDropdown1] = useState<string>("");
  const [dropdown2, setDropdown2] = useState<string>("");

  // State to hold the options for dropdowns
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>([]);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  console.log(dropdownOptions);

  return (
    <form
      onSubmit={handleSubmit}
      // className="flex justify-around items-center mt-8"
    >
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type number
          </label>
          <input
            type="number"
            name="number"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
            placeholder="Enter a number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <select
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
          >
            <option value="">Select an option</option>
            {dropdownOptions.map((option) => (
              <option key={option.code} value={option.code + option.name}>
                {option.code + " - " + option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <select
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select another option</option>
            {dropdownOptions.map((option) => (
              <option key={option.code} value={option.code + option.name}>
                {option.code + " - " + option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};
