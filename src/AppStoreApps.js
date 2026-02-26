import { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa6";

// Add your App Store apps here. Copy an object to add another app.
const appStoreApps = [
  {
    name: "Subix - Subscription Tracker",
    description: "Track all your subscriptions in one place. Monitor monthly and yearly expenses, never miss a payment. A simple, powerful, and modern subscription tracker.",
    appStoreUrl: "https://apps.apple.com/tr/app/subix-subscription-tracker/id6759579731",
    iconUrl: null, // optional: set a URL to override; otherwise icon is fetched from App Store
  },
];

function getAppId(appStoreUrl) {
  const match = appStoreUrl && appStoreUrl.match(/id(\d+)/);
  return match ? match[1] : null;
}

export default function AppStoreApps() {
  const [iconUrls, setIconUrls] = useState({});

  useEffect(() => {
    const apps = appStoreApps.filter((app) => app.appStoreUrl && !app.appStoreUrl.includes("idXXXXXXXXX"));
    apps.forEach((app) => {
      if (app.iconUrl) return;
      const appId = getAppId(app.appStoreUrl);
      if (!appId) return;
      fetch(`https://itunes.apple.com/lookup?id=${appId}`)
        .then((res) => res.json())
        .then((data) => {
          const url = data?.results?.[0]?.artworkUrl100 || data?.results?.[0]?.artworkUrl512;
          if (url) {
            const highRes = url.replace(/100x100bb|60x60bb|512x512bb/, "512x512bb");
            setIconUrls((prev) => ({ ...prev, [app.name]: highRes }));
          }
        })
        .catch(() => {});
    });
  }, []);

  const apps = appStoreApps.filter((app) => app.appStoreUrl && !app.appStoreUrl.includes("idXXXXXXXXX"));
  if (apps.length === 0) return null;

  return (
    <section id="app-store" className="px-6 py-20 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">App Store</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        My apps published on the App Store.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {apps.map((app) => {
          const iconUrl = app.iconUrl || iconUrls[app.name];
          return (
            <a
              key={app.name}
              href={app.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-xl transition flex flex-col sm:flex-row sm:items-start gap-4
                         bg-gray-100 border border-gray-200
                         dark:bg-gray-900 dark:border-gray-700 hover:border-primary hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-black"
            >
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt=""
                  className="w-16 h-16 rounded-xl flex-shrink-0 object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <FaApple className="text-2xl text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{app.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
                  View on App Store →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
