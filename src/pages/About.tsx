import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16 bg-background text-foreground">
      {/* Hero Section */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Empowering people with unbiased, up-to-date, and impactful news from across the globe.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-muted-foreground">
            We aim to deliver credible news that informs, educates, and inspires our audience.
            From world politics to technology, we cover topics that matter most.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-muted-foreground">
            To become the most trusted news platform, ensuring transparency and journalistic integrity
            in everything we report.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid gap-8 md:grid-cols-3 mt-6">
          {[
            {
              title: "Verified News",
              desc: "We prioritize facts and verify all our reports before publishing.",
            },
            {
              title: "Real-Time Updates",
              desc: "Stay ahead with our constantly updated and curated news.",
            },
            {
              title: "User-Focused",
              desc: "We craft stories that matter, focusing on clarity and impact.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card border border-muted rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
