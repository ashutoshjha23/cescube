import { motion } from "framer-motion";
import { BookOpen, Shield, Globe, Eye, Activity } from "lucide-react"; // Icon set (optional)

const courses = [
  {
    title: "Terrorism & Counter-Terrorism",
    description: "Understand the roots of terrorism and strategies used worldwide to counter it.",
    duration: "8 Weeks",
    icon: <Shield className="text-primary w-6 h-6" />,
  },
  {
    title: "Cybersecurity & Digital Threats",
    description: "Learn how cyber attacks are used in modern conflicts and how to protect against them.",
    duration: "6 Weeks",
    icon: <Activity className="text-primary w-6 h-6" />,
  },
  {
    title: "Intelligence & Surveillance",
    description: "Explore tools and ethics of intelligence gathering and surveillance operations.",
    duration: "5 Weeks",
    icon: <Eye className="text-primary w-6 h-6" />,
  },
  {
    title: "Geopolitical Strategy",
    description: "Dive into the politics of global conflicts and diplomacy.",
    duration: "7 Weeks",
    icon: <Globe className="text-primary w-6 h-6" />,
  },
  {
    title: "Media & Conflict Reporting",
    description: "Learn to report from conflict zones with accuracy and ethics.",
    duration: "4 Weeks",
    icon: <BookOpen className="text-primary w-6 h-6" />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CoursesPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-16 py-16 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Dive into key global challenges with courses designed by professionals, journalists, and security experts.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((course, index) => (
          <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.03, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 200 }}
            key={index}
            className="bg-card border border-muted rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {course.icon}
              <h2 className="text-xl font-semibold">{course.title}</h2>
            </div>
            <p className="text-muted-foreground mb-3">{course.description}</p>
            <span className="text-sm text-primary font-medium">{course.duration}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesPage;
