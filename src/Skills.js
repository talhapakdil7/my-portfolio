const skillGroups = [
  {
    title: "Mobile & iOS Development",
    skills: ["Swift", "SwiftUI", "iOS Frameworks", "Xcode", "UIKit", "Firebase", "MVVM"],
  },
  {
    title: "Backend Development",
    skills: ["C#", "ASP.NET Core MVC", "REST Services", "Web API", "ORM - Entity Framework"],
  },
  {
    title: "Database & Tools",
    skills: ["SQL Server", "MySQL", "SQLite", "Postman", "Swagger"],
  },
  {
    title: "Frontend & Web",
    skills: ["HTML", "CSS", "Bootstrap", "React JS"],
  },
  {
    title: "Tools & Other",
    skills: ["Git & GitHub", "Excel", "Word", "PowerPoint"],
  },
  {
    title: "🤖Additional Technical Areas",
    skills: [
      "Python (NumPy, Pandas, Matplotlib)",
      "Machine Learning",
      "Apache Spark MLlib",
      "Time Basic Linux / Terminal Commands",
    ],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        These are the main technologies and tools I use in mobile development, backend engineering, and full-stack
        application development.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="p-5 rounded-xl border bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-200 text-sm text-gray-800
                             dark:bg-gray-800 dark:text-gray-200"
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
