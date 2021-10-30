import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Doctor from "./components/Doctor/page/Doctor";
import Nav from "./components/Navbar/Page/Nav";
import Home from "./components/Home/Page/Home";
import Appointment from "./components/Appointment/Page/Appointment";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Slider />
          <Home />
        </Route>
        <Route exact path="/doctor">
          <Doctor />
        </Route>
        <Route exact path='/appointment'>
          <Appointment/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
