import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "nosh vs 筋肉食堂DELI｜宅配弁当を7項目で徹底比較【2026年最新】",
  description:
    "nosh（ナッシュ）と筋肉食堂DELIを筋トレ・ボディメイクの観点から徹底比較。たんぱく質量、価格、味、PFCバランス、コース内容など7項目で比較し、目的別のおすすめを解説します。",
  keywords: "nosh 筋肉食堂DELI 比較,ナッシュ 筋肉食堂 どっち,宅配弁当 筋トレ 比較",
};

const comparisonItems = [
  { item: "たんぱく質/食", nosh: "20〜30g", kinniku: "40〜65g", winner: "kinniku" },
  { item: "価格/食", nosh: "599円〜", kinniku: "1,000円〜", winner: "nosh" },
  { item: "メニュー数", nosh: "60種類以上", kinniku: "約40種類", winner: "nosh" },
  { item: "糖質管理", nosh: "全メニュー30g以下", kinniku: "コース別に最適化", winner: "nosh" },
  { item: "味・満足度", nosh: "バリエーション豊富", kinniku: "レストラン品質", winner: "kinniku" },
  { item: "コース選択", nosh: "1プラン（メニュー選択）", kinniku: "ダイエット/エブリデイ/パワー", winner: "kinniku" },
  { item: "送料", nosh: "地域別（836〜2,849円）", kinniku: "地域別（780〜2,500円）", winner: "kinniku" },
];

const noshMerits = [
  "1食599円〜の圧倒的なコストパフォーマンス",
  "60種類以上の豊富なメニューで飽きにくい",
  "全メニュー糖質30g以下で糖質制限に最適",
  "初回割引やランク制度で続けるほどお得",
  "家族全員で利用しやすいバリエーション",
];

const noshDemerits = [
  "たんぱく質量がやや控えめ（20〜30g）",
  "筋トレ特化のPFC設計ではない",
  "バルクアップ期には物足りない場合がある",
];

const kinnikuMerits = [
  "1食あたりたんぱく質40〜65gの圧倒的な高たんぱく",
  "有名レストラン「筋肉食堂」監修の味",
  "目的別3コースで最適なPFCバランス",
  "筋トレ・ボディメイクに完全特化した設計",
  "パワーコースで本格的なバルクアップに対応",
];

const kinnikuDemerits = [
  "1食1,000円〜と価格がやや高め",
  "メニュー数がnoshより少ない",
  "カジュアルな食事管理にはオーバースペック",
];

