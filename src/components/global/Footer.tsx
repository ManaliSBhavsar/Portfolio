import P from "./P";
import H2 from "./H2";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="mt-16 pb-16">
      <H2>Get in Touch</H2>
      <P>Looking to connect or collaborate? Feel free to reach out — I'd love to hear from you!</P>
      <div className="mt-4">
        <SocialLinks />
      </div>
    </footer>
  );
}

export default Footer
