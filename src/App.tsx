import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ComponentShowcase } from './components/ComponentShowcase/ComponentShowcase';
import { MarketplaceComponent } from './components/Marketplace';
import MarketplaceSection from './components/Marketplace/MarketplaceComponent.example';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<MarketplaceSection />} />
        <Route path="/marketplace" element={<MarketplaceComponent />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;