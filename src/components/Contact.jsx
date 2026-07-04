import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#FCFCFD]"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[10px] text-pink-600 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-500 mt-5">
            Have a project or opportunity? I'd love to hear from you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-500">
                    henestydeguzman@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-500">
                    +63 9458662979
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-500">
                    Salomague Norte Bugallon, Pangasinan, Philippines
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (

                <a
                  href="#"
                  key={index}
                  className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-600 hover:text-white transition flex items-center justify-center"
                >
                  <Icon />
                </a>

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-pink-500"
            ></textarea>

            <button
              className="bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
            >
              Send Message

              <FaPaperPlane />
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}