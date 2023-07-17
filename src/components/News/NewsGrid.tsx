import { Grid, Card } from "@tremor/react";
import { MdPublic } from "react-icons/md";
import { useNewsContext } from "contexts";
export const NewsGrid = () => {
  const { newsApiArticles } = useNewsContext();
  return (
    <>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        {/* Grid */}
      </Grid>
      <section className="grid gap-6 lg:grid-cols-3 xl:gap-x-2">
        {newsApiArticles?.map((newsitems: any) => {
          const { source, author, title, url, publishedAt } = newsitems;

          const date = new Date(publishedAt);
          const formattedDate = date.toDateString();

          console.log(formattedDate);

          return (
            <Card>
              <div className="mb-6 lg:mb-0">
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

                <h5 className="mb-3 text-lg font-bold">{title}</h5>
                <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500">
                  <MdPublic />: {source.name}
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>{formattedDate}</u> by
                    <a href={url}>{author}</a>
                  </small>
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </Card>
          );
        })}
      </section>
    </>
  );
};
