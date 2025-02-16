import profilePicture from '../../assets/images/Manali-Profile-Picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import P from './P';
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className='header mb-16 pt-16'>
      <div className='flex gap-8 items-center mb-8'>
        <span className='rounded-full overflow-hidden flex shrink-0 shadow-xl'>
          <img
            src={profilePicture}
            alt='Manali Profile Picture'
            width='75'
            height='75'
          />
        </span>
        <div>
          <h1 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white'>Hi, I'm Manali Bhavsar</h1>
          <P>Frontend Developer</P>
        </div>
      </div>
      <div className='flex flex-col gap-[15px] items-center'>
        <P>
          🚀
          Crafting responsive and visually engaging web
          applications
        </P>
        <a href='#' className='text-sm inline-flex items-center gap-2 px-6 py-3 w-fit text-white bg-gray-800 border-2 border-transparent hover:border-gray-800 hover:text-gray-800 hover:bg-white focus:border-gray-800 focus:text-gray-800 focus:bg-white transition-colors duration-300 ease-in-out rounded-lg shadow-md font-semibold transform'>
          Download Resume
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </motion.header>
  );
}

export default Header
