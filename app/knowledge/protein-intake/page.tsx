import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "たんぱく質の適正摂取量｜体重・目的別の計算方法【2026年】",
  description:
    "たんぱく質の1日の適正摂取量を体重・目的別に徹底解説。一般人・筋トレ初心者・中級者・上級者・ダイエット中の摂取量目安、体重別の計算表、たんぱく質が多い食品ランキング、宅食弁当の比較、過剰摂取のリスクまで網羅。",
  keywords: ["たんぱく質", "摂取量", "計算", "1日", "体重別", "筋トレ"],
  openGraph: {
    title: "たんぱく質の適正摂取量｜体重・目的別の計算方法",
    description:
      "たんぱく質の1日の適正摂取量を体重・目的別に解説。計算表や食品ランキングも掲載。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/protein-intake/",
  },
};

const intakeByPurpose = [
  { purpose: "一般成人（運動なし）", perKg: "0.8〜1.0g", example70: "56〜70g", note: "厚生労働省の推奨量" },
  { purpose: "筋トレ初心者（週1-2回）", perKg: "1.2〜1.5g", example70: "84〜105g", note: "筋肉の修復に必要な量" },
  { purpose: "筋トレ中級者（週3-4回）", perKg: "1.6〜2.0g", example70: "112〜140g", note: "筋肥大を目指す場合の推奨量" },
  { purpose: "筋トレ上級者（週5回以上）", perKg: "2.0〜2.5g", example70: "140〜175g", note: "高強度トレーニング対応" },
  { purpose: "ダイエット中", perKg: "1.6〜2.2g", example70: "112〜154g", note: "筋肉を維持しながら減量" },
];

const bodyWeightTable = [
  { weight: "50kg", general: "40-50g", beginner: "60-75g", intermediate: "80-100g", advanced: "100-125g" },
  { weight: "60kg", general: "48-60g", beginner: "72-90g", intermediate: "96-120g", advanced: "120-150g" },
  { weight: "70kg", general: "56-70g", beginner: "84-105g", intermediate: "112-140g", advanced: "140-175g" },
  { weight: "80kg", general: "64-80g", beginner: "96-120g", intermediate: "128-160g", advanced: "160-200g" },
  { weight: "90kg", general: "72-90g", beginner: "108-135g", intermediate: "144-180g", advanced: "180-225g" },
];

const proteinFoods = [
  { rank: 1, food: "鶏胸肉（皮なし）", per100g: "23.3g", perServing: "約46.6g（200g）", cost: "約200円", note: "高たんぱく・低脂質の王道" },
  { rank: 2, food: "まぐろ赤身", per100g: "26.4g", perServing: "約26.4g（100g）", cost: "約400円", note: "アミノ酸スコア100" },
  { rank: 3, food: "卵（全卵）", per100g: "12.2g", perServing: "約7.3g（1個60g）", cost: "約25円", note: "コスパ最強・完全栄養食" },
  { rank: 4, food: "牛もも肉（赤身）", per100g: "21.3g", perServing: "約42.6g（200g）", cost: "約500円", note: "鉄分・亜鉛も豊富" },
  { rank: 5, food: "木綿豆腐", per100g: "7.0g", perServing: "約21g（300g・1丁）", cost: "約80円", note: "植物性たんぱく質" },
  { rank: 6, food: "納豆", per100g: "16.5g", perServing: "約8.3g（1パック50g）", cost: "約35円", note: "発酵食品・腸活にも" },
  { rank: 7, food: "サバ水煮缶", per100g: "20.9g", perServing: "約39.7g（1缶190g）", cost: "約200円", note: "DHA/EPAも豊富" },
  { rank: 8, food: "プロテイン（ホエイ）", per100g: "75-80g", perServing: "約25g（1杯30g）", cost: "約80円", note: "吸収が速い" },
];

