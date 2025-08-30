'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServiceOverview() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // ステップを順番に表示するアニメーション
            setTimeout(() => {
              for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                  setVisibleSteps(prev => [...prev, i]);
                }, i * 300);
              }
            }, 500);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      step: 'STEP 01',
      title: '補助金・助成金の調査・提案',
      description: '貴社の事業内容、成長ステージ、今後の戦略に最適な補助金・助成金を徹底的に調査し、獲得可能性の高い制度をご提案いたします。',
      icon: 'ri-search-line',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      step: 'STEP 02',
      title: '申請書類の作成支援',
      description: '複雑な申請書類の作成を専門家がサポート。事業計画書から技術資料まで、採択率を高める書類作成をお手伝いします。',
      icon: 'ri-file-edit-line',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      step: 'STEP 03',
      title: '採択後の報告業務サポート',
      description: '採択後の面倒な報告業務も安心。進捗報告から成果報告まで、確実な手続きをサポートし、返還リスクを回避します。',
      icon: 'ri-file-list-3-line',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    {
      step: 'STEP 04',
      title: '資金活用の事業戦略策定',
      description: '獲得した資金を最大限活用するための事業戦略を策定。ROIを最大化し、持続的な成長につなげる計画を立案します。',
      icon: 'ri-lightbulb-line',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    },
    {
      step: 'STEP 05',
      title: '成果創出までの伴走支援',
      description: '計画の実行から成果創出まで継続的にサポート。定期的なモニタリングと改善提案で、確実な成果達成を実現します。',
      icon: 'ri-rocket-line',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-red-100'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 px-8 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-wider transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-blue-600 tracking-widest">サービス概要</span>
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            補助金の調査から採択後の成果創出まで、時系列に沿って継続的にサポート。<br />
            一貫した伴走により、資金を確実に事業成長につなげます。
          </p>
        </div>

        {/* デスクトップ版 - 水平フロー */}
        <div className="hidden lg:block relative">
          {/* 水平接続線 */}
          <div className="absolute top-1/2 left-16 right-16 h-1 bg-gradient-to-r from-blue-300 via-green-300 via-purple-300 via-orange-300 to-red-300 transform -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid grid-cols-5 gap-8 relative z-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative text-center transition-all duration-1000 ${visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                style={{ transitionDelay: `${500 + index * 300}ms` }}
              >
                {/* ステップ番号サークル */}
                <div className="relative mx-auto mb-6">
                  <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-r ${service.color} text-white rounded-full shadow-xl relative z-20 border-4 border-white`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  {/* 右向き矢印（最後以外） - 位置調整 */}
                  {index < services.length - 1 && (
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-30">
                      <i className={`ri-arrow-right-line text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}></i>
                    </div>
                  )}
                </div>

                {/* アイコンコンテナ */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-slate-200`}>
                  <i className={`${service.icon} text-2xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}></i>
                </div>

                {/* ステップラベル */}
                <div className={`text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2 tracking-wide`}>
                  {service.step}
                </div>

                {/* タイトル */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight tracking-wide">
                  {service.title}
                </h3>

                {/* 説明文 */}
                <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* モバイル版 - 縦フロー */}
        <div className="block lg:hidden space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: `${500 + index * 300}ms` }}
            >
              <div className={`${service.bgColor} rounded-2xl p-6 shadow-lg border border-slate-200/50`}>
                <div className="flex items-start space-x-4">
                  {/* 左側 - 番号とアイコン */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r ${service.color} text-white rounded-full mb-3 shadow-lg`}>
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg shadow-md flex items-center justify-center border border-slate-200`}>
                      <i className={`${service.icon} text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}></i>
                    </div>
                  </div>

                  {/* 右側 - コンテンツ */}
                  <div className="flex-1 pt-1">
                    <div className={`text-xs font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1 tracking-wide`}>
                      {service.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-wide">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* 下向き矢印（最後以外） */}
              {index < services.length - 1 && (
                <div className="flex items-center justify-center py-4">
                  <i className={`ri-arrow-down-line text-2xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 下部メッセージ */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-flow-chart text-3xl text-blue-600 mr-3"></i>
              <h3 className="text-2xl font-bold text-slate-800 tracking-wider">
                連続した流れで確実な成果を実現
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto tracking-wide">
              各ステップが有機的に連携し、補助金獲得から事業成長まで切れ目のない支援を提供。
              左から右へと流れるような一貫したサポートで、貴社の成功を確実に導きます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}