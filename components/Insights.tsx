
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Insights() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const articles = [
    {
      title: 'The Future of Hybrid Leadership',
      excerpt: 'How conscious leaders are navigating the new world of work with empathy, authenticity, and strategic vision.',
      category: 'Leadership',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20business%20executive%20in%20thoughtful%20pose%2C%20leadership%20concept%2C%20professional%20portrait%20in%20contemporary%20office%20setting%20with%20warm%20lighting%20and%20neutral%20colors&width=400&height=300&seq=hybrid-leadership&orientation=landscape',
      link: '/insights/hybrid-leadership'
    },
    {
      title: 'Designing Organizations for Agility',
      excerpt: 'Structural frameworks that enable rapid adaptation while maintaining operational excellence and cultural integrity.',
      category: 'Organizational Design',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Dynamic%20organizational%20chart%20visualization%2C%20modern%20workplace%20design%2C%20collaborative%20team%20structure%20diagram%20in%20professional%20office%20environment&width=400&height=300&seq=org-agility&orientation=landscape',
      link: '/insights/organizational-agility'
    },
    {
      title: 'The Talent Retention Revolution',
      excerpt: 'Beyond compensation: creating environments where top talent chooses to stay and grow with your organization.',
      category: 'Talent Strategy',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20group%20of%20professionals%20in%20mentoring%20session%2C%20talent%20development%20workshop%2C%20modern%20corporate%20training%20environment%20with%20warm%20neutral%20aesthetics&width=400&height=300&seq=talent-retention&orientation=landscape',
      link: '/insights/talent-retention-revolution'
    },
    {
      title: 'Measuring Culture Transformation',
      excerpt: 'Data-driven approaches to tracking and accelerating organizational culture change initiatives.',
      category: 'Culture',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Corporate%20culture%20assessment%20meeting%2C%20team%20collaboration%20workshop%2C%20professional%20business%20metrics%20dashboard%20in%20modern%20office%20setting&width=400&height=300&seq=culture-metrics&orientation=landscape',
      link: '/insights/culture-transformation'
    },
    {
      title: 'The Psychology of Change Management',
      excerpt: 'Understanding human behavior patterns to design more effective transformation strategies.',
      category: 'Change Management',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Change%20management%20consulting%20session%2C%20psychological%20assessment%20tools%2C%20professional%20coaching%20environment%20with%20warm%20lighting%20and%20contemporary%20design&width=400&height=300&seq=change-psychology&orientation=landscape',
      link: '/insights/change-psychology'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = scrollRef.current?.querySelectorAll('.insight-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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

    const element = document.querySelector('#insights');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="insights" className="py-32 px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6">Insights</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thought leadership on the evolving landscape of human capital and organizational excellence
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              data-index={index}
              className={`insight-card flex-shrink-0 w-96 bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-1000 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 transform scale-100' 
                  : 'opacity-0 transform scale-95'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-200 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{article.readTime}</span>
                  <i className="ri-arrow-right-line text-amber-200 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
