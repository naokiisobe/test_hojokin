'use client';

import { useState, useEffect, useRef } from 'react';

export default function PricingPlan() {
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
    <section ref={sectionRef} id="pricing" className="py-20 px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            料金プラン
          </h2>
          <div className={`w-24 h-1 bg-blue-400 mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            専門人材を採用するよりも低コストで高い専門性を提供
          </p>
        </div>

        <div className={`bg-white rounded-2xl p-8 shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">月額 10万〜50万円</h3>
            <p className="text-lg text-slate-600">（詳細は要問い合わせ）</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-6 text-lg font-semibold text-slate-700">項目</th>
                  <th className="text-center py-4 px-6 text-lg font-semibold text-red-600">社内採用</th>
                  <th className="text-center py-4 px-6 text-lg font-semibold text-blue-600">当社サービス</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-medium text-slate-700">年間コスト</td>
                  <td className="py-4 px-6 text-center text-slate-600">600万〜1,000万円</td>
                  <td className="py-4 px-6 text-center text-blue-600 font-semibold">120万〜600万円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-medium text-slate-700">導入スピード</td>
                  <td className="py-4 px-6 text-center text-slate-600">3〜6ヶ月</td>
                  <td className="py-4 px-6 text-center text-blue-600 font-semibold">即日〜1週間</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-6 font-medium text-slate-700">採択後支援</td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <i className="ri-close-circle-line text-xl"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <i className="ri-check-circle-line text-xl"></i>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-700">事業コンサルティング</td>
                  <td className="py-4 px-6 text-center text-red-500">
                    <i className="ri-close-circle-line text-xl"></i>
                  </td>
                  <td className="py-4 px-6 text-center text-green-500">
                    <i className="ri-check-circle-line text-xl"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              詳細を問い合わせる
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}