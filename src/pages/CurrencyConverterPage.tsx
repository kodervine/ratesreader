import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { Sidebar } from "components";

export const CurrencyConverterPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex justify-between">
      <Sidebar />
      <main>
        <section className="flex justify-between p-4 ">
          <h2>Customers</h2>
          <h2>Welcome back, Nenye</h2>
        </section>
        <article className="p-4">
          <div className="m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BsPersonFill className="text-purple-400" />
                  </div>
                  <p className="pl-4">.name.first + " " +.name.last</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  .name.first@gmail.com
                </p>
                <p className="hidden md:flex ">.date</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>.method</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </section>
  );
};
