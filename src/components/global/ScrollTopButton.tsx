import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div title='Scroll to Top'>
      {isVisible && 
        <div onClick={scrollToTop} className='fixed bottom-6 right-6 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center 
        hover:bg-gray-900 cursor-pointer z-1 dark:bg-white/80 dark:text-gray-800 dark:hover:bg-white'>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      }
    </div>
  );
}

export default ScrollTopButton
