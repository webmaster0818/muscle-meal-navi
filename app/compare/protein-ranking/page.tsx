import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "宅配弁当たんぱく質ランキング｜1食あたりで比較【2026年最新】",
  description:
    "宅配弁当10社のたんぱく質含有量を1食あたりで徹底比較。筋トレ・ボディメイクに最適な高たんぱく宅配弁当をランキング形式で紹介。PFC・価格・コスパも合わせて解説。",
};

const rankings = [
  { rank: 1, name: "マッスルデリ（GAIN）", protein: "55〜65g", calories: "550〜650kcal", price: "1,280円〜", proteinPerYen: "約50g/1,000円", href: "/review/muscle-deli/" },
  { rank: 2, name: "筋肉食堂DELI（パワー）", protein: "40〜60g", calories: "500〜700kcal", price: "1,180円〜", proteinPerYen: "約42g/1,000円", href: "/review/kinniku-shokudo/" },
  { rank: 3, name: "MORE THAN DELI", protein: "30〜50g", calories: "400〜500kcal", price: "1,080円〜", proteinPerYen: "約37g/1,000円", href: "/review/morethandeli/" },
  { rank: 4, name: "マッスルデリ（MAINTAIN）", protein: "40〜50g", calories: "450〜550kcal", price: "1,080円〜", proteinPerYen: "約42g/1,000円", href: "/review/muscle-deli/" },
  { rank: 5, name: "Dietician（MEDIUM）", protein: "35〜40g", calories: "450〜550kcal", price: "998円〜", proteinPerYen: "約38g/1,000円", href: "/review/dietician/" },
  { rank: 6, name: "マッスルデリ（LEAN）", protein: "30〜40g", calories: "350〜450kcal", price: "980円〜", proteinPerYen: "約36g/1,000円", href: "/review/muscle-deli/" },
  { rank: 7, name: "Dietician（SMALL）", protein: "30〜35g", calories: "350〜450kcal", price: "898円〜", proteinPerYen: "約36g/1,000円", href: "/review/dietician/" },
  { rank: 8, name: "WooFoods", protein: "25〜35g", calories: "300〜450kcal", price: "798円〜", proteinPerYen: "約38g/1,000円", href: "/review/woofoods/" },
  { rank: 9, name: "nosh（ナッシュ）", protein: "20〜35g", calories: "200〜400kcal", price: "599円〜", proteinPerYen: "約46g/1,000円", href: "/review/nosh/" },
  { rank: 10, name: "三ツ星ファーム", protein: "15〜25g", calories: "350kcal以下", price: "680円〜", proteinPerYen: "約29g/1,000円", href: "/review/mitsuboshi/" },
];

const faqs = [
  {
    q: "1食あたりのたんぱく質はどのくらい必要ですか？",
    a: "1日のたんぱく質目標が体重×2g（体重70kgなら140g）の場合、3食で割ると1食あたり約47gが目安です。プロテインで30g程度補う想定なら、1食あたり37g前後の宅配弁当を選ぶと良いでしょう。",
  },
  {
    q: "たんぱく質が多い=おすすめですか？",
    a: "必ずしもそうとは限りません。たんぱく質量と合わせて、脂質量・カロリー・価格・味のバランスも重要です。例えばnoshはたんぱく質量では上位ではありませんが、コスパとメニューの豊富さで高い評価を得ています。",
  },
  {
    q: "たんぱく質のコスパが最も良いのはどこですか？",
    a: "1,000円あたりのたんぱく質量で見ると、マッスルデリのGAINコース（約50g/1,000円）が最も効率的です。ただし、nosh（約46g/1,000円）も1食あたりの価格が安い分、総合的なコスパは優秀です。",
  },
  {
    q: "女性に必要なたんぱく質量はどのくらいですか？",
    a: "筋トレをしている女性の場合、体重×1.5-2gが目安です。体重55kgなら83-110g/日が目標。1食あたり25-35g程度のnoshやDieticianのSMALL PLANが使いやすいでしょう。",
  },
  {
    q: "たんぱく質の摂りすぎによるデメリットはありますか？",
    a: "健康な成人であれば、体重×2-3g程度のたんぱく質摂取は安全とされています。ただし、腎臓に持病がある方は医師に相談してください。また、極端に多い摂取は消化器系の不調を招く場合があります。",
  },
  {
    q: "動物性たんぱく質と植物性たんぱく質の違いは？",
    a: "動物性たんぱく質（肉・魚・卵）は必須アミノ酸のバランスが良く、筋合成に効果的です。宅配弁当の多くは動物性たんぱく質がメインで、筋トレとの相性は良好です。植物性たんぱく質も補助的に摂ると、食物繊維やビタミンも一緒に摂取できます。",
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

export default function ProteinRanking() {
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
            { name: "たんぱく質ランキング" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">宅配弁当たんぱく質ランキング</h1>
          <p className="text-gray-300">
            1食あたりのたんぱく質量で10社を徹底比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレ・ボディメイクにおいて最も重要な栄養素であるたんぱく質。宅配弁当を選ぶ際も、1食あたりのたんぱく質含有量は最重要の比較項目です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本ページでは、主要宅配弁当10社のたんぱく質量を1食あたりで比較し、ランキング形式でまとめました。たんぱく質量だけでなく、カロリー・価格・1,000円あたりのたんぱく質量（コスパ）も合わせて紹介します。
          </p>
        </section>

        {/* Ranking Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            たんぱく質ランキング（1食あたり）
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-3 text-center font-bold">順位</th>
                  <th className="py-3 px-3 text-left font-bold">サービス名</th>
                  <th className="py-3 px-3 text-center font-bold">たんぱく質</th>
                  <th className="py-3 px-3 text-center font-bold">カロリー</th>
                  <th className="py-3 px-3 text-center font-bold">価格</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((r, i) => (
                  <tr key={r.rank} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-block w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${r.rank <= 3 ? "bg-[#16A34A] text-white" : "bg-gray-200 text-gray-600"}`}>
                        {r.rank}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <Link href={r.href} className="text-gray-800 hover:text-[#16A34A] font-medium">
                        {r.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-center font-bold text-[#16A34A]">{r.protein}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{r.calories}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Key insights */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            ランキングから見えるポイント
          </h2>
          <div className="space-y-4">
            <div className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
              <h3 className="font-bold text-[#16A34A] mb-2">たんぱく質量トップはマッスルデリGAIN</h3>
              <p className="text-sm text-gray-600 leading-relaxed">1食あたり最大65gのたんぱく質は圧倒的。プロテインシェイク1杯分以上のたんぱく質を食事だけで摂取でき、増量期の強い味方です。</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
              <h3 className="font-bold text-[#16A34A] mb-2">コスパ最強はnosh</h3>
              <p className="text-sm text-gray-600 leading-relaxed">1,000円あたり約46gのたんぱく質を摂取可能。1食599円〜と圧倒的な低価格で、長期的な食事管理に最も適しています。</p>
            </div>
            <div className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
              <h3 className="font-bold text-[#16A34A] mb-2">30g以上を確保できるのは上位6社</h3>
              <p className="text-sm text-gray-600 leading-relaxed">筋トレの効果を最大化するには1食30g以上のたんぱく質が推奨されます。ランキング上位6社（マッスルデリ各コース、筋肉食堂、MORE THAN DELI、Dietician）がこの基準を満たしています。</p>
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
            <h2 className="text-xl font-bold mb-3">高たんぱく宅配弁当を始めよう</h2>
            <p className="text-gray-300 text-sm mb-6">自分に合ったサービスを見つけてPFC管理を効率化</p>
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
