import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import {
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const frontend = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Tailwind CSS", level: 80 },
];

const backend = [
  { name: "PHP", level: 88 },
  { name: "MySQL", level: 90 },
];

const tools = [
  { name: "Figma", level: 90 },
  { name: "VS Code", level: 95 },
  { name: "Canva", level: 90 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#FCFCFD]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[10px] text-pink-600 font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-black mt-4">
            My Technical Skills
          </h2>

          <p className="text-gray-500 mt-5">
            Technologies and tools I use to build modern dGiigital experiences.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Frontend */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl mb-8">
              <FaCode />
            </div>

            <h3 className="text-2xl font-bold mb-8">
              Frontend
            </h3>

            {frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}

          </motion.div>

          {/* Backend */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl mb-8">
              <FaServer />
            </div>

            <h3 className="text-2xl font-bold mb-8">
              Backend
            </h3>

            {backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}

          </motion.div>

          {/* Tools */}

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >

            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-3xl mb-8">
              <FaTools />
            </div>

            <h3 className="text-2xl font-bold mb-8">
              Tools
            </h3>

            {tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
}