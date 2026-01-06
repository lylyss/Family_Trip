import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import appStoreBadge from "../assets/assests_download/appStore.png";
import googlePlayBadge from "../assets/assests_download/googlePlay.png";
import seaWaveVideo from "../assets/video/seawave.mp4";

const StoreSection = () => {
  return (
    <section id="download" className="store-section">
      <video className="store-section__video" autoPlay muted loop playsInline aria-hidden="true">
        <source src={seaWaveVideo} type="video/mp4" />
      </video>
      <div className="store-section__content">
        <Container>
          <Row className="align-items-center g-4 text-center ">
            <Col md={12}>
              <p className="store-kicker text-uppercase mb-2 fs-6">Scarica l'app</p>
              <h2 className="display-6 fw-semibold text-dark mb-3">Esperienze curate per ogni giornata in famiglia</h2>
              <p className="text-dark-75 fw-medium mb-4 py-3 px-5 px-lg-0">
                Ricevi itinerari personalizzati, promemoria delle attività e consigli in tempo reale per vivere ogni viaggio in modo semplice e leggero. Tutto
                direttamente sul tuo smartphone o tablet.
              </p>
              <div className="store-badges align-items-center justify-content-center justify-content-start d-flex gap-3">
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
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default StoreSection;
