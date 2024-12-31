import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ClubLead } from './clubLeadsData';

const LeadCard: React.FC<ClubLead> = ({ name, role, image, bio, github, linkedin, email }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transform transition-all duration-300 hover:scale-[1.02] hover:overflow-x-hidden ">
      <div className="flex items-center space-x-6">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-primary-200"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{role}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{bio}</p>
          <div className="flex space-x-4">
            {github && (
              <a href={github} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Github className="w-5 h-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;