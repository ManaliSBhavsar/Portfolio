import { socialLinks } from "../../data/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLinks() {
    return (
        <>
            <div className="flex flex-row justify-center gap-x-2">
                {socialLinks.map((link) => (
                    <a className="flex justify-center items-center rounded-lg w-10 h-10 text-gray-800 text-lg 
              hover:bg-gray-800 hover:text-white  hover:shadow-lg 
              focus:bg-gray-800 focus:text-white  focus:shadow-lg 
              transition-all duration-300 ease-in-out"
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
