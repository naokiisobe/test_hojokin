
'use client';

import { useState, useEffect, useRef } from 'react';

export default function CTAFinal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    consultation_type: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      industry: '',
      consultation_type: '',
      message: ''
    });
  };

  return (
    <>
      <section 
        ref={sectionRef} 
        id="contact"
        className="py-24 px-8 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.9)), url('https://readdy.ai/api/search-image?query=Successful%20business%20team%20celebrating%20achievement%20in%20modern%20office%2C%20professional%20handshake%20and%20teamwork%2C%20bright%20future%20concept%20with%20warm%20golden%20lighting&width=1920&height=1000&seq=final-cta&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-wide transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            知らなければ失う資金、<br />
            <span className="text-yellow-400 tracking-wider">活かせば伸びる未来。</span>
          </h2>
          
          <p className={`text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            お客様の事業に最適な補助金・助成金を見つけ、採択後の成果創出まで徹底サポート。<br />
            まずは無料相談で、あなたの事業にどのような可能性があるかお聞かせください。
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              今すぐ無料相談を申し込む
            </button>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              資料請求・問い合わせ
            </button>
          </div>

          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <i className="ri-phone-line text-3xl text-yellow-400 mb-4"></i>
              <h3 className="text-white font-semibold mb-2">お電話でのご相談</h3>
              <p className="text-gray-300 text-sm">03-6432-4789</p>
              <p className="text-gray-400 text-xs mt-1">平日 9:00-18:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <i className="ri-mail-line text-3xl text-blue-400 mb-4"></i>
              <h3 className="text-white font-semibold mb-2">メールでのお問い合わせ</h3>
              <p className="text-gray-300 text-sm">info@company.com</p>
              <p className="text-gray-400 text-xs mt-1">24時間受付</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <i className="ri-time-line text-3xl text-green-400 mb-4"></i>
              <h3 className="text-white font-semibold mb-2">初回相談</h3>
              <p className="text-gray-300 text-sm">完全無料</p>
              <p className="text-gray-400 text-xs mt-1">60分まで</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800">お問い合わせフォーム</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">お名前 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">会社名 *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">業界</label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none pr-8"
                    >
                      <option value="">選択してください</option>
                      <option value="manufacturing">製造業</option>
                      <option value="it">IT・システム</option>
                      <option value="service">サービス業</option>
                      <option value="retail">小売業</option>
                      <option value="construction">建設業</option>
                      <option value="other">その他</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-3 text-slate-400"></i>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-2">相談内容</label>
                  <div className="relative">
                    <select
                      name="consultation_type"
                      value={formData.consultation_type}
                      onChange={(e) => setFormData({...formData, consultation_type: e.target.value})}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none pr-8"
                    >
                      <option value="">選択してください</option>
                      <option value="subsidy_search">補助金の調査・提案</option>
                      <option value="application_support">申請サポート</option>
                      <option value="after_adoption">採択後支援</option>
                      <option value="business_consulting">事業コンサルティング</option>
                      <option value="other">その他</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-3 text-slate-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">お問い合わせ内容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  maxLength={500}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="現在の課題や相談したい内容をお聞かせください"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
