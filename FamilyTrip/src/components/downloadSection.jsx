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
            className={`download-section__media${index === activeSlide ? " is-visible" : ""}`}
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        ) : (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            aria-hidden="true"
            className={`download-section__media${index === activeSlide ? " is-visible" : ""}`}
          />
        ),
      )}
      <div className="download-section__overlay" aria-hidden="true" />
      <Container className="download-section__content text-white text-center text-lg-start">
        <p className="download-section__headline" aria-live="polite">
          {typedText}
        </p>
        <div className="download-section__badges store-badges d-flex">
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
