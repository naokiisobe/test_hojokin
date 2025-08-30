
'use client';

import { useState, useEffect, useRef } from 'react';

export default function Strengths() {
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

  const strengths = [
    {
      icon: 'ri-award-line',
      title: '採択率95%の実績',
      description: '豊富な経験と高度な専門知識により、業界トップクラスの採択率を実現。お客様の事業計画を最適化し、確実な採択を目指します。',
      stats: '累計採択件数 1,200件超'
    },
    {
      icon: 'ri-team-line',
      title: '専門チーム体制',
      description: '中小企業診断士、税理士、技術士などの専門家がチームを組成。多角的な視点から最適な提案を行います。',
      stats: '専門家数 25名'
    },
    {
      icon: 'ri-time-line',
      title: '迅速な対応力',
      description: '急な公募開始にも対応可能な体制を整備。お問い合わせから提案まで最短3営業日で対応いたします。',
      stats: '平均対応時間 48時間'
    },
    {
      icon: 'ri-shield-check-line',
      title: '採択後も安心サポート',
      description: '採択後の報告業務から成果創出まで継続的にサポート。返還リスクを最小化し、確実な成果達成をお手伝いします。',
      stats: '返還率 0.1%未満'
    }
  ];

  return (
    <section ref={sectionRef} id="strengths" className="py-24 px-8 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-wider transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            選ばれる<span className="text-blue-600 tracking-widest">4つの理由</span>
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            多くの企業様に選ばれる理由は、確かな実績と専門性、そして継続的なサポート体制にあります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl mr-4">
                  <i className={`${strength.icon} text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 tracking-wide">{strength.title}</h3>
                  <p className="text-blue-600 font-semibold text-sm tracking-wide">{strength.stats}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed tracking-wide">{strength.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-wider">
              実績に裏打ちされた確かなサービス
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto tracking-wide">
              長年の経験と豊富な実績により培われた専門性で、お客様の事業成長を力強くサポートします。
              まずは無料相談で、貴社に最適な補助金をご提案いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
