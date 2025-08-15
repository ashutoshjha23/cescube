import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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


      <div className="min-h-screen flex items-center justify-center bg-news-light dark:bg-gray-900 px-4 py-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-news-dark dark:text-white">
            Team
          </h1>
          <p className="text-lg text-news-primary dark:text-gray-300">
            Coming Soon...
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default CoreTeam;
