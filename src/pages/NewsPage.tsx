import { useNewsContext } from "contexts";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Sidebar } from "components";

export const NewsPage = () => {
  const { newsApiArticles } = useNewsContext();
  return (
    <div className="bg-gray-100 min-h-screen flex gap-20">
      <Sidebar />
      <div className="">
        <div className="flex justify-between p-4">
          <h2>News Update</h2>
          <h2>Welcome back, Nenye</h2>
        </div>
        <div className="p-4">
          <div className="m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>News</span>
              <span className="sm:text-left text-right">Status</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {newsApiArticles?.map((newsitems) => {
                const { source, author, title, url } = newsitems;
                return (
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
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
