import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import logo from "../assets/assets_Pages/IMG-20251011-WA0019.PNG";

const NavigationBar = () => {
  const [lightNav, setLightNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setLightNav(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={`shadow-sm border-0 ${lightNav ? "nav-opaque" : "nav-translucent"}`} sticky="top">
      <Container className="py-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <Navbar.Brand href="/" className="text-decoration-none">
          <Stack direction="horizontal" gap={3} className="align-items-center">
            <Image src={logo} alt="Family Trip logo" width={65} height={65} style={{ borderRadius: "10px" }} />
            <span className="brand-title text-light mb-0">FamilyTrip</span>
          </Stack>
        </Navbar.Brand>
        <Button size="lg" className="text-uppercase fw-semibold px-5 py-3 fs-5 border-0 animated-cta" onClick={() => navigate("/app-download")}>
          <span>scarica l&apos;app</span>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
