import { useState, useEffect } from "react";
import bgImage from "../assets/4.png";

const StrategicForesight = () => {
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
          alt="Strategic Foresight & Scenario Planning"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Strategic Foresight & Scenario Planning
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            “Forewarned is forearmed.”
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            In a world defined by uncertainty, strategic foresight is the ultimate shield. Whether it’s a sudden border flare-up, a cyber blackout, or a global pandemic, the element of surprise can devastate national readiness. Traditional intelligence often tells us what is—foresight tells us what could be.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
            India must pre-empt—not just react. This department was created to equip national security thinkers with the ability to game out future scenarios, test assumptions through simulations, and visualise both opportunities and risks across all domains—land, sea, air, cyber, space, and cognitive.

          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><strong>Anticipating the next war, not the last:</strong> Scenario thinking breaks the trap of historical assumptions.</li>
            <li><strong>Avoiding strategic surprise:</strong> Red-teaming and wild card analysis can highlight blind spots before adversaries exploit them.</li>
            <li><strong>Planning across time horizons:</strong> From near-term readiness to long-term existential shifts (AI dominance, water wars).</li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              { title: "Wargaming (Conventional & Hybrid Scenarios)" },
              { title: "Strategic Red-Teaming and Opponent Emulation" },
              { title: "Technological Forecasting and Impact Analysis" },
              { title: "Black Swan Events and Strategic Shocks" },
              { title: "Multi-Domain Simulations (cyber, cognitive, kinetic)" },
              { title: "Scenario Planning for Geo-Political Disruption" },
              { title: "Risk Matrix Modelling and Early Warning Signals" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicForesight;
