import { motion } from "framer-motion";
import profile from "./assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6" id="top">
      <motion.img
        src={profile}
        alt="Profile"
        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold mt-6"
      >
        Talha Pakdil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
        className="text-lg md:text-2xl mt-4 max-w-2xl text-gray-700 dark:text-gray-300"
      >
        Computer Engineer • iOS Developer • Backend Developer (.NET)
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-primary hover:bg-secondary transition text-white font-semibold"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 hover:border-secondary transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
