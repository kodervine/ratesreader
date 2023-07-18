import React, { createContext, useContext, useState } from "react";
import { ENewsCategory } from "types";

type FilterContextType = {
  activeNewsTab: ENewsCategory;
  handleFilterNewsTab: (section: ENewsCategory) => void;
};

const FilterContext = createContext<FilterContextType>({
  activeNewsTab: ENewsCategory.All,
  handleFilterNewsTab: () => {},
});

export const useFilterContext = (): FilterContextType => {
  return useContext(FilterContext);
};

export const FilterProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [activeNewsTab, setActiveNewsTab] = useState(ENewsCategory.All);

  const handleFilterNewsTab = (section: ENewsCategory) => {
    setActiveNewsTab(section);
  };

  const value: FilterContextType = {
    activeNewsTab,
    handleFilterNewsTab,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
