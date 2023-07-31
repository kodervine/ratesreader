import { useFilterContext } from "contexts";
import { ENewsCategory } from "types";

export const NewsFilterTabs = () => {
  const tabs = [
    ENewsCategory.All,
    ENewsCategory.Business,
    ENewsCategory.Entertainment,
    ENewsCategory.Health,
    ENewsCategory.Science,
    ENewsCategory.Sports,
    ENewsCategory.Technology,
  ];
  const { activeNewsTab, handleFilterNewsTab } = useFilterContext();
  const handleClick = (tabs: ENewsCategory) => {
    handleFilterNewsTab(tabs);
  };

  return (
    <nav className="flex justify-center mb-6 overflow-x-auto md:overflow-hidden">
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
        {tabs.map((tab, index) => (
          <li key={index} className="list-none">
            <button
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 hover:text-green-700  ${
                activeNewsTab === tab
                  ? "border border-b-0 dark:border-gray-400 dark:text-gray-400 rounded-lg"
                  : " border-b rounded-t-lg dark:text-gray-50"
              } transition duration-300 ease-in-out`}
              onClick={() => handleClick(tab)}
            >
              {tab.toUpperCase()}
            </button>
          </li>
        ))}
      </div>
    </nav>
  );
};
