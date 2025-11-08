import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Consultancy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8 md:py-12 max-w-5xl"
    >
      <Helmet>
        <title>Consultancy - CNAWS</title>
        <meta
          name="description"
          content="CNAWS offers specialized consultancy services to equip government institutions, security agencies, defence establishments, and private-sector stakeholders with insights and strategies for modern conflict."
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold text-news-dark dark:text-white mb-6 md:mb-8 text-center">
        Consultancy
      </h1>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-news-primary dark:text-news-secondary mb-4">
          Empowering Decision-Makers with Insight, Foresight, and Strategic Clarity
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          In an era defined by hybrid threats, information warfare, and disruptive technologies,
          informed decision-making is not a luxury, it is a national necessity. CNAWS offers
          specialized consultancy services designed to equip government institutions, security
          agencies, defence establishments, and private-sector stakeholders with the tools,
          insights, and strategies needed to navigate the complexities of modern conflict. Our
          consultancy combines India-centric strategic thinking, field-tested experience, and
          data-driven intelligence to deliver actionable solutions that strengthen preparedness,
          resilience, and response capability across all domains of new-age warfare.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-news-primary dark:text-news-secondary mb-6">
          Our Consultancy Domains
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              1. Hybrid Warfare and Strategic Risk
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We provide end-to-end assessments on evolving threat spectrums from proxy warfare and
              disinformation to cognitive and economic operations. Our experts help institutions
              identify vulnerabilities, anticipate escalation patterns, and design countermeasures
              that integrate military, informational, and technological dimensions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              2. Information Operations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We assist clients in developing proactive defence and deterrence frameworks against
              cyber threats and influence operations. This includes cyber threat modeling, narrative
              warfare assessments, information ecosystem mapping, and policy advisory on digital
              sovereignty and cyber resilience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              3. Counter-Proxy and Counter-Terror Analysis
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Leveraging our structured OSINT and network-mapping capabilities, CNAWS offers
              analytical support to understand, monitor, and counter emerging proxy terror outfits
              and their operational linkages. Our assessments support law enforcement, intelligence,
              and policy agencies in developing precise, evidence-backed strategies.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              4. Wargaming and Scenario Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We design customized tabletop exercises, simulation-based wargames, and scenario
              analysis modules to test strategic assumptions, assess readiness, and enhance
              institutional decision-making under pressure.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              5. Red Teaming and Strategic Audit
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Through structured red-teaming exercises, we help organisations test the robustness of
              their strategies, security postures, and communication frameworks against asymmetric
              or hybrid threats.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-news-border dark:border-gray-700">
            <h3 className="text-xl font-bold text-news-dark dark:text-white mb-3">
              6. Capacity Building and Policy Support
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our consultancy extends to policy formulation, strategic framework design, and
              institutional capacity-building through workshops, advisories, and tailored programs
              for security professionals and policymakers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-news-primary dark:text-news-secondary mb-4">
          Our Methodology
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          CNAWS follows a rigorous, multi-layered approach that combines:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
          <li>Open Source Intelligence (OSINT) and data analytics for real-time situational awareness.</li>
          <li>Cross-domain expertise integrating technology, strategy, and field insights.</li>
          <li>AI-assisted threat modelling and simulation tools for predictive analysis.</li>
          <li>Collaborative engagement with domain specialists, veterans, and institutional partners.</li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Each engagement is customised, confidential, and mission-driven, aligned with India's
          national security priorities.
        </p>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-news-primary dark:text-news-secondary mb-4">
          Who We Work With
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
          <li>Government ministries and security agencies</li>
          <li>Defence and intelligence institutions</li>
          <li>Public and private sector enterprises exposed to cyber or information risks</li>
          <li>Academic and research organisations focused on national security</li>
          <li>Media and communication entities seeking strategic clarity on various strategic issues</li>
        </ul>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-news-primary dark:text-news-secondary mb-4">
          Why Choose CNAWS
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
          <li><strong>India-first expertise:</strong> Rooted in national strategic realities.</li>
          <li><strong>Interdisciplinary approach:</strong> Bridging defence, technology, and policy.</li>
          <li><strong>AI-integrated analysis:</strong> Leveraging automation and data analytics for precision.</li>
          <li><strong>Confidential, ethical, and actionable:</strong> Our consultancy outputs are built on integrity and operational relevance.</li>
          <li><strong>Proven credibility:</strong> Trusted by practitioners, guided by veterans, and powered by young analytical talent.</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-news-primary to-news-secondary text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          Whether you are a policymaker seeking structured risk assessments, an institution designing
          resilience frameworks, or an organisation navigating the information battlefield, CNAWS
          stands ready to assist.
        </p>
        <p className="text-lg font-semibold">
          📩 To explore consultancy partnerships or request a tailored proposal, contact us at:
        </p>
        <a
          href="mailto:consultancy@cnaws.in"
          className="inline-block mt-4 bg-white text-news-primary font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          consultancy@cnaws.in
        </a>
      </section>
    </motion.div>
  );
};

export default Consultancy;