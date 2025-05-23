import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { AppProvider } from "./GlobalState";
import EmployOverview from "./components/EmployOverview";
const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/employee/:id" element={<EmployOverview />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
