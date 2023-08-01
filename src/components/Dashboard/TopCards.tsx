import { Card, Metric, Text } from "@tremor/react";
import { GiReceiveMoney } from "react-icons/gi";

export const TopCards = () => {
  return (
    <main className="lg:col-span-2 col-span-1 flex  w-full border rounded-lg">
      <>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Card
                className="max-w-xs mx-auto flex flex-col bg-gray-900 text-white pb-4 px-9 items-center justify-center"
                decoration="top"
                decorationColor="green"
                key={index}
              >
                <GiReceiveMoney size={40} />
                <Text>Sales</Text>
                <Metric>
                  $
                  <span className="text-4xl font-bold font-robotoSlab">
                    7,846
                  </span>
                </Metric>
              </Card>
            );
          })}
      </>
    </main>
  );
};
