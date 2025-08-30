
'use client';

import { useState, useEffect } from 'react';

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Strategic Director',
      expertise: 'Organizational Psychology',
      bio: 'Former McKinsey partner with 15+ years transforming Fortune 500 companies. PhD in Organizational Psychology from Stanford.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Asian%20businesswoman%20in%20executive%20portrait%2C%20confident%20leadership%20pose%2C%20modern%20corporate%20headshot%20with%20warm%20lighting%20and%20neutral%20background&width=300&height=400&seq=sarah-chen&orientation=portrait'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Talent Strategy Lead',
      expertise: 'Executive Search & Development',
      bio: 'Previously Head of Talent at Google. Specializes in building high-performance teams and succession planning.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Hispanic%20business%20executive%20in%20formal%20portrait%2C%20executive%20headshot%2C%20corporate%20leadership%20photography%20with%20sophisticated%20lighting&width=300&height=400&seq=marcus-rodriguez&orientation=portrait'
    },
    {
      name: 'Dr. Amara Okafor',
      role: 'Leadership Development Partner',
      expertise: 'Executive Coaching',
      bio: 'Former Chief Learning Officer at Microsoft. Certified executive coach with expertise in conscious leadership.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20American%20businesswoman%20executive%20portrait%2C%20confident%20leadership%20headshot%2C%20modern%20corporate%20photography%20with%20warm%20professional%20lighting&width=300&height=400&seq=amara-okafor&orientation=portrait'
    },
    {
      name: 'James Thompson',
      role: 'Change Management Director',
      expertise: 'Organizational Transformation',
      bio: 'Led digital transformation at 3 Fortune 100 companies. Expert in change psychology and culture design.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Caucasian%20business%20executive%20in%20formal%20portrait%2C%20corporate%20headshot%2C%20executive%20leadership%20photography%20with%20contemporary%20styling&width=300&height=400&seq=james-thompson&orientation=portrait'
    },
    {
      name: 'Priya Patel',
      role: 'Culture & Engagement Specialist',
      expertise: 'Employee Experience Design',
      bio: 'Former Head of People Operations at Spotify. Focuses on creating cultures of belonging and high performance.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20executive%20portrait%2C%20confident%20corporate%20headshot%2C%20modern%20professional%20photography%20with%20warm%20lighting&width=300&height=400&seq=priya-patel&orientation=portrait'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#team');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-32 px-8 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seasoned experts who have transformed organizations across industries
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex gap-8 animate-scroll"
            style={{
              width: `${team.length * 320}px`,
              animation: 'scroll 30s linear infinite'
            }}
          >
            {[...team, ...team].map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer hover:bg-gray-750 transition-all duration-300"
                onClick={() => setExpandedMember(index % team.length)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light text-white mb-1 group-hover:text-amber-200 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-amber-200 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Member Modal */}
        {expandedMember !== null && (
          <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full relative">
              <button
                onClick={() => setExpandedMember(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-amber-200 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
              
              <div className="flex items-start gap-6">
                <img
                  src={team[expandedMember].image}
                  alt={team[expandedMember].name}
                  className="w-32 h-40 object-cover object-top rounded-xl"
                />
                
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white mb-2">{team[expandedMember].name}</h3>
                  <p className="text-amber-200 mb-2">{team[expandedMember].role}</p>
                  <p className="text-gray-400 text-sm mb-4">{team[expandedMember].expertise}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {team[expandedMember].bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
