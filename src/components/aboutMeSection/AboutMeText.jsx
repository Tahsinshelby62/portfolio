import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Md Tahsin, a Senior Front-End Developer with over seven years of
        experience. I specialize in React, Next.js, TypeScript, and Tailwind CSS
        to craft elegant, responsive interfaces. My background as a Web Analyst
        gives me a sharp edge in problem-solving and cross-team communication.
        I’ve built scalable platforms, engaging games, and real-time full-stack
        applications. Certified in Agile, Generative AI, and modern development
        — always evolving with the tech landscape. I’m passionate about
        combining creativity with code to deliver user-first digital
        experiences.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
