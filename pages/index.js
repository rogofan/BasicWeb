import React from "react";
import Homepage from "../components/HomePage/Homepage";
import Image from "next/image";
import Logo from "../public/logoArtmode.webp";
// import video from "../public/testVideo.mp4";

const Home = () => {
  //tohle je home page první stránka
  return (
    <div>
      /*{" "}
      <video height="100%" width="100%" autoPlay muted loop>
        <source src="../public/testVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      */
      {/* <Image src={Logo} height="100%" width="100%" alt="Logo" /> */}
      <Homepage />;
    </div>
  );
};

export default Home;
