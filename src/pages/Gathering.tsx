import { motion } from "framer-motion";
import bgImage from "../assets/4.png";

const StrategicForesight = () => {
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
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Department of Strategic Foresight & Scenario Planning
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 max-w-2xl mx-auto">
            “Forewarned is forearmed.”
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
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              In a world defined by uncertainty, strategic foresight is the ultimate shield. Whether it’s a sudden border flare-up, a cyber blackout, or a global pandemic, the element of surprise can devastate national readiness. Traditional intelligence often tells us what is—foresight tells us what could be.
            </p>
            <p className="text-gray-200 mt-4 leading-relaxed text-base md:text-lg">
              India must pre-empt—not just react. This department was created to equip national security thinkers with the ability to game out future scenarios, test assumptions through simulations, and visualise both opportunities and risks across all domains—land, sea, air, cyber, space, and cognitive.
            </p>
          </motion.div>

          {/* Strategic Importance */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              Strategic Importance
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-200 text-base md:text-lg">
              <li>
                <strong>Anticipating the next war, not the last:</strong> Scenario thinking breaks the trap of historical assumptions.
              </li>
              <li>
                <strong>Avoiding strategic surprise:</strong> Red-teaming and wild card analysis can highlight blind spots before adversaries exploit them.
              </li>
              <li>
                <strong>Planning across time horizons:</strong> From near-term readiness to long-term existential shifts (AI dominance, water wars).
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
              <p>• Wargaming (Conventional & Hybrid Scenarios)</p>
              <p>• Strategic Red-Teaming and Opponent Emulation</p>
              <p>• Technological Forecasting and Impact Analysis</p>
              <p>• Black Swan Events and Strategic Shocks</p>
              <p>• Multi-Domain Simulations (cyber, cognitive, kinetic)</p>
              <p>• Scenario Planning for Geo-Political Disruption</p>
              <p>• Risk Matrix Modelling and Early Warning Signals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrategicForesight;
