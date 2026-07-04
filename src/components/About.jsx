import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
  },
  {
    icon: <FaDatabase />,
    title: "System Development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
  },
];

const stats = [
  {
    number: "3",
    title: "Projects",
  },
  {
    number: "2+",
    title: "Years Learning",
  },
  {
    number: "3",
    title: "Digital Products",
  },
  {
    number: "100%",
    title: "Passion",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-pink-600 font-semibold uppercase tracking-[10px]">
            About Me
          </p>

          <h2 className="text-5xl font-black mt-4">
            Get to Know Me
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
            I'm passionate about creating clean, modern, and user-friendly
            digital experiences.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[320px] h-[420px] bg-pink-100 rounded-[40px] rotate-6"></div>

            <img
              src="/images/myResumePic.png"
              alt="Profile"
              className="relative z-10 w-[320px] md:w-[360px] rounded-[40px] shadow-2xl object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold">
             BS Information Technology
            </h3>

            <p className="text-gray-500 leading-8 mt-6 max-w-xl mx-auto">
              I enjoy building modern websites, developing software solutions,
              and creating digital products that make people's lives easier.

              <br />
              <br />

              My goal is to continuously improve my technical skills while
              delivering high-quality work with clean code and beautiful,
              user-friendly designs.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="bg-pink-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg"
                >
                  <div className="text-pink-600 text-3xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-pink-50 rounded-3xl p-10 text-center shadow-sm hover:shadow-xl transition"
            >
              <h2 className="text-5xl font-black text-pink-600">
                {item.number}
              </h2>

              <p className="text-gray-500 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}