import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import logo from "../assets/assets_Pages/IMG-20251011-WA0019.PNG";
import wordmarkLogo from "../assets/assets_Pages/Logo_Bianco.PNG";

const NavigationBar = () => {
  const [lightNav, setLightNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isDownloadPage = location.pathname === "/app-download";

  useEffect(() => {
    const onScroll = () => setLightNav(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={`shadow-sm border-0 padding-0 ${lightNav ? "nav-opaque" : "nav-translucent"}`} sticky="top">
      <Container className="py-2 py-md-3 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <Navbar.Brand href="/" className="text-decoration-none">
          <Stack direction="horizontal" gap={3} className="align-items-center">
            <Image src={logo} alt="Family Trip logo" width={56} height={56} style={{ borderRadius: "10px", marginBottom: "10px" }} />
            <span className="brand-title text-light mb-0 d-flex align-items-center gap-2">
              <Image src={wordmarkLogo} alt="Family Trip logotype" height={100} className="brand-wordmark" />
              <span className="brand-badge">APP</span>
            </span>
          </Stack>
        </Navbar.Brand>
        {!isDownloadPage && (
          <Button size="lg" className="text-uppercase fw-semibold px-5 py-3 fs-5 border-0 animated-cta" onClick={() => navigate("/app-download")}>
            <span>scarica l&apos;app</span>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
