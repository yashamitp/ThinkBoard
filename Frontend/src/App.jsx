import React from "react";
import { Route, Router, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";
import RateLimitedUI from "./components/RateLimitUi";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createpage" element={<CreatePage />} />
        <Route path="notedetail" element={<NoteDetailPage />} />
        <Route path="ratelimitui" element={<RateLimitedUI />} />
      </Routes>
    </div>
  );
}

export default App;
