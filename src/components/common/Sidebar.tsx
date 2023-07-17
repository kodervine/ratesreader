import { Link } from "react-router-dom";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { BsCurrencyExchange, BsNewspaper } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Icon } from "@tremor/react";

const sidebarItems = [
  {
    path: "/",
    icon: RxDashboard,
    tooltip: "Dashboard",
  },
  {
    path: "/converter",
    icon: BsCurrencyExchange,
    tooltip: "Currency converter",
  },
  {
    path: "/news",
    icon: BsNewspaper,
    tooltip: "News",
  },
  {
    path: "/settings",
    icon: FiSettings,
    tooltio: "Settings",
  },
];

export const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link to="/">
            <div className="bg-green-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {sidebarItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <div className="bg-green-100 hover:bg-green-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <Icon
                  size={"lg"}
                  icon={item.icon}
                  tooltip={item.tooltip}
                  className="text-green-700"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
