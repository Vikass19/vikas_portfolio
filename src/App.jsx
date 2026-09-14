import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WebDevelopmentPune from "./pages/WebDevelopmentPune";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-ink text-paper">
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Pune Web Development SEO Page */}
          <Route
            path="/web-development-pune"
            element={<WebDevelopmentPune />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;