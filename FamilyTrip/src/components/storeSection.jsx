import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import appStoreBadge from "../assets/assests_download/appStore.png";
import googlePlayBadge from "../assets/assests_download/googlePlay.png";
import seaWaveVideo from "../assets/video/seawave.mp4";

const StoreSection = () => {
  return (
    <section id="download" className="store-section py-5">
      <video className="store-section__video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={seaWaveVideo} type="video/mp4" />
      </video>
      <div className="store-section__content">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={7}>
              <p className="store-kicker text-uppercase mb-2">Scarica l'app</p>
              <h2 className="display-6 fw-semibold text-white mb-3">Esperienze curate per ogni giornata in famiglia</h2>
              <p className="text-white-75 mb-4">
                Ricevi itinerari personalizzati, promemoria delle attività e consigli in tempo reale per vivere ogni viaggio in modo semplice e leggero. Tutto
                direttamente sul tuo smartphone o tablet.
              </p>
              <div className="store-badges">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="store-badge" aria-label="Scarica su App Store">
                  <img src={appStoreBadge} alt="Disponibile su App Store" loading="lazy" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=app.familytrip.xyz"
                  target="_blank"
                  rel="noreferrer"
                  className="store-badge"
                  aria-label="Scarica su Google Play"
                >
                  <img src={googlePlayBadge} alt="Disponibile su Google Play" loading="lazy" />
                </a>
              </div>
            </Col>
            <Col md={5}>
              <div className="store-card mt-4 mt-md-0">
                <p className="mb-1 text-dark-50  fs-5">Ready per partire?</p>
                <h3 className="h4 text-dark mb-3">Pochi tap per creare la tua agenda FamilyTrip.</h3>
                <ul className="list-unstyled text-dark-75 mb-0">
                  <li>• Itinerari smart aggiornati ogni giorno</li>
                  <li>• Preferiti condivisibili con tutta la famiglia</li>
                  <li>• Notifiche meteo e consigli rapidi</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default StoreSection;
