import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
const App = () => {
  return (
    <div className="w-[90%] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
