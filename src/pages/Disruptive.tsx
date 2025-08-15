import { useState, useEffect } from "react";
import bgImage from "../assets/2.png";

const EmergingTech2 = () => {
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
          alt="Disruptive and Emerging Technologies"
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Department of Disruptive and Emerging Technologies
          </h1>
          <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-300">
            “Weaponising the future. Securing the present.”
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl mb-12">
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200">
            The future battlefield is already here. Wars will no longer be fought only with tanks and aircraft, but with algorithms, drones, hypersonic missiles, and artificial intelligence. Technological disruption is now the primary driver of strategic advantage. From autonomous drones used by non-state actors to cyber-physical sabotage of power grids, the landscape of warfare is being redrawn.
          </p>
          <p className="leading-relaxed text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
            India cannot afford to play catch-up in this domain. The rise of China’s civil-military fusion model, Pakistan’s use of drones for arms drops, and the West’s AI-powered targeting systems show that tech supremacy will define military supremacy. This department exists to map, monitor, and forecast the evolution of these capabilities and their implications for Indian defence.
          </p>
        </div>

        {/* Strategic Importance */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Strategic Importance
          </h2>
          <ul className="space-y-4 text-lg md:text-xl list-disc list-inside text-gray-700 dark:text-gray-200">
            <li><strong>Staying ahead of adversaries:</strong> The next war may be decided by code, not combat.</li>
            <li><strong>Techno-strategic autonomy:</strong> Indigenous development of emerging systems ensures sovereign defence capability.</li>
            <li><strong>Dual-use vigilance:</strong> Technologies like biotechnology and quantum can help or harm—depending on who controls them.</li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl">
            {[
              "AI & ML in Defence Systems",
              "Quantum Computing (Offensive & Defensive)",
              "Drone Warfare and Swarm Robotics",
              "Directed Energy and Hypersonic Weapons",
              "3D Printing & Additive Manufacturing in Logistics",
              "Nanotechnology in Surveillance and Biowarfare",
              "Cyber-Physical Infrastructure Security",
              "Biotechnology and Genetic Warfare",
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

export default EmergingTech2;
