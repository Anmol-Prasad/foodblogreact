import curve from "./Images/Vector 1.png";
import van from "./Images/Van.png";
import About from "./About";
import Card from "./Card";
import Footer from "./Footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="home">
        <div className="hometext">
          <div className="logobox">
            <img src={van} alt="" />
          </div>
          <div className="largetxt">
            Discover the <span style={{ color: "#E23744" }}>Best</span> Food and
            Drinks
          </div>
          <div className="smalltxt">
            Naturally made Healthcare Products for the better care & support of
            your family
          </div>
          <button className="expbtn">Explore Now!</button>
        </div>
        <div className="homeimg">
          <img src={curve} className="curveimg" alt="" />
          <div className="imgbg"></div>
          <div className="getbtn">
            <button className="btnstyle">Get in Touch</button>
          </div>
        </div>
      </div>
      <About />
      <Card />
      <Footer />
    </>
  );
}

export default App;
