import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import beachTrakingDog from "../assets/beachTrakingDog.jpg";
import famTurist from "../assets/famTurist.jpg";
import montainFamily from "../assets/montainFamily.jpg";
import riverFam from "../assets/riverFam.jpg";
import sunsetSea from "../assets/sunsetSea.jpg";
import treeFam from "../assets/treeFam.jpg";

const carouselGroups = [
  {
    id: "seaside",
    title: "Giornate al mare",
    speed: 10,
    slides: [
      {
        src: beachTrakingDog,
        caption: "Passeggiate al tramonto",
        description: "Una camminata leggera sulla battigia per rilassare tutta la famiglia.",
      },
      {
        src: sunsetSea,
        caption: "Cieli arancioni",
        description: "Colori caldi per serate da ricordare.",
      },
      {
        src: famTurist,
        caption: "Escursioni costiere",
        description: "Esplora villaggi di mare ricchi di tradizioni.",
      },
    ],
  },
  {
    id: "nature",
    title: "Immersi nella natura",
    speed: 24,
    slides: [
      {
        src: treeFam,
        caption: "Foreste rigogliose",
        description: "Weekend full immersion nel verde con percorsi facili.",
      },
      {
        src: montainFamily,
        caption: "Picnic tra i monti",
        description: "Scopri rifugi panoramici e aria frizzante.",
      },
      {
        src: riverFam,
        caption: "Sponde tranquille",
        description: "Rallenta accanto all'acqua con giochi per i più piccoli.",
      },
    ],
  },
];

const CaroselSection = () => {
  return (
    <section className="carousel-section py-5 w-100">
      <Container fluid>
        <div className="text-center text-light mb-5">
          <p className="section-kicker text-uppercase mb-2 ts-4">Moodboard</p>
        </div>
        <Row className="g-4">
          {carouselGroups.map((group) => (
            <Col key={group.id} xs={12}>
              <div className="glass-card h-100">
                <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 px-3 pt-3">
                  <div>
                    <p className="fw-semibold text-uppercase text-white-50 small mb-1">{group.title}</p>
                  </div>
                  <span className="badge bg-warning text-dark text-uppercase">Family Trip pick</span>
                </header>
                <div className="marquee-wrapper mt-3">
                  <div className="marquee-track" style={{ animationDuration: `${group.speed}s` }}>
                    {[...group.slides, ...group.slides].map((slide, idx) => (
                      <figure key={`${group.id}-${idx}`} className="marquee-item">
                        <img src={slide.src} alt={slide.caption} loading="lazy" draggable="false" />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CaroselSection;
