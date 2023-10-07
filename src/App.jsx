import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import Interests from "./pages/Interests";
import Services from "./features/services/Services";
import Projects from "./features/projects/Projects";
import Contact from "./features/contact/Contact";
import FrontEndPage from "./features/services/FrontEndPage";
import BackEndPage from "./features/services/BackEndPage";
import CMSPage from "./features/services/CMSPage";
import MicroservicesPage from "./features/services/MicroservicesPage";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="frontend" element={<FrontEndPage />} />
              <Route path="backend" element={<BackEndPage />} />
              <Route path="cms" element={<CMSPage />} />
              <Route path="microservices" element={<MicroservicesPage />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="interests" element={<Interests />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
