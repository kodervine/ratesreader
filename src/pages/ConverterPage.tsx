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

      <section className="flex flex-col w-full">
        <Header title="Converter + Historical price ranges" />
        <section className="flex justify-between p-4 ">
          <h3>Converter </h3>
        </section>
        <ConverterForm />
        <ConverterContainer />
        <ConverterChart />
      </section>
    </main>
  );
};
