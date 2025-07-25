import { motion } from "framer-motion";

const teamData = {
  founder: [
    {
      name: "vats",
      role: "Founder & Editor-in-Chief",
      image: "/team/founder.jpg",
      description: "Ashutosh leads the vision of the platform and ensures unbiased and accurate reporting."
    }
  ],
  developers: [
    {
      name: "Ashutosh Jha",
      role: "Frontend Developer",
      image: "/team/john.jpg",
      description: "John creates clean and responsive UI components to deliver a great user experience."
    },
    {
      name: "Praji",
      role: "Backend Developer",
      image: "/team/jane.jpg",
      description: "Jane builds robust backend systems and APIs to support real-time news updates."
    }
  ],
  others: [
    {
      name: "Sam sulek",
      role: "Content Strategist",
      image: "/team/emily.jpg",
      description: "Emily ensures the content is engaging, relevant, and aligns with our editorial standards."
    },
    {
      name: "Rahul Gandhi",
      role: "Marketing Head",
      image: "/team/mark.jpg",
      description: "Mark drives growth through creative digital campaigns and partnerships."
    }
  ]
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-4xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h1>

        {/* Founder Section */}
        <motion.div initial="hidden" animate="show" variants={sectionVariant} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-muted pb-2">Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.founder.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </motion.div>

        {/* Developers Section */}
        <motion.div initial="hidden" animate="show" variants={sectionVariant} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-muted pb-2">Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.developers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </motion.div>

        {/* Others Section */}
        <motion.div initial="hidden" animate="show" variants={sectionVariant}>
          <h2 className="text-3xl font-semibold mb-6 border-b border-muted pb-2">Other Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.others.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TeamCard = ({ member }: { member: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-card shadow-lg rounded-xl p-6 transition-all duration-300 border border-muted"
    >
      <div className="w-full h-56 mb-4 rounded-xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
      <p className="text-sm">{member.description}</p>
    </motion.div>
  );
};

export default Team;
