import H2 from "./global/H2";
import P from "./global/P";
function About() {
  return (
    <section>
      <H2>About Me</H2>
      <P>
        Hi, I am Manali Bhavsar, a Front-End developer at <b className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"><a href= 'https://www.tcs.com/' target='_blank'>TCS</a></b>. My journey into Computer Science started in high school when my first
        coding class ignited a strong interest. The capability of taking an idea
        and creating a complete application using only a handful of lines of
        code amazed me.
      </P>
      <br />
      <P>
        Flash forward to now — I've worked as a <b className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Front-End Developer</b> for
        the last three years, specializing in JavaScript, React, and
        cutting-edge web technologies to design smooth, responsive user
        experiences. I live for crafting clean, efficient code and keeping pace
        in the constantly changing tech world.
      </P>
      <br />
      <P>
        What really motivates me is <b className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">designing intuitive and visually beautiful
        UIs</b> that not only look awesome but also work perfectly. My aim? To
        connect performance and aesthetics, making each user interaction seamless
        and exciting.
      </P>
    </section>
  );
}

export default About
