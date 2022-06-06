import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/GlobalStyles";
import Shop from "./pages/Market/Market";
import Favorite from "./pages/Favorite/Favorite";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/market" element={<Shop />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
