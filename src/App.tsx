import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="text-white w-screen bg-slate-950 min-w-80 grid h-auto">
      <Header />
      <Home/>
      <Footer />
    </div>
  );
};

export default App;
