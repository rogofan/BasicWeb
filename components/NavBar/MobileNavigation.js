import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import Image from "next/image";
import Logo from "../../public/logoArtmode.webp";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { useRouter } from "next/router";

function MobileNavigation() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const GoMenu = () => {
    router.push("/");
  };

  const HamburgerIcon = (
    <AiOutlineMenu
      className={style.Hamburger}
      color="white"
      size="40px"
      onClick={toggleMenu}
    />
  );

  const CloseHamburgerIcon = (
    <AiOutlineClose
      className={style.Hamburger}
      color="white"
      size="40px"
      onClick={toggleMenu}
    />
  );
  //zavře mobile navigation afterClick
  const CloseMobileMenu = () => setMenuOpen(false);

  return (
    <nav className={style.MobileNavigation}>
      <Image src={Logo} alt="Logo" className={style.Logo} onClick={GoMenu} />

      {menuOpen ? CloseHamburgerIcon : HamburgerIcon}
      {menuOpen && (
        <NavLinks isMobile={true} onCloseMobileMenu={CloseMobileMenu} />
      )}
    </nav>
  );
}

export default MobileNavigation;
