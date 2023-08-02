import React, {
  createContext,
  useContext,
  useState,
  FC,
  useEffect,
} from "react";
import { FluctuationApiResponse } from "types"; // Import the types defined above
import { EXCHANGE_API_URL, requestOptions } from "./utils";
import { format, sub } from "date-fns";

// Create the context type
type FluctuationContextType = {
  fluctuationData: FluctuationApiResponse | null;
  setFluctuationData: (data: FluctuationApiResponse) => void;
};

// Create the context
const FluctuationContext = createContext<FluctuationContextType>({
  fluctuationData: null,
  setFluctuationData: () => {},
});

export const FluctuationProvider: FC<{ children: React.ReactNode }> = ({
  children,
}: any) => {
  const [fluctuationData, setFluctuationData] =
    useState<FluctuationApiResponse | null>(null);

  useEffect(() => {
    const fetchAvailableFluctuations = async () => {
      const startDate = format(sub(new Date(), { months: 1 }), "yyyy-MM-dd");
      const todayDate = format(new Date(), "yyyy-MM-dd");
      try {
        const response = await fetch(
          `${EXCHANGE_API_URL}fluctuation?start_date=${startDate}&end_date=${todayDate}&base=USD&symbols=XOF,GHS,NGN,CVE,SLL,LRD,GMD,GNF,XOF,LRD,CDF,BYR,XOF,NGN,GHS
          `,
          requestOptions
        );

        if (!response.ok) {
          throw new Error("error fetching available currencies");
        }
        const responseData: FluctuationApiResponse = await response.json();
        if (!responseData.success) {
          throw new Error("API Error");
        }
        setFluctuationData(responseData);
      } catch (error) {
        console.error(`Can't get fluctuation rates: ${error}`);
      }
    };

    fetchAvailableFluctuations();
  }, []);

  return (
    <FluctuationContext.Provider
      value={{ fluctuationData, setFluctuationData }}
    >
      {children}
    </FluctuationContext.Provider>
  );
};

export const useFluctuationContext = () => useContext(FluctuationContext);
