import Container from "react-bootstrap/Container";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const legalLinks = [
  { label: "Privacy Policy", href: "https://www.iubenda.com/privacy-policy/64085363" },
  { label: "Contatti", href: "mailto:info@familytrip.com" },
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

const Footer = () => {
  return (
    <footer className="site-footer mt-5" style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 9997 }}>
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
          {legalLinks.map(({ label, href }) => (
            <a key={label} href={href} className="text-white-50 text-decoration-none" target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
