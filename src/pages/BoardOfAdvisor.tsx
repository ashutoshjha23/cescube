import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import advisorImg from "@/assets/advisors/shekharimg.jpg";
import sreeramImg from "@/assets/advisors/sreeramimg.jpg"; 
import poojaImg from "@/assets/advisors/poojaimg.jpg"; // Add Pooja image

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const advisors = [
  {
    name: "Adm. Shekhar Sinha",
    title: "PVSM, AVSM, NM & Bar, ADC | Former Three-Star Admiral, Indian Navy",
    image: advisorImg,
    description: `Adm. Shekhar Sinha PVSM, AVSM, NM & Bar, ADC is a former Three star Admiral of the Indian Navy,
    was Commander in Chief of Western Naval Command. He was also Chief of Integrated Defence Staff, 
    and a member of the Defence Acquisition Council between 2010 to 2012. During his tenure, the Long Term Integrated Perspective Plan 
    was compiled and approved by the Government. Adm. Sinha is a naval aviator of fighter stream and has flown over 2700 hours. 
    He steered aviation acquisition as the Assistant Chief of Naval Staff, and later held command of the Western Fleet. 
    Adm. Sinha retired in 2014 as the Commander in Chief of the Western Naval Command based at Mumbai, 
    with additional responsibility of Commander in Chief Coastal Security, Western Seaboard.`,
  },
  {
    name: "Dr. Sreeram Chaulia",
    title: "Professor & Dean, Jindal School of International Affairs | Director General, Jindal India Institute",
    image: sreeramImg,
    description: `Dr. Sreeram Chaulia is Professor and Dean at the Jindal School of International Affairs (JSIA) and Director General of the Jindal India Institute. 
    A leading social scientist and opinion maker on international affairs, he holds a Ph.D. and M.A. in Political Science and International Relations from Syracuse University (USA), 
    an MSc. in History of International Relations from LSE (UK), and a B.A. in Modern History from Oxford University (UK). 
    He has authored 1000+ articles in leading newspapers, regularly appears on global media, and hosts the weekly TV show *Indian Diplomacy* on DD India.`,
  },
  {
    name: "Dr. Pooja Arora",
    title: "Assistant Professor, Jindal School of International Studies | Policy Consultant & AI Trainer",
    image: poojaImg,
    description: `Dr. Pooja Arora is an Assistant Professor at the Jindal School of International Studies and a policy consultant whose work navigates the crossroads of international political economy, security, emerging technologies, and strategic diplomacy. She has advised the Digital Transformations Lab at the German Institute for Global and Area Studies and works as a freelance AI trainer focused on ethical annotation and mitigating biases in AI systems.

She earned an MSc in International Political Economy from the London School of Economics and an MA with distinction in Political Science and International Relations from Indira Gandhi National Open University. Pooja is the co-founder of The Pax Indica newsletter, has published extensively, and actively engages in policy advocacy and scholarly discourse. She is also an award-winning game designer, with designs simulating India’s electoral process, counterfactual history, and international trade strategy for students.`,
  }
];

const BoardOfAdvisor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-6 py-16 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center mb-14 max-w-3xl"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-news-dark dark:text-white">
            Board of Advisors
          </h1>
        </motion.div>

        {/* Advisor Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="show"
              variants={sectionVariant}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                         flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[420px] overflow-hidden flex justify-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="h-full w-auto object-cover transform hover:scale-105 transition duration-700"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-news-dark dark:text-white mb-2">
                  {advisor.name}
                </h2>
                <p className="text-md font-semibold text-news-primary dark:text-gray-400 mb-4 leading-snug">
                  {advisor.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  {advisor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardOfAdvisor;
