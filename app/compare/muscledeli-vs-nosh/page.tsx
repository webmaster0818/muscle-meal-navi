import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マッスルデリ vs nosh｜筋トレ向け宅配弁当を7項目で徹底比較【2026年】",
  description:
    "マッスルデリとnosh（ナッシュ）を筋トレ・ボディメイクの観点から徹底比較。PFC、価格、メニュー数、味、コスパなど7項目で比較し、目的別のおすすめを解説。",
};

const comparisonItems = [
  { item: "たんぱく質/食", muscledeli: "30〜65g", nosh: "20〜35g", winner: "muscledeli" },
  { item: "カロリー/食", muscledeli: "350〜650kcal", nosh: "200〜400kcal", winner: "nosh" },
  { item: "価格/食", muscledeli: "980円〜", nosh: "599円〜", winner: "nosh" },
  { item: "メニュー数", muscledeli: "約50種類", nosh: "60種類以上", winner: "nosh" },
  { item: "PFC管理の正確さ", muscledeli: "コース別に最適化", nosh: "糖質30g以下統一", winner: "muscledeli" },
  { item: "送料", muscledeli: "一部プラン無料", nosh: "地域別（836〜2,849円）", winner: "muscledeli" },
  { item: "コース選択", muscledeli: "LEAN/MAINTAIN/GAIN", nosh: "1プラン（メニュー選択）", winner: "muscledeli" },
];

const faqs = [
  {
    q: "筋トレ初心者にはどちらがおすすめですか？",
    a: "筋トレ初心者にはnoshがおすすめです。価格が安く、メニュー数が豊富なので、まずは宅配弁当での食事管理に慣れることができます。本格的にPFC管理をしたくなったらマッスルデリにステップアップするのが良いでしょう。",
  },
  {
    q: "本格的にバルクアップしたい場合はどちらですか？",
    a: "マッスルデリのGAINコースが圧倒的におすすめです。1食あたり65gのたんぱく質は業界トップクラスで、noshでは追加のたんぱく質源が必要になります。",
  },
  {
    q: "コスパ重視ならどちらを選ぶべきですか？",
    a: "コスパならnoshが優れています。1食599円〜とマッスルデリの約6割の価格で利用でき、長期継続するほど割引も適用されます。ただしPFC管理の精度はマッスルデリの方が高い点は考慮してください。",
  },
  {
    q: "両方を併用するのはアリですか？",
    a: "併用は非常に賢い選択です。例えば、トレーニング日はマッスルデリ（高たんぱく重視）、休息日はnosh（コスパ重視）という使い分けが効果的。それぞれの長所を活かした食事管理が可能になります。",
  },
  {
    q: "味はどちらがおいしいですか？",
    a: "味の評価は個人差がありますが、口コミではnoshの方がメニューのバリエーションが豊富で飽きにくいと評価される傾向があります。マッスルデリは『たんぱく質量の割においしい』という評価が多いです。",
  },
  {
    q: "女性のダイエット目的ならどちらですか？",
    a: "女性のダイエット目的にはnoshがおすすめです。全メニュー糖質30g以下で200-400kcalに収まり、価格も手頃。マッスルデリのLEANコースも選択肢ですが、たんぱく質が多すぎると感じる場合はnoshの方が使いやすいでしょう。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function MuscledeliVsNosh() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "比較", href: "/#compare" },
            { name: "マッスルデリ vs nosh" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">マッスルデリ vs nosh</h1>
          <p className="text-gray-300">
            筋トレ向け宅配弁当を7項目で徹底比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレ向け宅配弁当の2大人気サービスであるマッスルデリとnosh（ナッシュ）。たんぱく質重視のマッスルデリと、コスパとメニュー数で圧倒するnosh。どちらを選ぶべきか、7つの観点から徹底比較しました。
          </p>
          <p className="text-gray-700 leading-relaxed">
            結論から言えば、たんぱく質量とPFC管理の精度を重視するならマッスルデリ、コスパとメニューの豊富さを重視するならnoshがおすすめです。詳しく見ていきましょう。
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            7項目比較表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">比較項目</th>
                  <th className="py-3 px-4 text-center font-bold">マッスルデリ</th>
                  <th className="py-3 px-4 text-center font-bold">nosh</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{c.item}</td>
                    <td className={`py-3 px-4 text-center ${c.winner === "muscledeli" ? "text-[#16A34A] font-bold" : "text-gray-600"}`}>
                      {c.muscledeli}
                    </td>
                    <td className={`py-3 px-4 text-center ${c.winner === "nosh" ? "text-[#16A34A] font-bold" : "text-gray-600"}`}>
                      {c.nosh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who should choose which */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            こんな人におすすめ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-[#16A34A]">
              <h3 className="font-bold text-lg text-[#16A34A] mb-4">マッスルデリがおすすめな人</h3>
              <ul className="space-y-3">
                {[
                  "たんぱく質量を最優先したい方",
                  "増量期でカロリーもしっかり摂りたい方",
                  "PFCの正確な管理をしたい方",
                  "目的別（減量/維持/増量）に選びたい方",
                  "プロテインの回数を減らしたい方",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#16A34A] flex-shrink-0 font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/review/muscle-deli/" className="inline-block mt-4 text-sm text-[#16A34A] hover:underline font-medium">
                マッスルデリの詳細レビュー →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border-2 border-gray-800">
              <h3 className="font-bold text-lg text-gray-800 mb-4">noshがおすすめな人</h3>
              <ul className="space-y-3">
                {[
                  "コスパを重視したい方",
                  "メニューの豊富さを求める方",
                  "糖質制限ダイエットをしたい方",
                  "筋トレ初心者でまずは手軽に始めたい方",
                  "家族で利用したい方",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-gray-800 flex-shrink-0 font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/review/nosh/" className="inline-block mt-4 text-sm text-[#16A34A] hover:underline font-medium">
                noshの詳細レビュー →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#F9FAFB] rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-sm text-gray-800 hover:text-[#16A34A]">
                  <span className="flex items-center gap-2">
                    <span className="text-[#16A34A] font-bold">Q.</span>
                    {faq.q}
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                  <span className="text-gray-400 font-bold mr-1">A.</span>{faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">自分に合った宅配弁当を見つけよう</h2>
            <p className="text-gray-300 text-sm mb-6">全サービスを比較したランキングをチェック</p>
            <Link
              href="/"
              className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ランキングに戻る
            </Link>
          </div>

          <h3 className="font-bold text-lg mb-3">関連ページ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
              { name: "増量期おすすめ", href: "/purpose/bulking/" },
              { name: "減量期おすすめ", href: "/purpose/cutting/" },
              { name: "PFCバランス計算", href: "/knowledge/pfc-calculator/" },
            ].map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="bg-[#F9FAFB] hover:bg-green-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:text-[#16A34A] transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
