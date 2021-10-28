import { BrowserRouter as Router } from "react-router-dom";
import Submenu from "./components/Navbar/Submenu";
import NavLinks from './components/Navbar/NavLinks'
import Modal from "./components/Navbar/Modal";
import Slider from "./components/Slider/Slider";
import NavSearch from './components/NavSearch/NavSearch'
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <NavSearch />
      <NavLinks />
      <Modal />
      <Submenu />
      <Slider />
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
