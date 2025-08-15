import { useState, useEffect } from "react";
import bgImage from "../assets/3.png";

const EconomicWarfare = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <div className="relative font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Full-length background image */}
      <div
        className="w-full overflow-hidden"
        style={{
          opacity: imageOpacity,
          transition: "opacity 0.2s linear",
        }}
      >
        <img
          src={bgImage}
          alt="Economic & Resource Warfare"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Economic & Resource Warfare
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            “When resources become weapons.”
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            In today’s interconnected world, economic pressure can be as devastating as military strikes. Weaponised trade, energy coercion, currency manipulation, and supply chain disruptions are all being used to bend nations without firing a single bullet. China’s control over rare earths, Russia’s use of energy as leverage, and global sanctions regimes have shown how economic power is central to modern warfare.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
            India’s strategic competition with China, its economic vulnerabilities in critical supply chains, and the need to safeguard access to rare resources require a dedicated focus on geo-economics and economic statecraft. This department exists to track, analyse, and forecast how economic tools are being used as instruments of national power—and how India can defend against them.
          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><strong>Safeguarding sovereignty:</strong> Avoiding economic coercion requires awareness of how debt, trade, and resources are weaponised.</li>
            <li><strong>Securing supply chains:</strong> From semiconductors to oil, strategic goods must remain accessible even during conflict.</li>
            <li><strong>Energy security equals national security:</strong> Control over chokepoints and grid protection is critical for war resilience.</li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              "Trade Wars, Techno-Protectionism & Tariffs",
              "Sanctions, Embargoes & Financial Isolation",
              "Rare Earths, Lithium & Strategic Mineral Access",
              "Maritime Chokepoints & Energy Transit Security",
              "Food & Water as Tools of Coercion",
              "Energy Infrastructure & Grid Warfare",
              "Currency Manipulation and Fiscal Weapons",
              "Debt Diplomacy & Predatory Infrastructure Projects",
              "Export Controls & Strategic Denial Technologies",
            ].map((title, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicWarfare;
