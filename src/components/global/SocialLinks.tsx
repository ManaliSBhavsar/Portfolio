import { socialLinks } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLinks() {
  return (
    <>
      <div className="flex flex-row justify-center gap-x-2">
        {socialLinks.map((link) => (
          <a
            className="flex justify-center items-center rounded-full w-8 h-8 text-gray-800 text-lg
            hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800
            focus:text-white focus:shadow-lg transition-all duration-300 ease-in-out
            dark:text-white dark:hover:bg-white dark:hover:text-gray-900
            dark:focus:bg-white dark:focus:text-gray-900"
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social Media Link"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </>
  );
}

export default SocialLinks
