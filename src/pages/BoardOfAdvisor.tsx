import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const advisors = [
  {
    name: "Dr. A.K. Verma",
    role: "Former Director General, DRDO",
    bio: "Expert in strategic defense technology and innovation, advisor to several national R&D councils.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Ms. Ritu Sharma",
    role: "Senior Policy Analyst, NITI Aayog",
    bio: "Focuses on national security policy and disruptive tech integration in government sectors.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prof. Sanjay Patel",
    role: "Dean of Strategy, IIT Delhi",
    bio: "Leads interdisciplinary research initiatives involving hybrid warfare and tech foresight.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Lt. Gen. Rajesh Mehta (Retd.)",
    role: "Defense Strategy Consultant",
    bio: "Provides strategic insights into modern warfare and military preparedness.",
    image: "https://via.placeholder.com/150",
  },
];

const BoardOfAdvisor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Board of Advisors | CNAWS</title>
      </Helmet>

      <div className="bg-news-light dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-news-dark dark:text-white mb-10 underline decoration-news-primary">
          Board of Advisors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-news-border hover:shadow-xl transition-all duration-300"
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-news-dark dark:text-white">
                  {advisor.name}
                </h2>
                <p className="text-sm text-news-primary font-medium mt-1">{advisor.role}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{advisor.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardOfAdvisor;
