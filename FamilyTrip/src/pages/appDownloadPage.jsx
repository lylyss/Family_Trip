import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import DownloadSection from "../components/downloadSection";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";

export default function AppDownloadPage() {
  return (
    <>
      <NavigationBar />
      <DownloadSection />
      <Footer />
    </>
  );
}
