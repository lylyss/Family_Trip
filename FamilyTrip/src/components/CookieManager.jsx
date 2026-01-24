import { useEffect, useState, useRef } from "react";
import { loadAnalytics } from "../utils/analytics";
import cookieIcon from "../assets/assets_Pages/cookie.png";

const bannerStyle = {
  position: "fixed",
  bottom: "1.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: "480px",
  width: "calc(100% - 2rem)",
  background: "#ffffffff",
  color: "#1f2933",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  padding: "1.5rem",
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontFamily: "inherit",
};

const buttonRowStyle = {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  flex: 1,
  minWidth: "140px",
  padding: "0.75rem 1rem",
  borderRadius: "999px",
  border: "none",
  background: "#0f766e",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  background: "#e5e7eb",
  color: "#42464eff",
};

const cookiePolicyUrl = "https://www.iubenda.com/privacy-policy/64085363/cookie-policy#owner-and-data-controller";

const bannerTitleId = "cookie-banner-title";
const bannerDescId = "cookie-banner-description";

export default function CookieManager() {
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedConsent = window.localStorage.getItem("cookie_consent");
    return !savedConsent;
  });

  const acceptButtonRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onConsentGiven = () => {
      loadAnalytics();
      setIsBannerVisible(false);
    };

    const savedConsent = window.localStorage.getItem("cookie_consent");
    if (savedConsent === "granted") {
      loadAnalytics();
    }

    window.addEventListener("iubenda_consent_given", onConsentGiven);
    return () => {
      window.removeEventListener("iubenda_consent_given", onConsentGiven);
    };
  }, []);

  useEffect(() => {
    if (isBannerVisible && acceptButtonRef.current) {
      acceptButtonRef.current.focus();
    }
  }, [isBannerVisible]);

  const handleAccept = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("cookie_consent", "granted");
    window.dispatchEvent(new Event("iubenda_consent_given"));
  };

  const handleDecline = () => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("cookie_consent", "denied");
    setIsBannerVisible(false);
  };

  const handleOpenPreferences = () => {
    setIsBannerVisible(true);
  };

  const handleBannerKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsBannerVisible(false);
    }
  };

  return (
    <>
      {isBannerVisible && (
        <div
          style={bannerStyle}
          role="dialog"
          aria-modal="true"
          aria-labelledby={bannerTitleId}
          aria-describedby={bannerDescId}
          tabIndex={-1}
          onKeyDown={handleBannerKeyDown}
        >
          <div>
            <strong id={bannerTitleId}>Usiamo i cookie</strong>
            <p id={bannerDescId} style={{ margin: "0.5rem 0 0", lineHeight: 1.4 }}>
              Utilizziamo cookie tecnici e di terze parti per migliorare la tua esperienza e analizzare il traffico. Puoi accettare o rifiutare in qualsiasi
              momento.
            </p>

            <a href={cookiePolicyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#0f766e", fontWeight: 600 }}>
              Consulta la cookie policy completa
            </a>
          </div>
          <div style={buttonRowStyle}>
            <button type="button" style={primaryButtonStyle} onClick={handleAccept} ref={acceptButtonRef}>
              Accetta tutti
            </button>
            <button type="button" style={secondaryButtonStyle} onClick={handleDecline}>
              Rifiuta
            </button>
          </div>
        </div>
      )}
      {!isBannerVisible && (
        <button type="button" className="cookie-preferences-button" onClick={handleOpenPreferences} aria-label="Apri preferenze cookie">
          <img src={cookieIcon} alt="" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
