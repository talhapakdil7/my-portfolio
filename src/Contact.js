import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const iconLinkClass =
  "flex items-center justify-center w-12 h-12 rounded-full shrink-0 " +
  "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 " +
  "hover:bg-primary/20 hover:border-2 hover:border-primary " +
  "border-2 border-transparent transition-all duration-200 hover:scale-110 " +
  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black";

const itemWrapClass = "flex flex-col items-center justify-center gap-2 group";

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
        <div className={itemWrapClass}>
          <a
            href="https://github.com/talhapakdil7"
            target="_blank"
            rel="noreferrer"
            className={iconLinkClass}
            aria-label="GitHub profile"
          >
            <FaGithub size={22} />
          </a>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
            GitHub
          </span>
        </div>

        <div className={itemWrapClass}>
          <a
            href="https://www.linkedin.com/in/talha-pakdil-157191250/"
            target="_blank"
            rel="noreferrer"
            className={iconLinkClass}
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={22} />
          </a>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
            LinkedIn
          </span>
        </div>

        <div className={itemWrapClass}>
          <a
            href="mailto:talhapakdil7@gmail.com"
            className={iconLinkClass}
            aria-label="Send email"
          >
            <FaEnvelope size={22} />
          </a>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">
            Email
          </span>
        </div>
      </div>
    </section>
  );
}
