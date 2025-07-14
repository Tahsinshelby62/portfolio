import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Travel App",
    year: "Mar-2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://stately-melba-d9b6b1.netlify.app/",
  },
  {
    name: "React Job App",
    year: "Sept-2024",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://github.com/Tahsinshelby62/React-Job-Website",
  },
  {
    name: "Dice Game",
    year: "2025",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://github.com/Tahsinshelby62/diceGame",
  },
  {
    name: "Know Me App",
    year: "June 2025",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://huggingface.co/spaces/tsay007/career_conversations2",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
