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
      <ul className="flex space-x-4">
        {tabs.map((tab, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 text-lg font-medium text-gray-700 bg-transparent focus:outline-none hover:text-green-700 bg-green-200 ${
                activeNewsTab === tab
                  ? "text-green-700  border-b-2 border-green-700 bg-green-200"
                  : ""
              } transition duration-300 ease-in-out`}
              onClick={() => handleClick(tab)}
            >
              {tab.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
