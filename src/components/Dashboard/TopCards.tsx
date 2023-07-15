import { Card, Metric, Text } from "@tremor/react";
import { GiReceiveMoney } from "react-icons/gi";

export const TopCards = () => {
  return (
    <div className="lg:col-span-2 col-span-1 bg-white flex  w-full border rounded-lg">
      <>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Card
                className="max-w-xs mx-auto flex flex-col pb-4 px-9 items-center justify-center"
                decoration="top"
                decorationColor="green"
                key={index}
              >
                <GiReceiveMoney size={40} />
                <Text>Sales</Text>
                <Metric>
                  $<span className="text-4xl font-bold">7,846</span>
                </Metric>
              </Card>
            );
          })}
      </>
    </div>
  );
};
