import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";
import Settings from "./Pages/settings";

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>


    </div>
  );
}
export default App

