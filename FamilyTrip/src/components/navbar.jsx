import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import logo from "../assets/assets_Pages/logoapp.png";

const NavigationBar = () => {
  return (
    <Navbar
      expand="md"
      className="shadow-sm bg-transparent border-0"
      sticky="top"
      style={{ backdropFilter: "blur(3px)", backgroundColor: "rgba(15, 23, 42, 0.45)" }}
    >
      <Container className="py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <Navbar.Brand href="/" className="text-decoration-none">
          <Stack direction="horizontal" gap={3} className="align-items-center">
            <Image src={logo} alt="Family Trip logo" width={65} height={65} style={{ borderRadius: "10px" }} />
            <span className="fw-bold display-5 text-light mb-0">Family Trip</span>
          </Stack>
        </Navbar.Brand>
        <Button href="#download" variant="warning" size="lg" className="text-uppercase fw-semibold px-5 py-3 fs-5">
          scarica l'app
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
