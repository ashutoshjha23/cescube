import { useState, useEffect } from "react";
import bgImage from "../assets/1.png";

const IntelligenceGathering = () => {
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
          alt="Intelligence Gathering & Analysis"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Intelligence Gathering & Analysis
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            "From fragments to foresight."
          </p>
        </div>

        {/* Why this department was established */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why this department was established
          </h2>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">
            No strategy can succeed without accurate, timely, and contextual intelligence. In the age of hybrid and irregular warfare, India faces a spectrum of threats ranging from state-sponsored terrorism to covert economic coercion. These challenges cannot be understood through traditional intelligence collection alone—they demand a fusion of political, military, socio-cultural, and technological insights.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            The Department of Intelligence Gathering & Analysis was created to systematically track adversarial behaviour, map evolving networks, and decode patterns that shape India's security environment. By structuring intelligence around dedicated desks, CNAWS ensures depth, continuity, and expertise in analysing adversaries across multiple theatres.
          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><strong>Anticipation, not reaction:</strong> Proactive monitoring of threats allows India to act before adversaries exploit vulnerabilities.</li>
            <li><strong>Theatre-specific expertise:</strong> Tailored desks focus on regional dynamics, ensuring nuanced understanding.</li>
            <li><strong>Bridging OSINT & strategy:</strong> Turning fragmented data into actionable insights for policy and operational communities.</li>
          </ul>
        </div>

        {/* Intelligence Desks */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Intelligence Desks
          </h2>
          
          <div className="space-y-8">
            {/* Pakistan Desk */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                Pakistan Desk
              </h3>
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Focus:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Political–military trends, proxy warfare infrastructure, terror financing, and the evolving strategies of ISI-backed networks.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why it matters:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pakistan's hybrid warfare posture remains India's most persistent challenge, requiring constant vigilance and narrative countering.
                </p>
              </div>
            </div>

            {/* Jammu & Kashmir Desk */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                Jammu & Kashmir Desk
              </h3>
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Focus:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Radicalisation pipelines, infiltration patterns across LoC, proxy outfit dynamics (TRF, PAFF, KT), and shifts in terrorism.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why it matters:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  J&K remains the laboratory of Pakistan's hybrid strategies; real-time analysis here defines broader counter-terror success.
                </p>
              </div>
            </div>

            {/* China Desk */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">
                China Desk
              </h3>
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Focus:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Maritime activities in IOR, PLA Navy deployments, BRI-linked strategic investments, dual-use port infrastructure, and cyber–tech intrusions.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why it matters:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  China's rise poses a multi-domain challenge to India, from Himalayan borders to maritime chokepoints.
                </p>
              </div>
            </div>

            {/* North East Desk */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                North East Desk <span className="text-sm font-normal text-gray-600 dark:text-gray-400">(Proposed)</span>
              </h3>
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Focus:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Insurgency revival trends, cross-border sanctuaries, arms trafficking, and border management with Myanmar–Bangladesh.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Why it matters:</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The Northeast is a geopolitical hinge where domestic insurgency, transnational crime, and great power competition converge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligenceGathering;
