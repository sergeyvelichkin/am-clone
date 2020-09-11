import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
      </div>

      <div className="home__row">
        <Product
          id="1232323"
          title="Lean Startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="1232333"
          title="iRobot Braava Jet M6 (6110) Ultimate Robot Mop- Wi-Fi Connected, Precision Jet Spray, Smart Mapping, Works with Alexa, Ideal for Multiple Rooms, Recharges and Resumes"
          price={449.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81xntNcNTPL._AC_SL1500_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="1232344"
          title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
          price={62.64}
          image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
          rating={4}
        />
        <Product
          id="1232355"
          title="Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (Latest Model)"
          price={399.99}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
          rating={5}
        />
        <Product
          id="1232366"
          title="New Apple iMac (21.5-inch, 8GB RAM, 256GB SSD Storage)"
          price={1099.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81blwMhVV8L._AC_SL1500_.jpg"
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1232366"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={109.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
