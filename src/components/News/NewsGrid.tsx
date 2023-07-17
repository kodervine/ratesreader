import { Grid, Card } from "@tremor/react";
import { MdPublic } from "react-icons/md";
import { useNewsContext } from "contexts";
export const NewsGrid = () => {
  const { newsApiArticles } = useNewsContext();
  // todo - filter section for the news
  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        {/* Grid */}
      </Grid>
      <section className="grid gap-6 lg:grid-cols-3 xl:gap-x-2">
        {newsApiArticles?.map((newsitems: any, index) => {
          const { source, author, title, url, publishedAt } = newsitems;

          const date = new Date(publishedAt);
          const formattedDate = date.toDateString();

          return (
            <Card key={index}>
              <section className="mb-6 lg:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
                    className="w-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>

                <div className="p-8 space-y-3  rounded-xl">
                  <span className="inline-block text-green-700">
                    <MdPublic className="w-8 h-8" />
                  </span>
                  <p className="text-gray-500">
                    {formattedDate} by{" "}
                    <a
                      href={url}
                      className="inline-flex p-2 px-4 text-green-800 capitalize transition-colors duration-200 transform bg-green-100 rounded-full  hover:underline hover:text-green-600"
                    >
                      {author}
                    </a>
                  </p>
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize">
                    {title}
                  </h1>
                </div>
              </section>
            </Card>
          );
        })}
      </section>
    </>
  );
};
