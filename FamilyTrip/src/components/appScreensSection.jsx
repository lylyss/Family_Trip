import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import kidsIdeasImage from "../assets/assests_download/G1_Cosa_fare_con_i_bambini.png";
import adventuresImage from "../assets/assests_download/G2_Gite_e_avventure_per_famiglie.png";
import difficultyImage from "../assets/assests_download/G3_Eta_durata_difficolta.png";
import filtersImage from "../assets/assests_download/G4_Filtri_intelligenti.png";

const screenImages = [
  { id: "kids-ideas", image: kidsIdeasImage, alt: "Schermata idee per bambini" },
  { id: "family-adventures", image: adventuresImage, alt: "Schermata gite e avventure" },
  { id: "difficulty", image: difficultyImage, alt: "Schermata durata e difficoltà" },
  { id: "smart-filters", image: filtersImage, alt: "Schermata filtri intelligenti" },
];
const customStyle = { marginBottom: "10rem" };

const AppScreensSection = () => {
  return (
    <section className="app-screens-section" aria-labelledby="app-screens-title">
      <Container>
        <Row className="g-3 g-md-4 mt-4" style={customStyle} justify-content-center>
          {screenImages.map((highlight) => (
            <Col xs={6} md={3} key={highlight.id}>
              <div className="screens-image-frame">
                <img src={highlight.image} alt={highlight.alt} loading="lazy" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AppScreensSection;
