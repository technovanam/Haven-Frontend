// Centralized API base URL for frontend requests
// Set VITE_API_BASE_URL in your environment for production (e.g., https://haven-backend.onrender.com)
// Default to the backend running locally on port 5000. In production set VITE_API_BASE_URL.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Set to true to enable maintenance mode
export const MAINTENANCE_MODE = true;

// Set to a secret string for developer preview (e.g., ?preview=devsecret)
export const MAINTENANCE_PREVIEW_SECRET = "devpreview";
