import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 -top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black">
              <span className="text-pink-500">H</span>D
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Passionate about building clean, responsive, and modern digital
              experiences through web development and UI/UX design.
            </p>
          </div>

          {/* Social */}
          <div className="lg:text-right">

            <h3 className="mb-6 text-2xl font-bold">
              Connect With Me
            </h3>

            <div className="flex gap-5 lg:justify-end">

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <FaFacebookF />
              </a>

          

            </div>

            <p className="mt-8 text-gray-400">
              Available for freelance projects, internships, and collaborations.
            </p>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-center text-gray-400 md:text-left">
            © {year} Henesty De Guzman. All rights reserved.
          </p>

          <p className="text-center text-gray-400">
            Designed &amp; Developed with React &amp; Tailwind CSS
          </p>

        </div>

      </div>

      {/* Back To Top */}
      <Link
        to="home"
        smooth={true}
        duration={600}
        className="absolute bottom-8 right-8 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-pink-600 shadow-xl transition hover:bg-pink-700"
      >
        <FaArrowUp />
      </Link>

    </footer>
  );
}