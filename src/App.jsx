import React, { useState } from "react"; // <-- 1. Import useState
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BookDemoModal from "./components/BookDemoModal.jsx"; // <-- 2. Import your modal

/**
 * App component serves as the main layout for the entire application.
 * It includes the Header, Footer, and a main content area where
 * routed pages will be rendered via the Outlet component.
 * * It also manages the state for the global "Book a Free Demo" modal.
 */
function App() {
  // --- 3. Add state to manage the modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- 4. Create a function to open the modal ---
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Automatically scroll to top on route change */}
      <ScrollToTop />

      {/* Main content area with padding to avoid overlap with header */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* 5. Pass the open function to the Footer */}
      <Footer onBookDemoClick={handleOpenModal} />

      {/* 6. Render the modal itself */}
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;