import { FaShoppingBag } from "react-icons/fa";

const NewsUpdates = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent orders</h1>
      <ul>
        <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer">
          <div className="bg-purple-100 rounded-lg p-3">
            <FaShoppingBag className="text-purple-800" />
          </div>
          <div className="pl-4">
            <p className="text-gray-800 font-bold">$total</p>
            <p className="text-gray-400 text-sm">name first</p>
          </div>
          <p className="lg:flex md:hidden absolute right-6 text-sm">date</p>
        </li>
      </ul>
    </div>
  );
};

export default NewsUpdates;
