import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const contactLinkClass =
  "flex flex-col items-center justify-center gap-2 group " +
  "text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200 " +
  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black rounded-full";

const iconWrapClass =
  "flex items-center justify-center w-12 h-12 rounded-full " +
  "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 " +
  "group-hover:bg-primary/20 group-hover:border-2 group-hover:border-primary " +
  "border-2 border-transparent transition-all duration-200 group-hover:scale-110";

export default function Contact() {
  return (
    <section
      className="px-6 py-20 max-w-4xl mx-auto text-center border-t border-gray-200 dark:border-gray-800"
      id="contact"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>

      <p className="mb-10 text-gray-700 dark:text-gray-300">
        Feel free to reach out for collaborations, freelancing opportunities, or professional inquiries.
      </p>

      <div className="flex flex-row justify-center items-center gap-8 sm:gap-10">
        <a
          href="https://github.com/talhapakdil7"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
          aria-label="GitHub profile"
        >
          <span className={iconWrapClass}>
            <FaGithub size={22} />
          </span>
          <span className="text-xs font-medium">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/talha-pakdil-157191250/"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
          aria-label="LinkedIn profile"
        >
          <span className={iconWrapClass}>
            <FaLinkedin size={22} />
          </span>
          <span className="text-xs font-medium">LinkedIn</span>
        </a>

        <a
          href="mailto:talhapakdil7@gmail.com"
          className={contactLinkClass}
          aria-label="Send email"
        >
          <span className={iconWrapClass}>
            <FaEnvelope size={22} />
          </span>
          <span className="text-xs font-medium">Email</span>
        </a>
      </div>
    </section>
  );
}
