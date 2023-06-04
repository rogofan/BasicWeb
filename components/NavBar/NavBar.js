import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import style from "./NavBar.module.css";

const Header = () => {
  return (
    <div>
      <div className={style.NavBar}>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Header;
