
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20business%20meeting%20room%20with%20modern%20executives%20discussing%20strategy%20around%20conference%20table%2C%20natural%20lighting%20through%20large%20windows%2C%20sophisticated%20corporate%20environment%20with%20navy%20blue%20and%20gray%20tones%2C%20clean%20minimal%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 w-full px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-wide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              補助金で終わらせない。<br />
              <span className="text-blue-300 tracking-wider">経営と事業を伸ばす</span><br />
              <span className="tracking-widest">伴走型コンサルティング</span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              申請から採択後の報告業務まで。さらに資金を活用した事業・プロダクトの成長戦略までを一気通貫で伴走支援。<br />
              中長期の経営計画に補助金を組み込み、成果につなげます。
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                無料で相談する
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                最適な補助金を診断する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
