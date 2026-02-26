const skillGroups = [
  {
    title: "Mobile & iOS",
    skills: ["iOS", "Swift", "SwiftUI", "UIKit", "Xcode", "Alamofire", "CoreData"],
  },
  {
    title: "Backend & APIs",
    skills: ["C#", "ASP.NET Core MVC", "Rest Services", "FastAPI", "Python"],
  },
  {
    title: "Frontend & Web",
    skills: ["HTML/CSS", "Bootstrap"],
  },
  {
    title: "Database & Services",
    skills: ["SQL Server", "MySQL", "SQLite", "Firebase"],
  },
  {
    title: "Tools & Other",
    skills: ["Postman/Swagger", "Git & GitHub", "Excel/Word/PowerPoint", "AI Integration"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        These are the main technologies and tools I use in mobile development, backend engineering, and full-stack
        application development.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-5 rounded-xl border bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700
            transition hover:scale-[1.02] hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-200 text-sm text-gray-800 border border-transparent
                             dark:bg-gray-800 dark:text-gray-200
                             hover:bg-primary/20 hover:border-primary dark:hover:bg-primary/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
