'use client';

import { useState } from 'react';

export default function ClientImpact() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);

  const clients = [
    {
      name: 'TechFlow',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20typography%2C%20minimalist%20tech%20icon%2C%20professional%20corporate%20branding%20in%20dark%20neutral%20colors&width=200&height=100&seq=techflow-logo&orientation=landscape',
      story: 'Reduced employee turnover by 40% through strategic talent retention programs and enhanced leadership development initiatives.',
      industry: 'Technology'
    },
    {
      name: 'Meridian Capital',
      logo: 'https://readdy.ai/api/search-image?query=Financial%20services%20company%20logo%20with%20elegant%20typography%2C%20professional%20investment%20firm%20branding%2C%20sophisticated%20design%20in%20warm%20gray%20and%20bronze%20tones&width=200&height=100&seq=meridian-logo&orientation=landscape',
      story: 'Transformed organizational culture resulting in 25% increase in employee engagement and 30% improvement in client satisfaction.',
      industry: 'Financial Services'
    },
    {
      name: 'Innovate Health',
      logo: 'https://readdy.ai/api/search-image?query=Healthcare%20company%20logo%20with%20medical%20cross%20symbol%2C%20modern%20healthcare%20branding%2C%20professional%20medical%20logo%20design%20in%20neutral%20colors&width=200&height=100&seq=innovate-logo&orientation=landscape',
      story: 'Redesigned organizational structure to support rapid growth, scaling from 50 to 200 employees while maintaining culture.',
      industry: 'Healthcare'
    },
    {
      name: 'EcoVentures',
      logo: 'https://readdy.ai/api/search-image?query=Sustainable%20energy%20company%20logo%20with%20leaf%20or%20earth%20symbol%2C%20environmental%20business%20branding%2C%20eco-friendly%20corporate%20identity%20in%20green%20and%20neutral%20tones&width=200&height=100&seq=eco-logo&orientation=landscape',
      story: 'Developed leadership pipeline that enabled successful expansion into 5 new markets with consistent operational excellence.',
      industry: 'Sustainability'
    },
    {
      name: 'DataMind',
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20with%20abstract%20data%20visualization%20symbol%2C%20modern%20tech%20branding%2C%20professional%20analytics%20company%20identity&width=200&height=100&seq=datamind-logo&orientation=landscape',
      story: 'Implemented talent strategy that attracted top-tier data scientists, reducing hiring time by 50% and improving team performance.',
      industry: 'Data Analytics'
    },
    {
      name: 'Craft Studios',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20symbol%2C%20modern%20creative%20studio%20branding%2C%20professional%20design%20company%20identity%20in%20warm%20neutral%20colors&width=200&height=100&seq=craft-logo&orientation=landscape',
      story: 'Transformed creative workflows and team dynamics, leading to 35% increase in project delivery speed and client retention.',
      industry: 'Creative Services'
    }
  ];

  return (
    <section className="py-32 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6">Client Impact</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by industry leaders to drive meaningful transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              onClick={() => setSelectedClient(index)}
              className="bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:scale-105 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-white text-sm font-medium mt-4 text-center">{client.name}</h3>
              <p className="text-gray-500 text-xs text-center mt-1">{client.industry}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedClient !== null && (
          <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full relative">
              <button
                onClick={() => setSelectedClient(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-amber-200 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              
              <div className="text-center mb-8">
                <img
                  src={clients[selectedClient].logo}
                  alt={clients[selectedClient].name}
                  className="w-32 h-16 object-contain mx-auto mb-4"
                />
                <h3 className="text-2xl font-light text-white mb-2">{clients[selectedClient].name}</h3>
                <p className="text-amber-200">{clients[selectedClient].industry}</p>
              </div>
              
              <div className="bg-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-medium text-white mb-4">Success Story</h4>
                <p className="text-gray-300 leading-relaxed">
                  {clients[selectedClient].story}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}