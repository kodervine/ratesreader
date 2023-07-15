import { GiReceiveMoney } from "react-icons/gi";

const TopCards = () => {
  return (
    <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border rounded-lg">
      <div className="flex flex-col pb-4 px-9">
        <GiReceiveMoney size={40} />
        <p className="text-gray-600">Current balance</p>
        <p>
          $<span className="text-4xl font-bold">7,846</span>
        </p>
      </div>
      <div className="flex flex-col pb-4 px-9">
        <GiReceiveMoney size={40} />
        <p className="text-gray-600">Current balance</p>
        <p>
          $<span className="text-4xl font-bold">7,846</span>
        </p>
      </div>
      <div className="flex flex-col pb-4 px-9">
        <GiReceiveMoney size={40} />
        <p className="text-gray-600">Current balance</p>
        <p>
          $<span className="text-4xl font-bold">7,846</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
