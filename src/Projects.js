import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/talhapakdil7/repos?sort=updated&per_page=5")
      .then((res) => setRepos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Projects</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">Here are the latest 5 projects from my GitHub repository.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-xl transition flex flex-col
                       bg-gray-100 border border-gray-200
                       dark:bg-gray-900 dark:border-gray-700 hover:border-primary hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black"
          >
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="flex-1 text-gray-700 dark:text-gray-300">{repo.description || "No description provided."}</p>
            <span className="text-xs text-gray-600 dark:text-gray-500 mt-3">
              ⭐ {repo.stargazers_count} • {repo.language || "Unknown"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
