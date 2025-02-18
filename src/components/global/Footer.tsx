import { socialLinks } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import P from "./P";
import H2 from "./H2";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="mt-16 pb-16">
      <H2>Get in Touch</H2>
      <P>Looking to connect or collaborate? Feel free to reach out — I'd love to hear from you!</P>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        {socialLinks.map((link) => (
          <a className="flex justify-center items-center rounded-lg bg-gray-800 w-10 h-10 text-white text-lg border-2 border-transparent hover:border-gray-800 hover:text-gray-800 hover:bg-white focus:border-gray-800 focus:text-gray-800 focus:bg-white transition-colors duration-300 ease-in-out"
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </motion.footer>
  );
}

export default Footer
