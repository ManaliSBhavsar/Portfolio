import profilePicture from '../../assets/images/Manali-Profile-Picture.jpg';
import resume from '../../assets/pdfs/ManaliBhavsar_SoftwareDeveloper_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
          <span className='rounded-2xl overflow-hidden flex shrink-0 shadow-xl'>
            <img
              src={profilePicture}
              alt='Manali Profile Picture'
              width='75'
              height='75'
            />
          </span>
        </div>
        <div className='flex flex-col gap-[5px] items-center'>
          <a href = {resume} download="ManaliBhavsar_SoftwareDeveloper_Resume.pdf" className='text-xs inline-flex items-center gap-2 px-3 py-2 w-fit text-white
           bg-gray-800 border-2 border-transparent hover:border-gray-800 hover:text-gray-800
           hover:bg-white active:border-gray-800 active:text-gray-800 active:bg-white 
           transition-colors duration-300 ease-in-out rounded-lg shadow-md font-semibold transform
           dark:text-gray-950 dark:bg-white dark:hover:border-white dark:hover:bg-gray-950
           dark:hover:text-white dark:active:border-white dark:active:bg-gray-950
           dark:active:text-white'>
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
          <Link to="/" className="text-gray-800 text-base dark:text-white"><FontAwesomeIcon icon={faArrowLeft} /><u className='ml-2'>Home</u></Link>
        </div>
      }
    </header>
  );
}

export default Header
