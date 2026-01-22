import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import appStoreBadge from "../assets/assests_download/appStore.png";
import googlePlayBadge from "../assets/assests_download/googlePlay.png";
import tunnelVideo from "../assets/video/tunelGarda.mp4";
import runSea from "../assets/video/runSea.mp4";
import walkSea from "../assets/video/walkSea.mp4";

const fullText = "Scarica l'app e parti all'avventura su misura della tua famiglia!";
const backgroundSlides = [
  { id: "tunnel", type: "video", src: tunnelVideo, alt: "Tunnel sul Lago di Garda" },
  { id: "run-sea", type: "video", src: runSea, alt: "Corsa sulla spiaggia al tramonto" },
  { id: "walk-sea", type: "video", src: walkSea, alt: "Passeggiata sulla spiaggia al tramonto" },
];

export default function DownloadSection() {
  const [typedText, setTypedText] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typedText.length === fullText.length) return;
    const timeout = setTimeout(() => {
      setTypedText(fullText.slice(0, typedText.length + 1));
    }, 45);
    return () => clearTimeout(timeout);
  }, [typedText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="download-section position-relative overflow-hidden">
      {backgroundSlides.map((slide, index) =>
        slide.type === "video" ? (
          <video
            key={slide.id}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(6px) brightness(0.55)",
              opacity: index === activeSlide ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ) : (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(6px) brightness(0.55)",
              opacity: index === activeSlide ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
          />
        ),
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      />
      <Container
        className="py-5 text-center text-white position-relative"
        style={{ minHeight: "420px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem" }}
      >
        <p style={{ fontSize: "3.5rem", fontWeight: 600, minHeight: "3rem", letterSpacing: "0.02em" }}>{typedText}</p>
        <div className="store-badges align-items-center justify-content-center justify-content-start d-flex gap-3">
          <a
            href="https://apps.apple.com/us/app/family-trip/id6756327275"
            target="_blank"
            rel="noreferrer"
            className="store-badge"
            aria-label="Scarica su App Store"
          >
            <img src={appStoreBadge} alt="Disponibile su App Store" loading="lazy" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.familytrip.xyz"
            target="_blank"
            rel="noreferrer"
            className="store-badge"
            aria-label="Scarica su Google Play"
          >
            <img src={googlePlayBadge} alt="Disponibile su Google Play" loading="lazy" />
          </a>
        </div>
      </Container>
    </section>
  );
}
