import { FaShoppingBag } from "react-icons/fa";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import { useNewsContext } from "contexts";
import { BsThreeDotsVertical } from "react-icons/bs";
export const NewsGrid = () => {
  const { newsApiArticles } = useNewsContext();
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
      {newsApiArticles?.map((newsitems: any) => {
        const { source, author, title, url } = newsitems;

        return (
          <Col>
            <Card>
              <Text>Title</Text>
              <Metric>KPI 1</Metric>
              <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-col-2">
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">{author}</p>
                    <p className="text-gray-800">{title.slice(0, 15)}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span className="bg-green-200 p-2 rounded-lg">
                    {source.name}
                  </span>
                </p>
                <p className="hidden md:flex">.date</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>
                    <a href={url}>link</a>
                  </p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            </Card>
          </Col>
        );
      })}
    </Grid>
  );
};
