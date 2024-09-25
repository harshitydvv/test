import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StarsCanvas from "./components/StarCanvas";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WalletTracker from "./components/WalletTracker";

const App = () => {
  return (
    <Router>
     
      <div className="min-h-screen flex flex-col bg-[#040112] opacity-95 ">
        <Navbar />

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/walletTracker" element={<WalletTracker />} />
        </Routes>

        
        <div className="z-0 bg-[#040112]">
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
