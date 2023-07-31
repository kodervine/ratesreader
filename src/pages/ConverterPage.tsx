import { ConverterContainer, ConverterForm, Sidebar } from "components";

export const CurrencyConverterPage = () => {
  return (
    <section className="min-h-screen flex">
      <Sidebar />
      <main className="w-full">
        <section className="flex justify-between p-4 ">
          <h3>Converter + Historical price ranges</h3>
        </section>
        <ConverterForm />
        <ConverterContainer />
      </main>
    </section>
  );
};
