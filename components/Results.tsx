'use client';

import { useState, useEffect, useRef } from 'react';

export default function Results() {
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

  const cases = [
    {
      company: '製造業A社',
      industry: '製造業',
      result: '補助金3,000万円採択、設備投資を実現',
      detail: '老朽化した生産設備の更新により、生産効率が30%向上。採択後の設備導入から稼働開始まで継続サポートを実施。',
      amount: '3,000万円',
      type: 'ものづくり補助金'
    },
    {
      company: 'IT企業B社',
      industry: 'IT・システム',
      result: '助成金で人材育成プロジェクトを推進',
      detail: 'デジタル人材の育成プログラムを構築。従業員のスキルアップにより、新規事業の立ち上げに成功。',
      amount: '800万円',
      type: '人材開発助成金'
    },
    {
      company: 'サービス業C社',
      industry: 'サービス業',
      result: '採択後のマーケティング強化を伴走支援',
      detail: 'ECサイトの構築と販売促進により、オンライン売上が前年比250%増加。デジタルマーケティング戦略も併せて支援。',
      amount: '1,500万円',
      type: 'IT導入補助金'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-slate-800 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            導入実績
          </h2>
          <div className={`w-24 h-1 bg-blue-600 mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((case_item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{case_item.company}</h3>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {case_item.industry}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {case_item.amount}
                  </span>
                  <span className="text-slate-500 text-sm">{case_item.type}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                {case_item.result}
              </h4>
              
              <p className="text-slate-600 leading-relaxed">
                {case_item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">累計採択実績</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-slate-600 text-sm">採択件数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12億円</div>
                <div className="text-slate-600 text-sm">総採択金額</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-slate-600 text-sm">採択率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-slate-600 text-sm">顧客満足度</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}