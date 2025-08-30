'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/5bc95f31586e61d564a94a6fb77b469c/d23467623ddda8d70b1e06cd480d69ba.png"
              alt="Company Logo"
              className="h-14 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-100 hover:text-blue-300 transition-colors font-medium">
              サービス
            </Link>
            <Link href="#strengths" className="text-slate-100 hover:text-blue-300 transition-colors font-medium">
              強み
            </Link>
            <Link href="#pricing" className="text-slate-100 hover:text-blue-300 transition-colors font-medium">
              料金
            </Link>
            <Link href="#results" className="text-slate-100 hover:text-blue-300 transition-colors font-medium">
              実績
            </Link>
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
            </button>
          </nav>

          <button className="md:hidden text-slate-100">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}