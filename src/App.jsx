import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";


const App = () => {
  const [LoginPopup, setLoginPopup] = React.useState(false);
  const [isSigninPopupVisible, setIsSigninPopupVisible] = React.useState(false);

  const handleLoginPopup = () => {
    setLoginPopup(!LoginPopup);
  };


  const handleSigninPopup = () => {
    setIsSigninPopupVisible(!isSigninPopupVisible);
  };



  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleLoginPopup={handleLoginPopup}  handleSigninPopup={handleSigninPopup}/>
      <Hero handleLoginPopup={handleLoginPopup} />
      <Banner />
      <TopProducts handleLoginPopup={handleLoginPopup} />
      <Testimonials />
      <Footer />
      <Popup LoginPopup={LoginPopup} setLoginPopup={setLoginPopup} />
    </div>
  );
};

export default App;
