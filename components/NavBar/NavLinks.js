import Link from "next/link";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/">Home</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/services">Služby</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/kontakt">Kontakt</Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
