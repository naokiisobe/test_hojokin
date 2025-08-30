
'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Talent Strategy',
      description: 'Architect your human capital to drive competitive advantage through strategic workforce planning, talent acquisition, and retention frameworks.',
      image: 'https://readdy.ai/api/search-image?query=Strategic%20business%20planning%20session%20with%20diverse%20professionals%20around%20modern%20conference%20table%2C%20talent%20acquisition%20charts%20and%20graphs%2C%20sophisticated%20corporate%20boardroom%20with%20warm%20lighting%20and%20neutral%20tones&width=600&height=400&seq=talent-strategy&orientation=landscape'
    },
    {
      title: 'Organizational Design',
      description: 'Reimagine your organizational structure to optimize performance, culture, and agility in an evolving business landscape.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20office%20space%20with%20collaborative%20workspaces%2C%20organizational%20charts%20on%20digital%20screens%2C%20people%20working%20in%20teams%2C%20contemporary%20design%20with%20warm%20gray%20and%20bronze%20accents&width=600&height=400&seq=org-design&orientation=landscape'
    },
    {
      title: 'Leadership Development',
      description: 'Cultivate conscious leaders who inspire transformation, drive innovation, and create cultures of belonging and excellence.',
      image: 'https://readdy.ai/api/search-image?query=Executive%20leadership%20coaching%20session%2C%20mentor%20and%20mentee%20in%20conversation%2C%20professional%20development%20workshop%2C%20warm%20lighting%20in%20sophisticated%20meeting%20space%20with%20neutral%20decor&width=600&height=400&seq=leadership-dev&orientation=landscape'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 px-8 bg-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6">What We Do</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with forward-thinking organizations to unlock human potential 
            and drive sustainable transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative overflow-hidden rounded-2xl bg-gray-900 transition-all duration-1000 ${isVisible || visibleCards.includes(index) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200/0 via-amber-200/50 to-amber-200/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
