import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "TECHNICAL SPECIALIST",
    company: "Wipro",
    date: "02/2016 - 08/2017",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "SENIOR WEB SPECIALIST",
    company: "Tech Mahindra",
    date: "12/2018 - 10/2020",
    responsibilities: [
      "At Verizon, I wrote Frontend side code, ensuring seamless integration.",
      "Apart from that I gathered reports from technical support teams and developed",
      "My role involved ensuring data accuracy",
    ],
  },
  {
    job: "Sr ANALYST, OPERATIONS",
    company: "Dell Technologies",
    date: "10/2020 - Current",
    responsibilities: [
      "Collaborated with global Order Management and VMware teams",
      "Developed and maintained front-end applications using React, Next JS ensuring high performance and responsiveness.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <>
      <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {experiences.map((experience, index) => {
          return (
            <>
              <SingleExperience key={index} experience={experience} />
              {index < 2 ? (
                <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
                </motion.div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <div className="mt-10 text-center flex flex-col items-center gap-5">
        <h3 className=" text-3xl ">My Current Role in Details</h3>
        <p>
          In my current role at Dell Technology as a Sr Analyst within
          Operations, I blend analytical precision with technical agility to
          drive impactful frontend and workflow solutions. I design responsive
          and accessible interfaces using Next.js, optimizing for performance
          and user engagement across platforms. My involvement with Power Apps
          and Power BI allows me to build interactive dashboards and business
          apps that turn complex datasets into actionable insights. I also
          leverage Automation Anywhere to streamline manual processes and
          enhance operational efficiency through intelligent RPA solutions.
          Partnering with cross-functional teams, I transform technical concepts
          into seamless experiences, continuously evolving my skillset to bridge
          frontend innovation with backend automation.
        </p>
      </div>
    </>
  );
};

export default AllExperiences;
