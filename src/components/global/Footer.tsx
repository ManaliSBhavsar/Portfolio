import P from "./P";
import H2 from "./H2";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <motion.footer
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="mt-16 pb-16">
      <H2>Get in Touch</H2>
      <P>Looking to connect or collaborate? Feel free to reach out — I'd love to hear from you!</P>
      <div className="mt-4">
        <SocialLinks />
      </div>
    </motion.footer>
  );
}

export default Footer