const mealServiceComparison = [
  { service: "マッスルデリ LEAN", protein: "30g以上", perMeal: "980円〜", note: "減量向け" },
  { service: "マッスルデリ MAINTAIN", protein: "40g以上", perMeal: "1,080円〜", note: "維持向け" },
  { service: "マッスルデリ GAIN", protein: "55g以上", perMeal: "1,280円〜", note: "増量向け" },
  { service: "Dietician SMALL", protein: "30g以上", perMeal: "998円〜", note: "ダイエット向け" },
  { service: "Dietician MEDIUM", protein: "40g以上", perMeal: "1,098円〜", note: "ボディメイク向け" },
  { service: "nosh（高たんぱくメニュー）", protein: "25-35g", perMeal: "599円〜", note: "メニュー豊富" },
  { service: "筋肉食堂DELI", protein: "40-65g", perMeal: "996円〜", note: "高たんぱく特化" },
];

const overintakeRisks = [
  { risk: "腎臓への負担", detail: "体重1kgあたり3g以上の長期間摂取は、健康な人でも腎臓に負担をかける可能性があります。腎機能に不安がある方は医師に相談を。" },
  { risk: "消化器の不調", detail: "一度に大量のたんぱく質を摂取すると、腸内環境の悪化（おなら・便秘・下痢）が起こることがあります。1食あたり30-40gを目安に分散摂取を。" },
  { risk: "カルシウム排泄の増加", detail: "過剰なたんぱく質摂取は尿中カルシウム排泄を増加させる可能性があります。カルシウムの摂取も意識しましょう。" },
  { risk: "カロリーオーバー", detail: "たんぱく質も1gあたり4kcalのエネルギーがあります。過剰摂取は余分なカロリーとなり、体脂肪の増加につながります。" },
];

