import { motion } from "framer-motion";
import bgImage from "../assets/2.png";

const EmergingTech2 = () => {
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
            Department of Disruptive and Emerging Technologies
          </h1>
          <p className="text-lg md:text-xl italic text-gray-300 max-w-2xl mx-auto">
            “Weaponising the future. Securing the present.”
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
              The future battlefield is already here. Wars will no longer be
              fought only with tanks and aircraft, but with algorithms, drones,
              hypersonic missiles, and artificial intelligence. Technological
              disruption is now the primary driver of strategic advantage.
            </p>
            <p className="leading-relaxed text-base md:text-lg text-gray-200 mt-4">
              India cannot afford to play catch-up. China’s civil-military
              fusion, Pakistan’s drone drops, and the West’s AI-powered
              targeting systems show that tech supremacy will define military
              supremacy.
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
                <strong>Staying ahead of adversaries:</strong> The next war may
                be decided by code, not combat.
              </li>
              <li>
                <strong>Techno-strategic autonomy:</strong> Indigenous
                development ensures sovereign defence capability.
              </li>
              <li>
                <strong>Dual-use vigilance:</strong> Biotech & quantum can help
                or harm, depending on who controls them.
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
              <p>• AI & ML in Defence Systems</p>
              <p>• Quantum Computing (Offensive & Defensive)</p>
              <p>• Drone Warfare and Swarm Robotics</p>
              <p>• Directed Energy & Hypersonic Weapons</p>
              <p>• 3D Printing & Additive Manufacturing</p>
              <p>• Nanotechnology in Surveillance & Biowarfare</p>
              <p>• Cyber-Physical Infrastructure Security</p>
              <p>• Biotechnology and Genetic Warfare</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmergingTech2;
