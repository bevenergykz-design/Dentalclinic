import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingModal from './components/BookingModal';
import { MessageCircle } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header onBookClick={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<Home onBookClick={openModal} />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/77079986161"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        title="Написать в WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
