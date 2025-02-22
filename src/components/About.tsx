import H2 from "./global/H2";
import P from "./global/P";
function About() {
  return (
    <section>
      <H2>About Me</H2>
      <P>
        Hi, I am Manali Bhavsar, a frontend developer at <b className="dark:text-white"><a href= 'https://www.tcs.com/' target='_blank'>TCS</a></b>. My journey into Computer Science started in high school when my first
        coding class ignited a strong interest. The capability of taking an idea
        and creating a complete application using only a handful of lines of
        code amazed me.
      </P>
      <br />
      <P>
        Flash forward to now — I've worked as a <b className="dark:text-white">Frontend Developer</b> for
        the last three years, specializing in <b className="dark:text-white">JavaScript, React, and
        cutting-edge web technologies</b> to design smooth, responsive user
        experiences. I live for crafting <b className="dark:text-white">clean, efficient code</b> and keeping pace
        in the constantly changing tech world.
      </P>
      <br />
      <P>
        What really motivates me is <b className="dark:text-white">designing intuitive and visually beautiful
        UIs</b> that not only look awesome but also work perfectly. My aim? To
        connect <b className="dark:text-white">performance and aesthetics</b>, making each user interaction seamless
        and exciting.
      </P>
    </section>
  );
}

export default About
