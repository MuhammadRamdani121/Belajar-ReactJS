import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Lesson from "./pages/Lesson";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />

      <div className="flex">
        <Sidebar search={search} />

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/:slug" element={<Lesson />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
