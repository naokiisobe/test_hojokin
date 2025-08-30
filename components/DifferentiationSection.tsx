'use client';

import { useState, useEffect, useRef } from 'react';

export default function DifferentiationSection() {
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

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img
              src="https://readdy.ai/api/search-image?query=Business%20consultant%20working%20with%20client%20on%20strategy%20planning%2C%20professional%20meeting%20in%20modern%20office%2C%20teamwork%20and%20collaboration%2C%20warm%20lighting%20with%20professional%20atmosphere&width=800&height=600&seq=differentiation&orientation=landscape"
              alt="差別化イメージ"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-4xl font-bold text-white mb-8">
              なぜ私たちが選ばれるのか
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                他社の補助金支援は申請代行で終わることが多い中、私たちは採択後に本当に成果が出るところまで伴走します。
              </p>
              
              <p>
                経営戦略や新規事業、プロダクト開発にまで踏み込み、補助金を<span className="text-blue-400 font-semibold">"資金調達"</span>ではなく<span className="text-green-400 font-semibold">"経営の武器"</span>へと変えていきます。
              </p>
              
              <p>
                単なる申請支援業者ではありません。お客様の事業パートナーとして、長期的な成長を共に目指していく。それが私たちのスタンスです。
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">採択後フォロー率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">3年</div>
                <div className="text-gray-400 text-sm">平均継続支援期間</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}