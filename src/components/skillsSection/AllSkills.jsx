import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { MdDashboardCustomize } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "RPA",
    icon: FaRobot,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },

  {
    skill: "Power BI",
    icon: MdDashboardCustomize, // Using Next.js icon as a placeholder for Framer Motion
  },
  {
    skill: "Git & GitHub",
    icon: FaGithub, // Using React icon as a placeholder for Git & GitHub
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              className="text-center"
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              {/* <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              /> */}
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon className="text-6xl text-orange" />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
