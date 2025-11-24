import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Resourcespage from "./Pages/Resourcespage";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#1C1433] text-white">
      {/* Header */}
      <header className="w-full bg-[#1C1433] text-white font-poppins relative">
        <div className="absolute bottom-0 left-0 w-full `h-[2px]` bg-white/20"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                src="/hyroxlogo.png"
                alt="Hyrox Logo"
                className="w-40 h-20 object-contain"
              />
              <div className="leading-tight">
                <h1 className="text-4xl font-extrabold">HYROX</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/resources"
              className="px-6 py-2 text-3xl hover:bg-[#382866] rounded-lg"
            >
              RESOURCES
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden  px-6 pb-4 space-y-4 border-t border-white/20">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-2 rounded-lg block"
            >
              HOME
            </Link>
            <Link
              to="/resources"
              onClick={() => setOpen(false)}
              className="py-1 block"
            >
              RESOURCES
            </Link>
          </div>
        )}
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resourcespage />} />
      </Routes>
    </div>
  );
}

export default App;
