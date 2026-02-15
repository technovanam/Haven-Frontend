
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Maintenance from './pages/Maintenance.jsx';
import { MAINTENANCE_MODE, MAINTENANCE_PREVIEW_SECRET } from './config.js';
// Lazy load other pages
const About = React.lazy(() => import('./pages/About.jsx'));
const Services = React.lazy(() => import('./pages/Services.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
import './index.css';

// ============================================================
// APP ENTRY POINT & ROUTING
// ============================================================

// Helper: check if developer preview is enabled (via ?preview=devsecret)
function isDeveloperPreview() {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('preview') === MAINTENANCE_PREVIEW_SECRET;
}

// App routes for normal site
function AppRoutes() {
  return (
    <Routes>
      {/* The App component is the layout route */}
      <Route path="/" element={<App />}>
        {/* Child routes are rendered inside App's <Outlet> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        {/* Redirect old book-demo page to home */}
        <Route path="book-demo" element={<Navigate to="/" replace />} />
        {/* You can add a 404 Not Found page here later */}
      </Route>
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {MAINTENANCE_MODE ? (
        <Routes>
          <Route
            path="*"
            element={
              isDeveloperPreview() ? <AppRoutes /> : <Maintenance />
            }
          />
        </Routes>
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  </React.StrictMode>
);
