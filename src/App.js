import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import MainPage from "./components/MainPage";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
