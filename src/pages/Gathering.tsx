import { useState, useEffect } from "react";
import bgImage from "../assets/5.png";

const Gathering = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <div className="relative font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Background image with fade */}
      <div
        className="w-full overflow-hidden"
        style={{ opacity: imageOpacity, transition: "opacity 0.2s linear" }}
      >
        <img
          src={bgImage}
          alt="Intelligence Gathering"
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Intelligence Gathering & Analysis
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            “From fragments to foresight.”
          </p>
        </div>

        {/* Why established */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why this department was established
          </h2>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-4">
            No strategy can succeed without accurate, timely, and contextual
            intelligence. In the age of hybrid and irregular warfare, India
            faces a spectrum of threats ranging from state-sponsored terrorism
            to covert economic coercion. These challenges cannot be understood
            through traditional intelligence collection alone—they demand a
            fusion of political, military, socio-cultural, and technological
            insights.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            The Department of Intelligence Gathering & Analysis was created to
            systematically track adversarial behaviour, map evolving networks,
            and decode patterns that shape India’s security environment. By
            structuring intelligence around dedicated desks, CNAWS ensures
            depth, continuity, and expertise in analysing adversaries across
            multiple theatres.
          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>
              <strong>Anticipation, not reaction:</strong> Proactive monitoring
              of threats allows India to act before adversaries exploit
              vulnerabilities.
            </li>
            <li>
              <strong>Theatre-specific expertise:</strong> Tailored desks focus
              on regional dynamics, ensuring nuanced understanding.
            </li>
            <li>
              <strong>Bridging OSINT & strategy:</strong> Turning fragmented
              data into actionable insights for policy and operational
              communities.
            </li>
          </ul>
        </div>

        {/* Intelligence Desks */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Intelligence Desks
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              {
                title: "Pakistan Desk",
                focus:
                  "Political–military trends, proxy warfare infrastructure, terror financing, and the evolving strategies of ISI-backed networks.",
                why: "Pakistan’s hybrid warfare posture remains India’s most persistent challenge, requiring constant vigilance and narrative countering.",
              },
              {
                title: "Jammu & Kashmir Desk",
                focus:
                  "Radicalisation pipelines, infiltration patterns across LoC, proxy outfit dynamics (TRF, PAFF, KT), and shifts in terrorism.",
                why: "J&K remains the laboratory of Pakistan’s hybrid strategies; real-time analysis here defines broader counter-terror success.",
              },
              {
                title: "China Desk",
                focus:
                  "Maritime activities in IOR, PLA Navy deployments, BRI-linked strategic investments, dual-use port infrastructure, and cyber–tech intrusions.",
                why: "China’s rise poses a multi-domain challenge to India, from Himalayan borders to maritime chokepoints.",
              },
              {
                title: "North East Desk (Proposed)",
                focus:
                  "Insurgency revival trends, cross-border sanctuaries, arms trafficking, and border management with Myanmar–Bangladesh.",
                why: "The Northeast is a geopolitical hinge where domestic insurgency, transnational crime, and great power competition converge.",
              },
            ].map((desk, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{desk.title}</h3>
                <p className="mb-2">
                  <strong>Focus:</strong> {desk.focus}
                </p>
                <p>
                  <strong>Why it matters:</strong> {desk.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gathering;
