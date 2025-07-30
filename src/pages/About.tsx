import { motion } from "framer-motion";
import { Target, Eye, Flag, Shield, Users, Zap, Cpu } from "lucide-react";

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About CNAWS</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Centre for New Age Warfare Studies (CNAWS) is India’s pioneering think-and-do tank
          dedicated to preparing the nation for the evolving landscape of 21st-century conflict.
        </p>
      </motion.div>

      {/* About Description */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16 text-center text-muted-foreground"
      >
        <p>
          From cyber attacks and information warfare to proxy terror and space-based threats, 
          the nature of warfare is changing, and India must be ready. CNAWS is built to meet that challenge. 
          We bring together strategic thinkers, domain experts, former practitioners, and emerging talent 
          to create research, training, and policy solutions that strengthen India’s ability to anticipate, 
          understand, and respond to hybrid and non-traditional threats.
        </p>
      </motion.div>

      {/* Aim & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-card border border-muted rounded-xl shadow-md"
        >
          <Target className="h-10 w-10 text-news-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Aim</h2>
          <p className="text-muted-foreground">
            To advance India’s preparedness for new-age warfare by developing world-class research, 
            training, and policy tools grounded in India’s strategic realities.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-card border border-muted rounded-xl shadow-md"
        >
          <Eye className="h-10 w-10 text-news-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-muted-foreground">
            To be India’s leading centre of excellence on modern warfare, empowering the nation with strategic foresight, 
            technological resilience, and intellectual independence in a rapidly evolving security environment.
          </p>
        </motion.div>
      </div>

      {/* Mission */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            "Producing India-centric, policy-relevant research across all dimensions of modern warfare - cyber, space, grey zone, proxy, and information.",
            "Delivering advanced training, wargaming, and scenario planning for security agencies, policymakers, and institutions.",
            "Building an indigenous ecosystem of strategic expertise through cross-sector partnerships, capacity-building, and public engagement.",
            "Serving as a bridge between scholarship and statecraft to shape informed, forward-looking national security policies."
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-muted rounded-xl p-6 shadow-md"
            >
              <p className="text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Objectives */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Objectives</h2>
        <ul className="list-disc list-inside max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-2">
          <li>Generate actionable insights on hybrid warfare, disruptive technologies, proxy terror, cyber and space operations.</li>
          <li>Strengthen national capacity through red-teaming, wargaming, training, and analytical tools.</li>
          <li>Support government, military, and industry with high-impact policy recommendations.</li>
          <li>Drive public and institutional awareness through digital content, publications, and outreach.</li>
          <li>Foster collaboration across national and international stakeholders to address complex security challenges.</li>
          <li>Reduce India’s dependence on foreign frameworks by producing original, indigenous strategic thinking.</li>
        </ul>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "India-First Orientation: National security is our guiding compass.",
            "Excellence: We commit to rigour, clarity, and relevance in all we do.",
            "Integrity: Objectivity and ethics are non-negotiable.",
            "Independence: Free from political or institutional bias.",
            "Innovation: We stay ahead by embracing emerging ideas and technologies.",
            "Collaboration: We build bridges across sectors and borders.",
            "Capacity-Building: We empower people and institutions to shape India’s future security."
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-card border border-muted rounded-xl p-4 shadow-md text-muted-foreground"
            >
              {value}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Are We Different */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Why Are We Different?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-muted-foreground">
          <div className="flex items-start gap-4">
            <Shield className="h-10 w-10 text-news-primary" />
            <p>
              First think tank in India powered by structured Open Source Intelligence (OSINT), integrated with traditional research, 
              field experience, and war-gaming for real-time threat tracking.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Cpu className="h-10 w-10 text-news-primary" />
            <p>
              We develop AI-driven analytical tools and automation solutions to strengthen India’s information edge in both peacetime and crisis.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Users className="h-10 w-10 text-news-primary" />
            <p>
              Our team blends military veterans, technologists, researchers, and policy analysts bridging government, industry, and academia.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="h-10 w-10 text-news-primary" />
            <p>
              We remain mission-first, non-partisan, and focused on building indigenous capacity, reducing dependence on foreign models.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