const faqs = [
  {
    q: "たんぱく質は1日に何回に分けて摂るべきですか？",
    a: "1回の食事で吸収できるたんぱく質は約30-40gとされています。体重70kgで140g必要な場合、4-5回に分けて摂取するのが効果的です。朝食・昼食・間食・夕食・就寝前の5回に分散させるのが理想的です。",
  },
  {
    q: "プロテインだけでたんぱく質を摂っても問題ないですか？",
    a: "プロテインは便利ですが、食事からの摂取も重要です。肉・魚・卵などの食品にはたんぱく質以外にもビタミンB群・鉄分・亜鉛などの栄養素が含まれています。食事6〜7割、プロテイン3〜4割が理想的なバランスです。",
  },
  {
    q: "植物性たんぱく質と動物性たんぱく質はどちらが良いですか？",
    a: "筋トレ目的では、アミノ酸スコアが高い動物性たんぱく質（肉・魚・卵・乳製品）が効果的です。ただし、大豆製品もアミノ酸スコアが高く優れた植物性たんぱく質源です。両方をバランスよく摂ることが推奨されます。",
  },
  {
    q: "たんぱく質を計算するのが面倒な場合はどうすればいい？",
    a: "PFC表示がある宅食弁当を活用するのが最も効率的です。マッスルデリやDieticianなどのサービスは1食あたりのたんぱく質量が明記されているため、計算の手間が省けます。不足分はプロテインで補えばOKです。",
  },
  {
    q: "女性のたんぱく質摂取量は男性と違いますか？",
    a: "体重あたりの推奨量は男女で大きな差はありません。ただし、一般的に女性は男性より体重が軽いため、絶対量は少なくなります。体重50kgの女性で筋トレをしている場合、80-100g/日が目安です。",
  },
  {
    q: "高齢者のたんぱく質摂取量はどのくらいですか？",
    a: "高齢者はサルコペニア（加齢性筋肉減少症）予防のため、体重1kgあたり1.0-1.2gの摂取が推奨されています。筋トレを行っている場合は1.2-1.6g程度が目安です。消化吸収能力の低下もあるため、より分散して摂取することが重要です。",
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

export default function ProteinIntake() {
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
            { name: "知識", href: "/#knowledge" },
            { name: "たんぱく質の適正摂取量" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">たんぱく質の適正摂取量</h1>
          <p className="text-gray-300">
            体重・目的別の計算方法
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            たんぱく質は筋肉の材料となる最も重要な栄養素です。しかし、「1日にどのくらい摂ればいいのか」は体重や運動量、目的によって大きく異なります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、目的別・体重別のたんぱく質摂取量の計算方法から、たんぱく質が多い食品ランキング、宅食弁当のたんぱく質比較、過剰摂取のリスクまで徹底解説します。
          </p>
        </section>

        {/* Purpose-based intake */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            目的別たんぱく質摂取量の目安
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">目的・活動レベル</th>
                  <th className="py-3 px-4 text-center font-bold">体重1kgあたり</th>
                  <th className="py-3 px-4 text-center font-bold">70kgの場合</th>
                  <th className="py-3 px-4 text-center font-bold">備考</th>
                </tr>
              </thead>
              <tbody>
                {intakeByPurpose.map((row, i) => (
                  <tr key={row.purpose} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.purpose}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.perKg}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.example70}</td>
                    <td className="py-3 px-4 text-center text-gray-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Body weight table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            体重別たんぱく質摂取量 早見表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">体重</th>
                  <th className="py-3 px-4 text-center font-bold">一般人<br /><span className="text-xs font-normal">0.8-1.0g/kg</span></th>
                  <th className="py-3 px-4 text-center font-bold">初心者<br /><span className="text-xs font-normal">1.2-1.5g/kg</span></th>
                  <th className="py-3 px-4 text-center font-bold">中級者<br /><span className="text-xs font-normal">1.6-2.0g/kg</span></th>
                  <th className="py-3 px-4 text-center font-bold">上級者<br /><span className="text-xs font-normal">2.0-2.5g/kg</span></th>
                </tr>
              </thead>
              <tbody>
                {bodyWeightTable.map((row, i) => (
                  <tr key={row.weight} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.weight}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.general}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.beginner}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.intermediate}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.advanced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Protein-rich foods ranking */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            たんぱく質が多い食品ランキング
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-3 text-center font-bold">順位</th>
                  <th className="py-3 px-4 text-left font-bold">食品名</th>
                  <th className="py-3 px-4 text-center font-bold">100gあたり</th>
                  <th className="py-3 px-4 text-center font-bold">1食分</th>
                  <th className="py-3 px-3 text-center font-bold">コスト</th>
                </tr>
              </thead>
              <tbody>
                {proteinFoods.map((food, i) => (
                  <tr key={food.food} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-3 text-center font-bold text-[#16A34A]">{food.rank}</td>
                    <td className="py-3 px-4 font-bold text-gray-700">
                      {food.food}
                      <p className="text-xs text-gray-400 font-normal">{food.note}</p>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">{food.per100g}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{food.perServing}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{food.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 栄養価は日本食品標準成分表2020年版（八訂）に基づく概算値です。
          </p>
        </section>

        {/* Meal service protein comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            宅食弁当のたんぱく質比較
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">サービス・コース</th>
                  <th className="py-3 px-4 text-center font-bold">たんぱく質</th>
                  <th className="py-3 px-4 text-center font-bold">1食あたり</th>
                  <th className="py-3 px-4 text-center font-bold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {mealServiceComparison.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.service}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.protein}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.perMeal}</td>
                    <td className="py-3 px-4 text-center text-gray-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Overintake risks */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            過剰摂取のリスク
          </h2>
          <div className="space-y-3">
            {overintakeRisks.map((item) => (
              <div key={item.risk} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">{item.risk}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-yellow-600">注意：</span>体重1kgあたり2.5g以下であれば、健康な成人が短期間摂取しても大きなリスクはないとされています。ただし、持病のある方は必ず医師に相談してください。
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
            <h2 className="text-xl font-bold mb-3">たんぱく質管理を宅食弁当で簡単に</h2>
            <p className="text-gray-300 text-sm mb-6">高たんぱく宅食弁当なら、1食のたんぱく質量が明記されているので管理が簡単です</p>
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
              { name: "PFCバランス計算", href: "/knowledge/pfc-calculator/" },
              { name: "食事タイミング", href: "/knowledge/meal-timing/" },
              { name: "プロテインvs宅食", href: "/knowledge/supplements-vs-meal/" },
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
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
