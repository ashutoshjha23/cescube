import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import advisorImg from "@/assets/advisors/shekharimg.jpg"; // Replace with actual image path

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      with additional responsibility of Commander in Chief Coastal Security, Western Seaboard. 
      He holds an MSc and MPhil in Defence and Strategic Studies from the University of Madras.`,
  },
];

const BoardOfAdvisor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Board of Advisors</title>
      </Helmet>

      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-4 py-12 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center mb-10 max-w-3xl"
        >
          <h1 className="text-4xl font-bold mb-4 text-news-dark dark:text-white">
            Board of Advisors
          </h1>
        </motion.div>

        {/* Advisor Card */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 gap-8 max-w-4xl w-full">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="show"
                variants={sectionVariant}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                           flex flex-col md:flex-row md:items-stretch"
              >
                {/* Image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-[400px] md:h-full object-cover object-center"
                  />
                </div>

                {/* Text */}
                <div className="p-6 text-left flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-news-dark dark:text-white mb-2">
                    {advisor.name}
                  </h2>
                  <p className="text-md font-semibold text-news-primary dark:text-gray-400 mb-4">
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
      </div>
    </>
  );
};

export default BoardOfAdvisor;
