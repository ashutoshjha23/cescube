import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import mohitImg from "@/assets/advisors/mohitimg.jpg";
import shashankImg from "@/assets/advisors/shashankimg.jpg";
import nikitaImg from "@/assets/advisors/nikitaimg.jpg";

const coreTeam = [
  {
    name: "Mohit Vashisth",
    role: "Founder",
    bio: `Mohit Vashisth is a Doctoral Research Fellow at Jindal School of International Affairs, O.P. Jindal Global University, Haryana, India. He was earlier associated with Max Security Solutions as a coordinator at Global Security Operations Centre (GSOC). At MAX, he was responsible for intelligence gathering, analysis, travel & security operations, and risk mitigation on a global scale during routine and emergency. He also has three years of experience working in the renewable energy sector. He is an engineering graduate with a major in Electronics and Communications and holds a Master’s degree in Political Science and International Affairs. His research areas are critical and disruptive defence technologies, counter-terrorism and Open-Source Intelligence (OSINT).`,
    image: mohitImg,
  },
  {
    name: "Shashank Ranjan",
    role: "Co-Founder",
    bio: `Colonel Shashank Ranjan (Retd) served in the Indian Army for 33 years as an Infantry Officer, including 15 years in Counter-Insurgency and Counter-Terrorism operations in Jammu & Kashmir and the North-East. He led defence diplomacy exercises with the US Marine Corps, UN Peacekeeping in Ethiopia-Eritrea, and disaster relief in J&K and the Andaman & Nicobar Islands. He held key instructional roles and managed modernization projects at Army HQ. A former Research Fellow at CLAWS, he authored Resolving India’s Maoist Challenge and has published extensively on terrorism and internal security. Col Ranjan frequently contributes to national dailies and is currently an Associate Professor of Practice at Jindal School of International Affairs, OP Jindal Global University.`,
    image: shashankImg,
  },
  {
    name: "Nikita Vats",
    role: "Co-Founder",
    bio: `Nikita Vats is a PhD candidate in International Relations at the Jindal School of International Affairs, O.P. Jindal Global University, India. She previously served as a Research Associate at the National Maritime Foundation, where she contributed to maritime and strategic policy research. She holds a B.Sc. (Hons.) in Chemistry from the University of Delhi and an M.Sc. in Chemistry from Punjab University. She also holds a second Master’s degree in Political Science and International Relations. Her research interests span strategic affairs in the Indo-Pacific, India’s energy security, critical minerals, climate diplomacy, and emerging technology-related security issues. Her current doctoral research focuses on the geopolitics of energy transition and India's strategic imperatives in contemporary world politics.`,
    image: nikitaImg,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CoreTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Core Team | CNAWS</title>
      </Helmet>

      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={sectionVariant}
            className="text-4xl font-bold text-center mb-12 text-news-dark dark:text-white"
          >
            Core Team
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionVariant}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {coreTeam.map((member, index) => (
              <CoreMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

const CoreMemberCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 border border-news-border flex flex-col items-center"
    >
      <div className="w-full h-64 mb-4 rounded-xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-bold text-news-dark dark:text-white">{member.name}</h3>
      <p className="text-news-primary text-sm mb-2">{member.role}</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm text-justify">{member.bio}</p>
    </motion.div>
  );
};

export default CoreTeam;
