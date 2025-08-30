'use client';

import { useState, useEffect, useRef } from 'react';

export default function CTAMiddle() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-8 relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20office%20building%20with%20glass%20windows%20reflecting%20blue%20sky%2C%20professional%20business%20district%20with%20clean%20architectural%20lines%2C%20corporate%20environment%20with%20blue%20and%20gray%20tones&width=1920&height=800&seq=cta-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          まずは、最適な補助金情報を<br />チェックしませんか？
        </h2>
        
        <p className={`text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          お客様の事業に最適な補助金・助成金を無料で診断いたします。<br />
          まずはお気軽にご相談ください。
        </p>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-12 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            無料で相談する
          </button>
        </div>
      </div>
    </section>
  );
}
