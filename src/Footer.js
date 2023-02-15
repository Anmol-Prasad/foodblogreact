import "./Footer.css";
import Truck from "./Images/Truck.png";
import insta from "./Images/insta.png";
import twitter from "./Images/twitter.png";
import facebook from "./Images/facebook.png";

const Footer = () => {
  return (
    <>
      <div className="footerbox">
        <div className="truckbox">
          <img src={Truck} className="truck" alt="" />
        </div>
        <div className="contactbox">
          <div className="footertitle">Contact Us</div>
          <div className="footertext">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
            <br />
            <br />
            example2020@gmail.com
            <br />
            <br />
            (904) 443-0343
            <br />
          </div>
        </div>
        <div className="morebox">
          <div className="footertitle">More</div>
          <div className="footertext">
            About Us
            <br />
            <br />
            Products
            <br />
            <br />
            Career
            <br />
            <br />
            Contact Us
            <br />
            <br />
          </div>
        </div>
        <div className="socialbox">
          <div className="mediatitle">Social Links</div>
          <div className="mediabox">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
          </div>
          <div className="copybox">© 2022 Food Truck Example</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
