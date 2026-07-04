import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/images/GoldenLion.png",
    title: "Hotel Reservation System",
    description:
      "A modern hotel reservation system with room booking, admin dashboard, and secure reservation management.",
    technologies: ["Figma"],
    github: "https://github.com/yourusername",
  },
  {
    image: "/images/SnackHub.png",
    title: "Snackhub",
    description:
      "A Web-Based Platform for Bread and Pastry Sellers",
    technologies: ["Bootsrap", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/yourusername",
  },
  {
    image: "/images/AniMill.png",
    title: "AniMill",
    description:
      "RiceMill Booking and Management System",
    technologies: ["Flutter", "Dart", "PHP" ,"MySQL"],
    github: "https://github.com/yourusername",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[10px] text-pink-600 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-black mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-5">
            Here are some of my recent works and personal projects.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <ProjectCard
              key={project.title}
              {...project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}