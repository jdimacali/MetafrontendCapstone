import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import ConfirmedBooking from "./pages/ConfirmedBooking.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<BookingPage />} />
      <Route path="/menu" element={<BookingPage />} />
      <Route path="/reservations" element={<BookingPage />} />
      <Route path="/orderonline" element={<BookingPage />} />
      <Route path="/login" element={<BookingPage />} />
      <Route path="/confirmation" element={<ConfirmedBooking />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
