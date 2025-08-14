import React from "react";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

// Example team members
const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    imageUrl: "https://via.placeholder.com/300",
    social: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    imageUrl: "https://via.placeholder.com/300",
    social: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Alice Johnson",
    role: "CFO",
    imageUrl: "https://via.placeholder.com/300",
    social: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const CoreTeam: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Core Team
      </h1>
      <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Meet the brilliant minds behind our organization. Our core team members bring
        innovation, expertise, and dedication to everything we do.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-200 dark:border-gray-700"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{member.role}</p>

            {/* Social icons */}
            <div className="flex gap-4">
              {member.social?.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              )}
              {member.social?.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              )}
              {member.social?.instagram && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
