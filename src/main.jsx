
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import the main layout component
import App from './App.jsx';

// Import page components
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';  
import Contact from './pages/Contact.jsx';

// Import global styles
import './index.css';

// This is the entry point of your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>,
);

