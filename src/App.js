import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Biographies from "./Components/Biographies";
import AdaLovelace from "./Components/Biographies/AdaL";
import AlanTuring from "./Components/Biographies/AlanT";
import BillGates from "./Components/Biographies/BillGates";
import DennisR from "./Components/Biographies/DennisR";
import GraceHop from "./Components/Biographies/GraceHop";
import LarryG from "./Components/Biographies/LarryG";
import Linus from "./Components/Biographies/Linus";
import MarkZu from "./Components/Biographies/Mark";
import SteveJ from "./Components/Biographies/SteveJobs";
import Tim from "./Components/Biographies/Timb";
import Form from "./Components/Form";
import Credits from "./Components/Credits";

function App() {
  return (
    <Router>
      <Routes basename="/ReacProject">
        <Route path="/" element={<Home />} />
        <Route path="/biographies" element={<Biographies />} />
        <Route path="/Biographies/AdaL" element={<AdaLovelace />} />
        <Route path="/Biographies/AlanT" element={<AlanTuring />} />
        <Route path="/Biographies/BillGates" element={<BillGates />} />
        <Route path="/Biographies/DennisR" element={<DennisR />} />
        <Route path="/Biographies/GraceHop" element={<GraceHop />} />
        <Route path="/Biographies/LarryG" element={<LarryG />} />
        <Route path="/Biographies/Linus" element={<Linus />} />
        <Route path="/Biographies/Mark" element={<MarkZu />} />
        <Route path="/Biographies/SteveJobs" element={<SteveJ />} />
        <Route path="/Biographies/Timb" element={<Tim />} />
        <Route path="/Components/Form" element={<Form />} />
        <Route path="/Components/Credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
