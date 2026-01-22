import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const playStoreUrl = "https://play.google.com/store/apps/details?id=app.familytrip.xyz";

export default function AppDownloadPage() {
  return (
    <Container className="py-5 text-center">
      <h1 className="mb-3">Scarica FamilyTrip</h1>
      <p className="lead mb-4">Pianifica itinerari, salva ricordi e ricevi suggerimenti personalizzati direttamente dall&apos;app FamilyTrip.</p>
      <Button
        as="a"
        href={playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        size="lg"
        className="text-uppercase fw-semibold px-5 py-3 fs-5 border-0"
        style={{ backgroundColor: "RGB(255, 63, 29)" }}
      >
        Vai al Play Store
      </Button>
    </Container>
  );
}
