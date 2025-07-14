import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative h-full flex items-center justify-center"
    >
      <div className="relative z-10">
        <img
          src="/images/HexaPic.png"
          alt="Md Tahsin"
          className="w-[300px] h-[400px] object-cover clip-hexagon shadow-xl border-4 border-white"
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center z-0 animate-pulse">
        <PiHexagonThin className="h-[350px] w-auto text-cyan-500 blur-sm animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
