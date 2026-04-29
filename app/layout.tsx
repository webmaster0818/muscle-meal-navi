import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "マッスルミールナビ | 筋トレする人のための宅配弁当比較",
  description:
    "筋トレ・ボディメイクに最適な宅配弁当を徹底比較。PFC・価格・口コミで選ぶおすすめランキング。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        {/* Header */}
        <Header />

        {/* PR notice */}
        <div className="bg-gray-100 text-center py-1">
          <span className="text-xs text-gray-500">PRを含みます</span>
        </div>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] text-gray-400 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-[#16A34A] font-bold text-lg mb-3">マッスルミールナビ</h3>
                <p className="text-sm leading-relaxed">
                  筋トレ・フィットネスに取り組む方のための宅配弁当比較サイト。
                  PFC（たんぱく質・脂質・炭水化物）バランスを重視した食事選びをサポートします。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">コンテンツ</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#ranking" className="hover:text-[#16A34A] transition-colors">ランキング</Link></li>
                  <li><Link href="/#purpose" className="hover:text-[#16A34A] transition-colors">目的別おすすめ</Link></li>
                  <li><Link href="/#compare" className="hover:text-[#16A34A] transition-colors">サービス比較</Link></li>
                  <li><Link href="/faq/" className="hover:text-[#16A34A] transition-colors">よくある質問</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">レビュー</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/review/muscle-deli/" className="hover:text-[#16A34A] transition-colors">マッスルデリ</Link></li>
                  <li><Link href="/review/nosh/" className="hover:text-[#16A34A] transition-colors">nosh(ナッシュ)</Link></li>
                  <li><Link href="/review/kinniku-shokudo/" className="hover:text-[#16A34A] transition-colors">筋肉食堂DELI</Link></li>
                  <li><Link href="/review/mitsuboshi/" className="hover:text-[#16A34A] transition-colors">三ツ星ファーム</Link></li>
                  <li><Link href="/review/woofoods/" className="hover:text-[#16A34A] transition-colors">WooFoods</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
              <p>&copy; 2024-2026 マッスルミールナビ All Rights Reserved.</p>
              <p className="mt-1">当サイトはアフィリエイトプログラムに参加しています。</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
