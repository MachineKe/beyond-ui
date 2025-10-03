import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ComponentShowcase } from './components/ComponentShowcase/ComponentShowcase';
import MarketplaceSection from './components/Marketplace/MarketplaceComponent.example';
import { BlogShowcase } from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<MarketplaceSection />} />
        <Route path="/blog" element={<BlogShowcase />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;