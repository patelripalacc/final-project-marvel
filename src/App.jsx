// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";
import Footer from "./components/Footer";
// Import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Navbar logo={<Logo text={"Marvel"} />}>
          <NavItem to={"/"} text={"Home"} />
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<HeroDetails />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}
export default App;
