import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Milestones, Hero, Navbar, Works, Team, StarsCanvas, Footer, ScrollToHash } from './components';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy'; 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Milestones />
              <Works />
              <Team />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
          <Route path="/legal" element={
            <div className="relative z-0">
              <Legal />
              <StarsCanvas />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="relative z-0">
              <Privacy />
              <StarsCanvas />
            </div>
          } />
        </Routes>

        {/* ✅ Listen and scroll when a hash is present */}
        <ScrollToHash />

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
