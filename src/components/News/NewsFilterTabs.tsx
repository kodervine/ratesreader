import { useState } from "react";

export const NewsFilterTabs = () => {
  const sections = [
    "All",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const [activeSection, setActiveSection] = useState("All");

  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav className="flex justify-center mb-6 overflow-x-auto md:overflow-hidden">
      <ul className="flex space-x-4">
        {sections.map((section, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 text-lg font-medium text-gray-700 bg-transparent focus:outline-none hover:text-green-700 bg-green-200 ${
                activeSection === section
                  ? "text-green-700  border-b-2 border-green-700 bg-green-200"
                  : ""
              } transition duration-300 ease-in-out`}
              onClick={() => handleClick(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