const faqs = [
  {
    q: "筋トレガチ勢にはどちらがおすすめですか？",
    a: "筋トレガチ勢には筋肉食堂DELIがおすすめです。1食あたりたんぱく質40〜65gは業界トップクラスで、パワーコースなら本格的なバルクアップにも対応。有名筋肉食堂が監修しているため、味の満足度も高いです。",
  },
  {
    q: "コスパ重視で筋トレ向けの弁当を選ぶならどちらですか？",
    a: "コスパ重視ならnosh（ナッシュ）が圧倒的におすすめです。1食599円〜と筋肉食堂DELIの約6割の価格で利用でき、たんぱく質も20〜30gと十分な量が摂れます。長期継続するほど割引も適用されるため、コストを抑えた食事管理が可能です。",
  },
  {
    q: "ダイエット目的ならどちらが効果的ですか？",
    a: "ダイエット目的では、糖質制限を重視するならnosh（全メニュー糖質30g以下）、たんぱく質をしっかり摂りながら痩せたいなら筋肉食堂DELIのダイエットコースがおすすめです。noshは低糖質で価格も手頃、筋肉食堂DELIは高たんぱくで筋肉を維持しながらの減量に向いています。",
  },
  {
    q: "筋肉食堂DELIの3コースの違いは何ですか？",
    a: "筋肉食堂DELIには3つのコースがあります。「ダイエットコース」は低カロリー・高たんぱくで減量向け、「エブリデイコース」は日常使いに適したバランス型、「パワーコース」は高カロリー・超高たんぱくでバルクアップ向けです。目的に合わせて選べるのが大きなメリットです。",
  },
  {
    q: "両方のサービスを併用するのはアリですか？",
    a: "併用は非常に効果的です。トレーニング日は筋肉食堂DELIのパワーコース（高たんぱく重視）、休息日やコストを抑えたい日はnosh（コスパ重視）という使い分けがおすすめ。それぞれの長所を活かした合理的な食事管理が実現できます。",
  },
  {
    q: "noshで筋トレ向けのメニューを選ぶコツはありますか？",
    a: "noshで筋トレ向けメニューを選ぶなら、鶏むね肉やサーモンなど高たんぱく食材を使ったメニューを優先しましょう。栄養成分表示でたんぱく質25g以上のものを選び、プロテインドリンクと組み合わせることで、1食あたり40g以上のたんぱく質摂取も可能です。",
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

export default function NoshVsKinnikuShokudo() {
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
            { name: "nosh vs 筋肉食堂DELI" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">nosh vs 筋肉食堂DELI</h1>
          <p className="text-gray-300">
            コスパの王者 vs 高たんぱくの王者を7項目で徹底比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            宅配弁当の中でも特に人気の高いnosh（ナッシュ）と、筋トレ愛好家から圧倒的な支持を集める筋肉食堂DELI。コスパとメニュー数で圧倒するnoshと、レストラン品質の高たんぱくメニューが魅力の筋肉食堂DELI。どちらを選ぶべきか、7つの項目から徹底比較しました。
          </p>
          <p className="text-gray-700 leading-relaxed">
            結論から言えば、本格的に筋トレに取り組むガチ勢には筋肉食堂DELI、コスパを重視しながら手軽に食事管理を始めたい方にはnoshがおすすめです。それぞれの強みと弱みを詳しく見ていきましょう。
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
                  <th className="py-3 px-4 text-center font-bold">nosh</th>
                  <th className="py-3 px-4 text-center font-bold">筋肉食堂DELI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{c.item}</td>
                    <td className={`py-3 px-4 text-center ${c.winner === "nosh" ? "text-[#16A34A] font-bold" : "text-gray-600"}`}>
                      {c.nosh}
                    </td>
                    <td className={`py-3 px-4 text-center ${c.winner === "kinniku" ? "text-[#16A34A] font-bold" : "text-gray-600"}`}>
                      {c.kinniku}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Merits / Demerits */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メリット・デメリット比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* nosh */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-800 mb-4">nosh（ナッシュ）</h3>
              <h4 className="text-sm font-bold text-[#16A34A] mb-2">メリット</h4>
              <ul className="space-y-2 mb-4">
                {noshMerits.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#16A34A] flex-shrink-0">&#9675;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-bold text-red-500 mb-2">デメリット</h4>
              <ul className="space-y-2">
                {noshDemerits.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">&#9651;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Kinniku */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-800 mb-4">筋肉食堂DELI</h3>
              <h4 className="text-sm font-bold text-[#16A34A] mb-2">メリット</h4>
              <ul className="space-y-2 mb-4">
                {kinnikuMerits.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#16A34A] flex-shrink-0">&#9675;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-bold text-red-500 mb-2">デメリット</h4>
              <ul className="space-y-2">
                {kinnikuDemerits.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">&#9651;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who should choose which */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            目的別おすすめ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border-2 border-gray-800">
              <h3 className="font-bold text-lg text-gray-800 mb-4">noshがおすすめな人</h3>
              <ul className="space-y-3">
                {[
                  "コスパを重視して長く続けたい方",
                  "糖質制限ダイエットをしたい方",
                  "メニューの豊富さで飽きずに続けたい方",
                  "筋トレ初心者でまずは手軽に始めたい方",
                  "家族みんなで利用したい方",
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
            <div className="bg-white rounded-lg p-6 border-2 border-[#16A34A]">
              <h3 className="font-bold text-lg text-[#16A34A] mb-4">筋肉食堂DELIがおすすめな人</h3>
              <ul className="space-y-3">
                {[
                  "筋トレガチ勢でたんぱく質量を最優先したい方",
                  "バルクアップ期で高カロリー・高たんぱくが必要な方",
                  "レストラン品質の味にこだわりたい方",
                  "目的別にPFCバランスを最適化したい方",
                  "プロテインの回数を減らしたい方",
                ].map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-[#16A34A] flex-shrink-0 font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/review/kinniku-shokudo/" className="inline-block mt-4 text-sm text-[#16A34A] hover:underline font-medium">
                筋肉食堂DELIの詳細レビュー →
              </Link>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            まとめ：結局どっちを選ぶべき？
          </h2>
          <div className="bg-[#F9FAFB] rounded-xl p-6 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              noshと筋肉食堂DELIはそれぞれ異なるターゲットに最適化されたサービスです。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-800 mb-2">筋トレガチ勢なら</p>
                <p className="text-sm text-gray-600">
                  筋肉食堂DELIのパワーコースで1食65gのたんぱく質を確保。レストラン品質の味で、トレーニングのモチベーションも維持できます。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-bold text-gray-800 mb-2">コスパ重視なら</p>
                <p className="text-sm text-gray-600">
                  noshの599円〜は業界最安クラス。たんぱく質20〜30gでも、プロテインと併用すれば十分な摂取量を確保できます。
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              迷ったら、まずnoshで宅配弁当の食事管理に慣れてから、より本格的なたんぱく質管理が必要になった段階で筋肉食堂DELIに切り替えるのが賢い選択です。
            </p>
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
              { name: "マッスルデリ vs nosh", href: "/compare/muscledeli-vs-nosh/" },
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
              { name: "コスパランキング", href: "/compare/cost-ranking/" },
              { name: "マッスルデリ レビュー", href: "/review/muscle-deli/" },
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
