import "./App.css";

import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import Poster from "./components/Poster";
import Newsletters from "./components/Newsletters";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Scroller />
      <Poster />
      <Newsletters />
      <Footer />
    </div>
  );
}

export default App;
