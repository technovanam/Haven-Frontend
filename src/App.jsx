import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

/**
 * App component serves as the main layout for the entire application.
 * It includes the Header, Footer, and a main content area where
 * routed pages will be rendered via the Outlet component.
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* The Outlet component renders the current route's element */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
