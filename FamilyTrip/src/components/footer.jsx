import { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const CONTACT_EMAIL = "familytrip.app@gmail.com";

const legalLinks = [
  { label: "Privacy Policy", href: "https://www.iubenda.com/privacy-policy/64085363" },
  { label: "Contatti", isContact: true },
  { label: "Cookie", href: "https://www.iubenda.com/privacy-policy/64085363/cookie-policy" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "TikTok", href: "https://www.tiktok.com", icon: FaTiktok },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

const socialPillStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "115px",
  height: "48px",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.3)",
  backgroundColor: "rgba(255,255,255,0.08)",
  color: "#fff",
};

const popupBackdropStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(15,23,42,0.65)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
};

const popupCardStyle = {
  background: "#0f172a",
  color: "#f8fafc",
  borderRadius: "20px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  padding: "2rem",
  maxWidth: "340px",
  width: "90%",
  textAlign: "center",
};

const Footer = ({ fixed }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className={`site-footer mt-5${fixed ? " site-footer--fixed" : ""}`}>
        <Container className="py-5 d-flex flex-column align-items-center gap-4 pt-4">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {/* eslint-disable-next-line no-unused-vars */}
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Apri ${label}`} style={socialPillStyle}>
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-4 small text-white-50">
            {legalLinks.map(({ label, href, isContact }) =>
              isContact ? (
                <button
                  key={label}
                  type="button"
                  className="text-white-50 text-decoration-none bg-transparent border-0 p-0"
                  onClick={() => setIsContactOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  {label}
                </button>
              ) : (
                <a key={label} href={href} className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer">
                  {label}
                </a>
              ),
            )}
          </div>
        </Container>
      </footer>
      {isContactOpen && (
        <div style={popupBackdropStyle} role="dialog" aria-modal="true" aria-labelledby="contact-popup-title" onClick={() => setIsContactOpen(false)}>
          <div style={popupCardStyle} onClick={(event) => event.stopPropagation()}>
            <h3 id="contact-popup-title" className="mb-3">
              Contatti E-Mail
            </h3>
            <p className="mb-4" style={{ fontSize: "1.1rem" }}>
              {CONTACT_EMAIL}
            </p>

            <button type="button" className="btn btn-outline-light" onClick={() => setIsContactOpen(false)}>
              Chiudi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Footer.propTypes = {
  fixed: PropTypes.bool,
};

Footer.defaultProps = {
  fixed: false,
};

export default Footer;
