import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import News from "./Components/Pages/News/News";

import Navigation from "./Components/Shared/Navigation/Navigation";
import Members from "./Components/Pages/Members/Members";
import Event from "./Components/Pages/Events/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="members" element={<Members />} />
          <Route path="event" element={<Event />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
