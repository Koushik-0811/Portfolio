import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Suppress fetch errors from browser extensions (like React DevTools)
// This must be set up before React loads
if (typeof window !== 'undefined') {
  // Catch errors from extensions
  const originalError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    if (
      (message && (message.includes('Failed to fetch') || message.includes('postUserData'))) ||
      (error && error.message && (error.message.includes('Failed to fetch') || error.message.includes('postUserData'))) ||
      (error && error.stack && error.stack.includes('postUserData'))
    ) {
      return true; // Suppress the error
    }
    if (originalError) {
      return originalError(message, source, lineno, colno, error);
    }
    return false;
  };

  // Catch unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (
      (reason && typeof reason === 'object') &&
      (
        (reason.message && (reason.message.includes('Failed to fetch') || reason.message.includes('postUserData'))) ||
        (reason.toString && reason.toString().includes('Failed to fetch')) ||
        (reason.stack && reason.stack.includes('postUserData'))
      )
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Additional error listener
  window.addEventListener('error', (event) => {
    if (
      (event.message && (event.message.includes('Failed to fetch') || event.message.includes('postUserData'))) ||
      (event.error && event.error.message && (event.error.message.includes('Failed to fetch') || event.error.message.includes('postUserData'))) ||
      (event.error && event.error.stack && event.error.stack.includes('postUserData'))
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
