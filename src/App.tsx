import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Scroll from './hooks/Scroll';
import ScrollTopButton from './components/global/ScrollTopButton';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  )
}

const Layout = () => {
  const location = useLocation();
  const showScrollTopBtn = ["/", "/projects"].includes(location.pathname);
  return (
    <>
      <Scroll />
      {showScrollTopBtn && <ScrollTopButton />}
      <motion.div
        key={location.pathname} // Ensures animation on route change
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </motion.div>
    </>
  );
};

export default App
