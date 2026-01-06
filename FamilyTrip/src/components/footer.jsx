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

const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <Container className="py-5 d-flex flex-column align-items-center gap-4">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {/* eslint-disable-next-line no-unused-vars */}
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="social-pill" aria-label={`Apri ${label}`}>
              <Icon />
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
