import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const contactLinkClass =
  "flex flex-col sm:flex-row items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 " +
  "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-sm " +
  "hover:text-primary hover:border-primary hover:bg-gray-200/80 dark:hover:bg-gray-800 " +
  "hover:scale-[1.03] hover:shadow-md transition-all duration-200 " +
  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black";

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

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <a
          href="https://github.com/talhapakdil7"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
          aria-label="GitHub profile"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0">
            <FaGithub size={18} />
          </span>
          <span className="font-medium">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/talha-pakdil-157191250/"
          target="_blank"
          rel="noreferrer"
          className={contactLinkClass}
          aria-label="LinkedIn profile"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0">
            <FaLinkedin size={18} />
          </span>
          <span className="font-medium">LinkedIn</span>
        </a>

        <a
          href="mailto:talhapakdil7@gmail.com"
          className={contactLinkClass}
          aria-label="Send email"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0">
            <FaEnvelope size={18} />
          </span>
          <span className="font-medium">Email</span>
        </a>
      </div>
    </section>
  );
}
