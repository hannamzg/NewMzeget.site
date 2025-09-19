import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

// Pages
import Home from './pages/Home';
import Kitchens from './pages/Kitchens';
import ModernKitchen from './pages/ModernKitchen';
import CountryKitchen from './pages/CountryKitchen';
import ClassicKitchen from './pages/ClassicKitchen';
import MinimalistKitchen from './pages/MinimalistKitchen';
import Bedrooms from './pages/Bedrooms';
import Storage from './pages/Storage';
import Project from './pages/Project';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/kitchens/modern" element={<ModernKitchen />} />
          <Route path="/kitchens/country" element={<CountryKitchen />} />
          <Route path="/kitchens/classic" element={<ClassicKitchen />} />
          <Route path="/kitchens/minimalist" element={<MinimalistKitchen />} />
          <Route path="/bedrooms" element={<Bedrooms />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default App;
