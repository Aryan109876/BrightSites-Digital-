import React from 'react';
import { teamMembers } from '../../utils/data';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a group of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden h-80">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-blue-50 mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Twitter size={16} className="text-white" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Linkedin size={16} className="text-white" />
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                        >
                          <Github size={16} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 md:p-10">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Join Our Team</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for talented individuals to join our growing team. 
                If you're passionate about creating exceptional digital experiences, we'd love to hear from you.
              </p>
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
              >
                View Open Positions
              </a>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-900 mb-3">Current Openings:</h4>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Senior Web Developer</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Full-time</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">UX/UI Designer</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Full-time</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Digital Marketing Specialist</span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Contract</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;