import { useLocalStorage } from "hooks/useLocalStorage";

export const ConverterInput = () => {
  const currencyList = useLocalStorage("currencyList");

  console.log(currencyList);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="text-sm text-gray-700">Amount:</span>
        <div className="flex items-center border-b border-green-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="From"
            aria-label="convert from"
          />
        </div>
      </div>
      <div className="flex flex-col items-center border-b border-green-500 py-2">
        <span className="text-sm text-gray-700">Currency:</span>
        <select className=" focus:border-green-500 outline-none mt-1">
          <option value="USD" className="px-3">
            USD
          </option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>{" "}
      </div>
    </div>
  );
};
