import "./App.css";
import NavBar from "./component/navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="../Pages/" element={<Home />} />
        <Route path="../Pages/About" element={<About />} />
        <Route path="../Pages/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
