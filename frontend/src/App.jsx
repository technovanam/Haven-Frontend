import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
const StudentDemoModal = React.lazy(() => import("./components/StudentDemoModal.jsx"));

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
        <React.Suspense fallback={<div className="flex justify-center items-center h-screen text-[#e8b112]">Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </main>

      <Footer onBookDemoClick={handleOpenModal} />

      {isModalOpen && (
        <React.Suspense fallback={null}>
          <StudentDemoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </React.Suspense>
      )}
    </div>
  );
}

export default App;