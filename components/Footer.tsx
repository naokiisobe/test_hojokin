
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              <img 
                src="https://static.readdy.ai/image/5bc95f31586e61d564a94a6fb77b469c/d23467623ddda8d70b1e06cd480d69ba.png"
                alt="Company Logo"
                className="h-16 w-auto mb-4"
              />
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              補助金・助成金活用支援から採択後の事業推進まで。<br />
              お客様の経営戦略に寄り添う伴走型コンサルティング。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">サービス</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                補助金調査・提案
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                申請サポート
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                採択後支援
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                事業コンサルティング
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">お問い合わせ</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                03-6432-4789
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                info@company.com
              </p>
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                東京都港区虎ノ門３丁目７−５ 虎ノ門Roots21ビル
              </p>
              <p className="text-sm">
                営業時間: 平日 9:00-18:00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            2024 株式会社KT Partners. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              利用規約
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}