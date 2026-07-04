import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  demo,
  github,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: .3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg group"
    >
      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover group-hover:scale-110 duration-500"
        />

      </div>

      {/* Content */}

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 leading-7 mt-4">
          {description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-6">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">


          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 border border-pink-600 rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-pink-50"
          >
            <FaGithub />

            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}