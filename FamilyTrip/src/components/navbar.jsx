import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import logo from "../assets/assets_Pages/logoapp.png";

const NavigationBar = () => {
  return (
    <Navbar expand="md" className="shadow-sm" sticky="top">
      <Container className="py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <Stack direction="horizontal" gap={3} className="align-items-center">
          <Image src={logo} alt="Family Trip logo" width={56} height={56} style={{ borderRadius: "15px" }} />
          <span className="fw-bold fs-4 text-dark">Family Trip</span>
        </Stack>
        <Button href="#download" variant="warning" className="text-uppercase fw-semibold px-4">
          scarica l'app
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
