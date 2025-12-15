import NavigationBar from "../components/navbar";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main className="app-main">
        <h1>Benvenuti su Family Trip</h1>
        <p>
          Pianifica avventure memorabili per tutta la famiglia con itinerari suggeriti, consigli sui luoghi più suggestivi e promemoria smart direttamente
          dall'app.
        </p>
      </main>
    </>
  );
};

export default HomePage;
