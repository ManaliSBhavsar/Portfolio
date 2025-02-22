import profilePicture from '../../assets/images/Manali-Profile-Picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import P from './P';
import { motion } from "framer-motion";
import SocialLinks from './SocialLinks';

function Header() {
  return (
    <motion.header
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className='header mb-12 pt-16'>
      <div className='flex flex-col items-start gap-[15px] md:flex-row md:gap-0 md:items-center md:justify-between'>
        <div className='flex gap-8 items-center'>
          <div>
            <h1 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-white'>Manali Bhavsar</h1>
            <P>Frontend Developer</P>
          </div>
          <span className='rounded-full overflow-hidden flex shrink-0 shadow-xl'>
            <img
              src={profilePicture}
              alt='Manali Profile Picture'
              width='75'
              height='75'
            />
          </span>
        </div>
        <div className='flex flex-col gap-[10px] items-center'>
          <a href='#' className='text-xs inline-flex items-center gap-2 px-3 py-2 w-fit text-white bg-gray-800 border-2 border-transparent hover:border-gray-800 hover:text-gray-800 hover:bg-white focus:border-gray-800 focus:text-gray-800 focus:bg-white transition-colors duration-300 ease-in-out rounded-lg shadow-md font-semibold transform'>
            Download Resume
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <SocialLinks />
        </div>
      </div>
    </motion.header>
  );
}

export default Header
