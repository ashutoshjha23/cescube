import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courses = [
  { title: "OSINT - Gathering and Analyses Methodologies", level: "Beginner" },
  { title: "Non-Contact Warfare", level: "Beginner" },
  { title: "OSINT for Militancy and Terrorism", level: "Advanced" },
  { title: "Understanding Research Methodology and Techniques for IR", level: "Beginner" },
  { title: "A Guide to Geo-Intelligence", level: "Advanced" },
  { title: "Understanding Pakistan's Playbook vis-a-vis India", level: "Beginner" },
];

const Course = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-6 py-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-news-dark dark:text-white">
            Courses
          </h1>

        </motion.div>

        {/* Course Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={sectionVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group transition-all"
            >
              {/* Card Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  course.level === "Beginner"
                    ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                    : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                }`}
              >
                {course.level}
              </span>

              {/* Coming Soon Overlay (hidden until hover) */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold text-lg bg-news-primary px-4 py-1 rounded-full shadow-lg">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
