import { useState, useEffect } from "react";
import bgImage from "../assets/1.png";

const Disruptive = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <div className="relative font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Full-length image */}
      <div
        className="w-full overflow-hidden"
        style={{
          opacity: imageOpacity,
          transition: "opacity 0.2s linear",
        }}
      >
        <img
          src={bgImage}
          alt="Disruptive Defense Technologies"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Hybrid Warfare & Irregular Conflict
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            “Understanding the shadows of modern warfare.”
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            In recent decades, the nature of warfare has shifted dramatically. States are increasingly confronted not by conventional armies, but by irregular forces—terrorist outfits, guerrilla groups, cyber militias, and proxy actors backed by hostile powers. These actors exploit political, social, and geographic fault lines to wage long-drawn hybrid campaigns that bleed nations without triggering formal war.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
            India, in particular, has been the target of such warfare—be it the proxy terror infrastructure in Kashmir, cross-border insurgencies in the Northeast, or psychological operations targeting its diverse society. The traditional war-peace binary no longer applies. Therefore, there is a critical need to study, anticipate, and counter these unconventional threats through a dedicated institutional framework.
          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><strong>Deterrence begins with understanding:</strong> Knowing how hybrid actors operate helps neutralise them before they strike.</li>
            <li><strong>Shaping narratives:</strong> Countering propaganda and perception warfare is as crucial as winning battles.</li>
            <li><strong>Mapping grey zone tactics:</strong> From sleeper cells to fake NGOs, India's adversaries employ a full spectrum of irregular tools.</li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              { title: "Terrorism and Counter-Terrorism", desc: "Analyzing and mitigating irregular threats across the country." },
              { title: "Proxy Warfare and Guerrilla Insurgencies", desc: "Understanding unconventional warfare tactics and local insurgencies." },
              { title: "False Flag Operations & Narrative War", desc: "Countering misinformation campaigns and deceptive operations." },
              { title: "Crime-Terror Nexus & Shadow Economies", desc: "Tracking illicit networks financing irregular actors." },
              { title: "Financing Channels of Hybrid Groups", desc: "Disrupting funding streams to reduce operational capabilities." },
              { title: "Borderland Destabilisation & Radicalisation", desc: "Monitoring threats to regional stability and counter-radicalization." },
              { title: "Psychological Operations & Info-War", desc: "Enhancing resilience against information-based campaigns in conflict zones." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disruptive;
