import profilePicture from '../../assets/images/Manali-Profile-Picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import P from './P';
import SocialLinks from './SocialLinks';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header className='header pt-12'>
      {
      location.pathname === "/" && <div className='flex flex-col items-baseline gap-[15px] md:flex-row md:gap-0 md:justify-between'>
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
        <div className='flex flex-col gap-[5px] items-center'>
          <a href='#' className='text-xs inline-flex items-center gap-2 px-3 py-2 w-fit text-white bg-gray-800 border-2 border-transparent hover:border-gray-800 hover:text-gray-800 hover:bg-white focus:border-gray-800 focus:text-gray-800 focus:bg-white transition-colors duration-300 ease-in-out rounded-lg shadow-md font-semibold transform'>
            Download Resume
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <SocialLinks />
        </div>
      </div>
      }
      {
        location.pathname === "/projects" && 
        <div className='mb-4'>
          <Link to="/" className="text-gray-800 text-base"><u>Home</u></Link>
        </div>
      }
    </header>
  );
}

export default Header
