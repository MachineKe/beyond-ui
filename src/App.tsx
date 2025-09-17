import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ComponentShowcase } from './components/ComponentShowcase/ComponentShowcase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;