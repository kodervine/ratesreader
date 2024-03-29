import {
  ConverterChart,
  ConverterContainer,
  ConverterForm,
  Header,
  Sidebar,
} from "components";

export const CurrencyConverterPage = () => {
  return (
    <main className="flex flex-row w-full">
      <Sidebar />

      <section className="flex flex-col w-full px-4">
        <Header title="Converter + Historical price ranges" />
        <section className="flex flex-col lg:flex-row justify-between p-4 ">
          <h3>Converter </h3>
        </section>
        <ConverterForm />
        <ConverterContainer />
        <ConverterChart />
      </section>
    </main>
  );
};
