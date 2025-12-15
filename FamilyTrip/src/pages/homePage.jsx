import NavigationBar from "../components/navbar";
import CaroselSection from "../components/caroselSection";
import Footer from "../components/footer";
import devicesImage from "../assets/assets_Pages/device.png";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main className="app-main">
        <div className="hero-content">
          <div className="hero-copy">
            <h1>Benvenuti su Family Trip</h1>
            <p>
              Organizzare un viaggio con i bambini può sembrare complicato, ma con FamilyTrip diventa semplice, veloce e divertente. La nostra app è pensata per
              aiutare famiglie come la tua a trovare ogni giorno idee nuove per trascorrere del tempo di qualità insieme: passeggiate, attività all’aperto,
              luoghi da visitare, parchi, escursioni e itinerari su misura per grandi e piccoli.
            </p>
          </div>
          <div className="hero-visual">
            <img src={devicesImage} alt="Anteprima della app FamilyTrip su vari device" loading="lazy" />
          </div>
        </div>
      </main>
      <CaroselSection />
      <Footer />
    </>
  );
};

export default HomePage;
