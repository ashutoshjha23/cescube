import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ArpanImg from "@/assets/advisors/Arpanimg.jpg";
import DivyaImg from "@/assets/advisors/Divyaimg.jpg";

// Add placeholder image imports (replace with actual images)
import AnushkaImg from "@/assets/advisors/anushkaimg.jpg";
import UmangImg from "@/assets/advisors/umangimg.jpg";

const teamMembers = [
  {
    name: "Arpan A. Chakravarty",
    role: "Visiting Research Fellow",
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
  {
    name: "Anushka Saraswat",
    role: "Visiting Research Fellow",
    bio: `Anushka Saraswat is a White-Collar Crime & National Security Law Scholar and a Consultant on International Law, Counter-Terrorism Law, Lawfare and International Disputes. She has worked on the prosecution side in cases of anti-money laundering, anti-corruption, and tax evasion at the Supreme Court of India, High Courts, and Special Courts. 

She served as a core member at the Civil 20 Working Group on Human Rights during India’s G20 Presidency, and as a Young Professional at Vivekananda International Foundation (VIF India). She was also a Research Intern at Centre for Land Warfare Studies (CLAWS). A graduate of O.P. Jindal Global University, she holds certifications from the United Nations Office of Drugs and Crime (UNODC). 

Her focus areas include white-collar crime, transnational financial offences, FATF frameworks, terror finance, proliferation finance law (UAPA, PMLA, PCA, ICSANT, UNSCR regimes), and international dispute resolution mechanisms under UNCITRAL, ICSID, and PCA frameworks.`,
    image: AnushkaImg,
  },
  {
    name: "Lt Col Umang Kohli (Retd)",
    role: "Visiting Consultant",
    bio: `Lt Col Umang Kohli (Retd) brings over 25 years of diverse experience across military service and journalism. He served the Indian Army for 24 years, including six years in Jammu & Kashmir during active counter-terrorism operations. As a Company Commander with the Rashtriya Rifles, he led multiple encounters that eliminated several terrorists. 

His acclaimed book, *In The Times of Article 370*, is based on his Kashmir counter-terrorism experiences. He has studied journalism and mass communication in India, Australia, and the United States, and is recognized as the only journalist in the country to have engaged in active combat. 

His areas of expertise span Geo-politics, Defence, Finance, International Trade, Environment, Agriculture, Cyber Security, Risk Management, Public Relations, and Policy Formulation.`,
    image: UmangImg,
  }
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
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
