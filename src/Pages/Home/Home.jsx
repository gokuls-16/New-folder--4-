import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import PopularServices from "./PopularServices";

import VideoBanner from "./VideoBanner";
import "./home.css";
import Discover from "./Discover";

import Countdown from "./CountDown";
import Walking from "../../Components/Hooks/Animation/Walking";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <div className="mb-32">
        <PopularServices />
      </div>
      <AboutUs />
      <Countdown />
      <Discover />
      <ContactUs />
      <Walking />
    </div>
  );
};

export default Home;
