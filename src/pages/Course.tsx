import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const courses = [
  {
    id: "research-methodology",
    title: "CNAWS Online Certificate Course in Social Science Research Methodology",
    level: "Beginner",
    price: 1500,
    duration: "4 Weeks, 10 Live Sessions, 1.5 Hours Each",
    mode: "Live Interactive Classes (No pre-recorded sessions)",
    certificate: "Issued upon completion",
    overview: `This certificate course is designed for students and new researchers in Political Science, International Relations, and Social Sciences. It focuses on developing research thinking and academic writing clarity.`,
    aims: [
      "Understand how to conceptualise a research topic",
      "Conduct a structured literature review",
      "Develop research design and methodology",
      "Gain exposure to data collection and interpretation",
      "Improve academic writing for publication"
    ],
    offers: [
      "Live interactive sessions",
      "Step-by-step explanation of concepts",
      "Beginner-friendly examples and templates",
      "Structured writing guidance",
      "No pre-recorded videos"
    ],
    sessions: [
      ["1", "Orientation & Introductions", "Understanding research thinking"],
      ["2", "Foundations of Social Science Research", "Nature, types & scope"],
      ["3", "Research Problem & Questions", "Refining direction & scope"],
      ["4", "Literature Review Techniques", "Search, structure & synthesis"],
      ["5", "Research Design & Methodology", "Qualitative, Quantitative, Mixed Methods"],
      ["6", "Sampling Strategies", "Sampling logic & type selection"],
      ["7", "Data Collection Methods", "Surveys, interviews & observation"],
      ["8", "Data Analysis (Basic)", "Coding & thematic interpretation"],
      ["9", "Ethics in Research", "Bias mitigation & confidentiality"],
      ["10", "Writing & Presenting Research", "Structuring arguments & academic writing"],
    ],
    idealFor: [
      "Undergraduate & postgraduate students",
      "Early-stage researchers",
      "Individuals preparing academic papers",
      "Anyone aiming to publish research"
    ]
  },

  {
    id: "osint",
    title: "CNAWS Online Certificate Course in Open-Source Intelligence (OSINT): Collection, Analysis & Applications",
    level: "Beginner",
    price: 1500,
    duration: "4 Weeks, 10 Live Sessions, 1.5 Hours Each",
    mode: "Live Interactive Classes (No pre-recorded sessions)",
    certificate: "Issued upon completion",
    overview: `This course provides a structured introduction to Open-Source Intelligence (OSINT) — focusing on collecting, verifying, and analysing publicly available data to generate actionable insights.`,
    aims: [
      "Understand the role of intelligence in national security",
      "Apply OSINT collection and analysis methods",
      "Use analytical frameworks for evaluating information",
      "Write structured intelligence assessments",
      "Recognize ethical and operational OSINT considerations"
    ],
    offers: [
      "Live case-based learning",
      "Hands-on intelligence collection & verification",
      "Structured report writing framework",
      "Real-world scenario assignments",
      "No pre-recorded classes — fully live"
    ],
    sessions: [
      ["1", "Introduction to Intelligence", "Purpose & collection disciplines"],
      ["2", "Introduction to OSINT", "Scope, importance & legal considerations"],
      ["3", "OSINT Sources", "Web, media, database & social platforms"],
      ["4", "OSINT Collection Methods", "Active vs passive collection & verification"],
      ["5", "Analysis Techniques", "SWOT, PEST, Network Analysis"],
      ["6", "Intelligence Reporting", "Tactical, operational & strategic formats"],
      ["7", "Report Writing Practice", "5W + 1H structured writing"],
      ["8", "Applied OSINT Use Cases", "Security, risk & operational assessments"],
      ["9", "Ethics & Bias", "Verification and objectivity"],
      ["10", "Capstone Exercise", "Full cycle OSINT operation & feedback"],
    ],
    idealFor: [
      "Students in IR, Security & Politics",
      "Researchers & Analysts",
      "Journalists & Policy Professionals",
      "Anyone interested in intelligence work"
    ]
  }
];

