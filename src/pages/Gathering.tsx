import { motion } from "framer-motion";
import bgImage from "../assets/5.png";

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
            Department of Intelligence Gathering & Analysis
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 max-w-2xl mx-auto">
            "From fragments to foresight."
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
              No strategy can succeed without accurate, timely, and contextual intelligence. In the age of hybrid and irregular warfare, India faces a spectrum of threats ranging from state-sponsored terrorism to covert economic coercion. These challenges cannot be understood through traditional intelligence collection alone—they demand a fusion of political, military, socio-cultural, and technological insights.
            </p>
            <p className="text-gray-200 mt-4 leading-relaxed text-base md:text-lg">
              The Department of Intelligence Gathering & Analysis was created to systematically track adversarial behaviour, map evolving networks, and decode patterns that shape India's security environment. By structuring intelligence around dedicated desks, CNAWS ensures depth, continuity, and expertise in analysing adversaries across multiple theatres.
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
                <strong>Anticipation, not reaction:</strong>  Proactive monitoring of threats allows India to act before adversaries exploit vulnerabilities.
              </li>
              <li>
                <strong>Theatre-specific expertise:</strong> Tailored desks focus on regional dynamics, ensuring nuanced understanding.
              </li>
              <li>
                <strong>Bridging OSINT & strategy:</strong> From near-term readiness to long-term existential shifts (AI dominance, water wars).
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
              <p>Pakistan Desk
Focus: Proxy networks, terror financing, ISI strategies.
Why: Pakistan’s hybrid warfare is India’s constant challenge.</p>
              <p>Jammu & Kashmir Desk
Focus: Radicalisation, LoC infiltration, proxy outfits.
Why: J&K is the core lab of Pakistan’s hybrid tactics.</p>
              <p>China Desk
Focus: IOR presence, BRI ports, cyber intrusions.
Why: China poses a multi-domain threat to India.</p>
<p>North East Desk (Proposed)
Focus: Insurgency revival, cross-border sanctuaries, arms trafficking.
Why: The Northeast is a key hinge of insurgency, crime, and power competition.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StrategicForesight;
