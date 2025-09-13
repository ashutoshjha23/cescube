import { motion } from "framer-motion";
import bgImage from "../assets/3.png";

const EconomicWarfare = () => {
  return (
    <div className="relative font-sans bg-gray-900 text-gray-100 h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
        animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Department of Economic & Resource Warfare
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 max-w-2xl mx-auto">
            “When resources become weapons.”
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* Intro */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="leading-relaxed text-base md:text-lg text-gray-200">
              In today’s interconnected world, economic pressure can be as
              devastating as military strikes. Weaponised trade, energy
              coercion, currency manipulation, and supply chain disruptions are
              all being used to bend nations without firing a single bullet.
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-200 mt-4">
              India’s vulnerabilities in critical supply chains and resource
              dependencies require dedicated focus on geo-economics and
              statecraft. This department exists to track, analyse, and forecast
              how economic tools are being weaponised—and how India can defend.
            </p>
          </motion.div>

          {/* Strategic Importance */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Strategic Importance
            </h2>
            <ul className="space-y-3 text-gray-200 text-base md:text-lg list-disc list-inside">
              <li>
                <strong>Safeguarding sovereignty:</strong> Avoiding coercion
                requires awareness of debt, trade, and resource weaponisation.
              </li>
              <li>
                <strong>Securing supply chains:</strong> Semiconductors, oil,
                and other strategic goods must remain accessible.
              </li>
              <li>
                <strong>Energy = security:</strong> Control over chokepoints and
                grids is critical for resilience.
              </li>
            </ul>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Focus Areas</h2>
            <div className="space-y-3 text-gray-200 text-base md:text-lg">
              <p>• Trade Wars & Techno-Protectionism</p>
              <p>• Sanctions & Financial Isolation</p>
              <p>• Rare Earths & Strategic Minerals</p>
              <p>• Maritime Chokepoints & Energy Security</p>
              <p>• Food & Water as Coercion Tools</p>
              <p>• Energy Infrastructure & Grid Warfare</p>
              <p>• Currency Manipulation</p>
              <p>• Debt Diplomacy & Predatory Projects</p>
              <p>• Export Controls & Strategic Denial</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EconomicWarfare;
