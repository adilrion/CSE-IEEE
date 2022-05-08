import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";

import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
