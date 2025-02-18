import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col gap-12">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </motion.main>
  );
}

export default Main