// ✅ Razorpay Loader
const loadRazorpayScript = (src: string): Promise<boolean> =>
  new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => window.scrollTo(0, 0), []);

  const handleInputChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePayment = async () => {
    if (!formData.name || !formData.email) return alert("Fill in all fields.");
    setLoading(true);
    await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    const res = await fetch("https://cnaws.in/payments/create_order.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: selectedCourse.price, courseName: selectedCourse.title }),
    });

    const data = await res.json();

    new (window as any).Razorpay({
      key: "rzp_test_yourkeyhere",
      amount: selectedCourse.price * 100,
      currency: "INR",
      name: "CNAWS Academy",
      description: selectedCourse.title,
      order_id: data.orderId,
      prefill: formData,
      handler: async (response: any) => {
        const verify = await fetch("https://cnaws.in/payments/verify_payment.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...response, ...formData, course: selectedCourse.title, amount: selectedCourse.price }),
        });
        const verifyData = await verify.json();
        if (verifyData.status === "success") setSuccessMessage(`✅ Enrollment successful! Check ${formData.email}`);
      }
    }).open();

    setLoading(false);
  };

  return (
    <>
      <Helmet><title>CNAWS | Courses</title></Helmet>

      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-6 py-16">
        <motion.div initial="hidden" animate="show" variants={sectionVariant} className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-4 text-news-dark dark:text-white">Courses</h1>
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {courses.map((courseItem, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedCourse(courseItem)}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{courseItem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{courseItem.duration}</p>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">₹{courseItem.price}</p>
            </motion.div>
          ))}
        </div>

        {/* ✅ DETAILS MODAL */}
        <AnimatePresence>
          {selectedCourse && (
            <motion.div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}>

                <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">{selectedCourse.overview}</p>

                <h3 className="text-xl font-semibold mb-2">Learning Outcomes</h3>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                  {selectedCourse.aims.map((a: string, i: number) => <li key={i}>{a}</li>)}
                </ul>

                <h3 className="text-xl font-semibold mb-2">What This Course Offers</h3>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                  {selectedCourse.offers.map((a: string, i: number) => <li key={i}>{a}</li>)}
                </ul>

                <h3 className="text-xl font-semibold mb-3">Course Structure (Tentative)</h3>
                <table className="w-full text-left border dark:border-gray-600 mb-6">
                  <thead>
                    <tr className="bg-gray-200 dark:bg-gray-700">
                      <th className="p-2">Session</th>
                      <th className="p-2">Topic</th>
                      <th className="p-2">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourse.sessions.map((s: any, i: number) => (
                      <tr key={i} className="border-t dark:border-gray-600">
                        <td className="p-2">{s[0]}</td><td className="p-2">{s[1]}</td><td className="p-2">{s[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 className="text-xl font-semibold mb-2">Who Should Enroll</h3>
                <ul className="list-disc ml-6 mb-6 space-y-1">
                  {selectedCourse.idealFor.map((a: string, i: number) => <li key={i}>{a}</li>)}
                </ul>

                <div className="bg-gray-100 dark:bg-gray-900 p-5 rounded-lg mb-4">
                  <h3 className="font-semibold mb-3">Enroll Now — ₹{selectedCourse.price}</h3>
                  <input className="w-full mb-3 p-2 rounded" placeholder="Your Name" name="name" onChange={handleInputChange} />
                  <input className="w-full mb-3 p-2 rounded" placeholder="Your Email" name="email" onChange={handleInputChange} />
                  <button onClick={handlePayment} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    {loading ? "Processing..." : "Proceed to Payment"}
                  </button>
                  {successMessage && <p className="text-green-600 mt-3">{successMessage}</p>}
                </div>

                <button className="text-red-500 font-semibold mt-4" onClick={() => setSelectedCourse(null)}>
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Course;
