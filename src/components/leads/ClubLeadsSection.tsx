import React from 'react';
import LeadCard from './LeadCard';
import { clubLeads } from './clubLeadsData';

const ClubLeadsSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet Our Club Leads</h2>
      <div className="h-[600px] overflow-y-scroll snap-y snap-mandatory overflow-x-hidden hide-scrollbar">
        {clubLeads.map((lead) => (
          <div key={lead.id} className="snap-start">
            <LeadCard {...lead} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubLeadsSection;