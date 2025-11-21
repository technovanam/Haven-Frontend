import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BookDemoModal from "./components/BookDemoModal.jsx";

// ============================================================
// MAIN APP LAYOUT COMPONENT
// ============================================================

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <ScrollToTop />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer onBookDemoClick={handleOpenModal} />

      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;