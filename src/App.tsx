
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import Boutique from './pages/Boutique';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WebApp from './pages/WebApp';
import Reservation from './pages/Reservation';
import Checkout from './pages/Checkout';
import CGU from './pages/CGU';
import MentionsLegales from './pages/MentionsLegales';
import Formation from './pages/Formation';

// Import de react-toastify pour les notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white w-full">
        <Preloader />
        <Navbar />
        <main className="w-full pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app" element={<WebApp />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/formation" element={<Formation />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Conteneur de notifications toast */}
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;