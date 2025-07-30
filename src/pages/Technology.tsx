import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", papers: 2 },
  { name: "Feb", papers: 3 },
  { name: "Mar", papers: 1 },
  { name: "Apr", papers: 4 },
  { name: "May", papers: 3 },
  { name: "Jun", papers: 5 },
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Research Dashboard
      </motion.h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {["Publications", "Collaborators", "Ongoing Projects"].map((title, i) => (
          <motion.div
            key={i}
            className="bg-blue-100 rounded-2xl p-6 shadow-md hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-3xl font-bold">
              {i === 0 ? 25 : i === 1 ? 12 : 4}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Graph */}
      <motion.div
        className="bg-white rounded-xl shadow p-6 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Monthly Paper Submissions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="papers" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Research Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">Analysis #{i}</h3>
            <p className="text-sm text-gray-600">
              Research 
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
