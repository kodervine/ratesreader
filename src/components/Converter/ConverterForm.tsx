import { MdCurrencyExchange } from "react-icons/md";
import { ConverterInput } from "./ConverterInput";
export const ConverterForm = () => {
  return (
    <main className="flex justify-center w-full">
      <section className="w-full rounded-lg shadow-lg p-6 flex">
        {/* <!-- Left Side --> */}
        <div className="flex flex-col w-1/3">
          <ConverterInput />
          <p className="text-xs text-gray-500 mt-3">
            Rates are updated every hour.
          </p>
        </div>

        {/* <!-- Middle (Exchange Logo) --> */}
        <div className="flex justify-center items-center w-1/3">
          <span className="text-4xl text-white bg-green-800 rounded-full p-3">
            <MdCurrencyExchange size={40} />
          </span>
        </div>

        {/* <!-- Right Side --> */}
        <div className="flex flex-col w-1/3">
          <ConverterInput />
          <p className="text-xs text-gray-500 mt-3">
            Rates are updated every hour.
          </p>
        </div>
      </section>
    </main>
  );
};
