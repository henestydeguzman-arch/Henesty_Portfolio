import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FCFCFD]"
    >
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-100 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-pink-100 px-5 py-2 text-pink-600 font-medium mb-8">
            👋 Welcome to my Portfolio
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-2xl font-black leading-tight text-gray-700">
            Hi, I'm
            <span className="block md:text-5xl text-pink-600">
              Henesty De Guzman
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700">
            BS Information Technology 
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 leading-8 max-w-xl">
            I design and develop clean, modern, and user-friendly digital
            experiences. I enjoy creating websites, systems, and digital
            products that make everyday tasks easier and more efficient.
          </p>

         {/* Buttons */}
<div className="mt-10 flex flex-wrap items-center gap-6">

  <Link
    to="projects"
    smooth={true}
    duration={600}
    offset={-70}
    className="inline-flex items-center gap-3 rounded-xl bg-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-pink-700 cursor-pointer"
  >
    View Projects
    <FaArrowRight />
  </Link>

  <a
    href="/pdf/Curriculum Vitae.pdf"
    download
    className="inline-flex items-center gap-3 rounded-xl border-2 border-pink-600 px-8 py-4 font-semibold text-pink-600 transition duration-300 hover:bg-pink-50"
  >
    Download CV
    <FaDownload />
  </a>

</div>
          {/* Social */}
         {/* Social */}
<div className="flex gap-5 mt-10">

  <a
    href="https://github.com/henestydeguzman-arch"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-pink-600 hover:text-white transition flex items-center justify-center text-lg"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/henesty-de-guzman-8a4949381/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-pink-600 hover:text-white transition flex items-center justify-center text-lg"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.facebook.com/Henesty.deguzman.3998"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-pink-600 hover:text-white transition flex items-center justify-center text-lg"
  >
    <FaFacebookF />
  </a>

  

</div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Circle */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-pink-100"></div>

          {/* Image */}
          <img
            src="/images/myResumePic.png"
            alt="Profile"
            className="relative z-10 w-[350px] md:w-[300px] object-cover"
          />

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-12 -left-6 bg-white rounded-2xl shadow-xl p-6 z-20"
          >
            <h3 className="font-bold text-2xl text-gray-900 text-center">3</h3>
            <p className="text-gray-500">
              Completed Projects
            </p>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-20 -right-6 bg-white rounded-2xl shadow-xl p-6 z-20"
          >
            <h3 className="font-bold text-2xl text-pink-600">
              UI / UX
            </h3>
            <p className="text-gray-500">
              Passionate Designer
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="w-7 h-12 border-2 border-pink-600 rounded-full flex justify-center"
        >
          <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
}