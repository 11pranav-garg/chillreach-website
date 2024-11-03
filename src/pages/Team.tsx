import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, image, linkedin }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="card text-center"
  >
    <img
      src={image}
      alt={name}
      className="w-48 h-48 rounded-full mx-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300"
    />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-400 mb-4">{role}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-300"
    >
      <Linkedin className="w-5 h-5 mr-2" />
      Connect on LinkedIn
    </a>
  </motion.div>
);

const Team = () => {
  const team = [
    {
      name: 'Sai Vamsi',
      role: 'Founder & Deliveribility Expert',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQEL0bedcwUldA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726682447157?e=1735776000&v=beta&t=7izmqDfErv0TY_zwFdTgS_cRD2V0N1GJIoEF8W6ZeHA',
      linkedin: 'https://www.linkedin.com/in/sai-vamsi-coldemail/',
    },
    {
      name: 'Pranav Garg',
      role: 'Co-Founder and Automation Expert',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFrqp5OMmqcCw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684153939668?e=1735776000&v=beta&t=51HY9_dqjBKr6qreEk3Y-LmQOZTBZcmPrLtWzghVhLo',
      linkedin: 'https://www.linkedin.com/in/11pranav-garg/',
    },
    // },
    // {
    //   name: "Uzma Anjum",
    //   role: "Inbox Manager",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    //   linkedin: "https://linkedin.com/in/team-member-3"
    // }
  ];

  return (
    <div className="pt-16">
      <section className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-300">
              The experts behind ChillReach's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule a Meeting
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
