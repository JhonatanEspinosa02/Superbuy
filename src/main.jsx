import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SuperBuyApp from "./SuperBuyApp";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/SignIn/Login";
import Cart from "./components/ShoppingCart/Cart";
import { Route, Routes, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SuperBuyApp />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
