
'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProcessFlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    const steps = element?.querySelectorAll('.process-step');
    steps?.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      icon: 'ri-question-answer-line',
      title: '現状ヒアリング',
      description: 'お客様の事業内容、課題、目標を詳しくお聞きし、最適な支援プランを検討します。',
      color: 'bg-blue-500'
    },
    {
      icon: 'ri-search-2-line',
      title: '補助金・助成金の調査と提案',
      description: 'ヒアリング内容をもとに、最適な補助金・助成金を調査し、具体的な提案をいたします。',
      color: 'bg-green-500'
    },
    {
      icon: 'ri-file-check-line',
      title: '申請・採択サポート',
      description: '申請書の作成から提出、採択までの全工程を丁寧にサポートいたします。',
      color: 'bg-purple-500'
    },
    {
      icon: 'ri-team-line',
      title: '採択後の事業推進支援',
      description: '採択後の報告業務から、実際のプロジェクト推進まで継続的に伴走します。',
      color: 'bg-orange-500'
    },
    {
      icon: 'ri-line-chart-line',
      title: '中長期経営計画への落とし込み',
      description: '補助金を活用した中長期の経営戦略を策定し、持続的な成長をサポートします。',
      color: 'bg-red-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-800 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            サポートの進め方
          </h2>
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            お客様との対話を重視し、段階的に成果を積み重ねていく当社独自のアプローチをご紹介します
          </p>
        </div>

        {/* Desktop Version - Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Lines */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-slate-300 z-0"></div>
            
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {processes.map((process, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`process-step relative text-center transition-all duration-1000 ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  {/* Step Circle with Number */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center shadow-lg relative z-20`}>
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-100">
                    <i className={`${process.icon} text-3xl text-slate-700`}></i>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
                    {process.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version - Vertical Flow */}
        <div className="block lg:hidden space-y-8">
          {processes.map((process, index) => (
            <div
              key={index}
              data-index={index}
              className={`process-step flex items-start space-x-4 transition-all duration-1000 ${visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Left Side - Number and Icon */}
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 ${process.color} rounded-full flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100">
                  <i className={`${process.icon} text-xl text-slate-700`}></i>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </div>

              {/* Connection Line for Mobile */}
              {index < processes.length - 1 && (
                <div className="absolute left-6 mt-24 w-0.5 h-8 bg-slate-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <i className="ri-lightbulb-line text-2xl text-blue-600 mb-3"></i>
            <p className="text-slate-700 leading-relaxed">
              <strong>お客様との対話を重視</strong>したアプローチで、単なる申請代行ではなく、
              <br />事業の本質的な成長につながる支援を心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
