import { motion } from "framer-motion";
import bgImage from "../assets/1.png";

const Disruptive = () => {
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
            Department of Hybrid Warfare & Irregular Conflict
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Understanding the shadows of modern warfare.
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
            <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              In recent decades, the nature of warfare has shifted dramatically.
              States are increasingly confronted not by conventional armies, but
              by irregular forces—terrorist outfits, guerrilla groups, cyber
              militias, and proxy actors backed by hostile powers.
            </p>
            <p className="text-gray-200 mt-4 leading-relaxed text-base md:text-lg">
              India, in particular, has been the target of such warfare—proxy
              terror in Kashmir, cross-border insurgencies in the Northeast, and
              psychological operations targeting its diverse society. The
              traditional war-peace binary no longer applies.
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
                <strong>Deterrence begins with understanding:</strong> Knowing
                how hybrid actors operate helps neutralise them before they
                strike.
              </li>
              <li>
                <strong>Shaping narratives:</strong> Countering propaganda and
                perception warfare is as crucial as winning battles.
              </li>
              <li>
                <strong>Mapping grey zone tactics:</strong> From sleeper cells
                to fake NGOs, adversaries employ a full spectrum of irregular
                tools.
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
              <p>• Terrorism and Counter-Terrorism</p>
              <p>• Proxy Warfare and Guerrilla Insurgencies</p>
              <p>• False Flag Operations & Narrative War</p>
              <p>• Crime-Terror Nexus & Shadow Economies</p>
              <p>• Financing Channels of Hybrid Groups</p>
              <p>• Borderland Destabilisation & Radicalisation</p>
              <p>• Psychological Operations & Info-War</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Disruptive;
