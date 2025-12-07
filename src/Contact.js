import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      className="px-6 py-16 max-w-4xl mx-auto text-center border-t border-gray-300 dark:border-gray-800"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>

      <p className="mb-10 text-gray-700 dark:text-gray-300">
        Feel free to reach out for collaborations, freelancing opportunities, or professional inquiries.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
        <a
          href="https://github.com/talhapakdil7"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition flex items-center gap-3"
        >
          <FaGithub size={28} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/talha-pakdil-157191250/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition flex items-center gap-3"
        >
          <FaLinkedin size={28} />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://www.fiverr.com/sellers/talha_pakdil/edit"
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary transition flex items-center gap-3"
        >
          <FaBriefcase size={28} />
          <span>Fiverr</span>
        </a>

        <a href="mailto:talhapakdil7@gmail.com" className="hover:text-secondary transition flex items-center gap-3">
          <FaEnvelope size={28} />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
