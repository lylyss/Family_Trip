import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CookieManager from "./components/CookieManager";
import AppDownloadPage from "./pages/appDownloadPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CookieManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app-download" element={<AppDownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
