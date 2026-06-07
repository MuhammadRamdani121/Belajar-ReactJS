import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Lesson from "./pages/Lesson";

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

            <Route path="/tutorial/:course/:lesson" element={<Lesson />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
