import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ArpanImg from "@/assets/advisors/Arpanimg.jpg";
import DivyaImg from "@/assets/advisors/Divyaimg.jpg";

const teamMembers = [
  {
    name: "Arpan A. Chakravarty",
    role: "Research Fellow",
    bio: `Arpan A. Chakravarty is a Research Fellow at the India Foundation. Currently, he is a Non-Resident Fellow at the Pune International Centre for National Security Studies and has been a Fellow of the Founding Cohort of the Network for Advanced Studies on Pakistan (NASP) at the Takshashila Institute, Bengaluru.

His research interests focus on India’s neighbourhood, which he approaches through his strong grounding in law and national security. In the past, he has assisted members of the National Security Advisory Board and has had the opportunity to serve at institutions that play a vital role in nation-building, including Rashtriya Raksha University, Gandhinagar (an Institute of National Importance), and the Indian Institute of Science (IISc), Bengaluru, in various capacities. He is proficient in multiple languages. He can be reached at arpan.chak13@gmail.com.`,
    image: ArpanImg,
  },
  {
    name: "Divya",
    role: "Research Fellow",
    bio: `Divya holds a PhD in Geopolitics from the School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. She is presently a Research Fellow with the Centre for National Security Studies, Bangalore, and the Middle East Institute, New Delhi. 

She completed her MPhil from JNU, MA in Applied Economics from Christ University, Bengaluru, and BA (Hons.) in Economics from Panjab University, Chandigarh. Previously, she has worked with the National Security Council’s Advisory Board (NSAB) and MP-IDSA, Delhi, as a researcher. She was also associated with Rashtriya Raksha University (Ministry of Home Affairs), Gujarat, as Assistant Professor and Assistant Director. 

She has presented her research at international conferences in countries including the USA, Israel, Afghanistan, Pakistan, etc., and frequently writes for leading national and international newspapers.`,
    image: DivyaImg,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={sectionVariant}
            className="text-4xl font-bold text-center mb-12 text-news-dark dark:text-white"
          >
            Team
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionVariant}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 
                 border border-news-border dark:border-none flex flex-col items-center max-w-sm mx-auto"
    >
      <div className="w-full h-[400px] mb-4 rounded-xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>
      <h3 className="text-xl font-bold text-news-dark dark:text-white text-center">
        {member.name}
      </h3>
      <p className="text-news-primary text-sm mb-2 text-center">
        {member.role}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm text-justify">
        {member.bio}
      </p>
    </motion.div>
  );
};

export default Team;
