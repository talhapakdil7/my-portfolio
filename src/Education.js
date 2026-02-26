export default function Education() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800" id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>

      <div className="p-5 rounded-xl border bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700 mb-6 transition hover:scale-[1.02] hover:shadow-lg">
        <h3 className="text-2xl font-semibold">Suleyman Demirel University</h3>
        <p className="mt-1 text-gray-700 dark:text-gray-300">
          Bachelor’s Degree in Computer Engineering • Sep 2022 – Jun 2026
        </p>
      </div>

      <div className="p-5 rounded-xl border bg-gray-100 border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition hover:scale-[1.02] hover:shadow-lg">
        <h3 className="text-xl font-semibold">Iraz Duriye Duran Anatolian High School</h3>
        <p className="mt-1 text-gray-700 dark:text-gray-300">Sep 2017 – Jun 2021</p>
      </div>
    </section>
  );
}
