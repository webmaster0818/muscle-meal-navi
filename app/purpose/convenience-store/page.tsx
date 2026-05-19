import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンビニで買える高たんぱく食品ガイド【筋トレ飯】セブン・ローソン・ファミマ比較【2026年】",
  description:
    "コンビニで買える高たんぱく・筋トレ向け食品を徹底ガイド。セブンイレブン・ローソン・ファミリーマートの人気商品を比較。宅配弁当との使い分けで効率的なたんぱく質摂取を実現。",
};

const sevenProducts = [
  { name: "サラダチキン（プレーン）", protein: "23.8g", calories: "113kcal", price: "213円", note: "定番の高たんぱく食品。味のバリエーションも豊富で飽きにくい。" },
  { name: "たんぱく質が摂れるチキン＆エッグサンド", protein: "26.0g", calories: "330kcal", price: "345円", note: "手軽にたんぱく質26g。朝食やトレーニング前にも。" },
  { name: "たんぱく質が摂れる 鶏むね肉のサラダ", protein: "21.5g", calories: "162kcal", price: "430円", note: "野菜とたんぱく質を同時に摂取。ダイエット中のランチに最適。" },
  { name: "7プレミアム ギリシャヨーグルト", protein: "12.0g", calories: "67kcal", price: "181円", note: "間食に最適な高たんぱくヨーグルト。脂質も低い。" },
];

const lawsonProducts = [
  { name: "ブランパン 2個入り", protein: "10.4g", calories: "130kcal", price: "150円", note: "低糖質のブランパンシリーズ。糖質わずか2.2g/個。ダイエット中のパン代替に。" },
  { name: "サラダチキンバー（プレーン）", protein: "13.5g", calories: "66kcal", price: "165円", note: "片手で食べられるスティックタイプ。外出先やトレーニング後に便利。" },
  { name: "たんぱく質が摂れる チキンステーキ弁当", protein: "30.0g", calories: "450kcal", price: "598円", note: "コンビニ弁当ながらたんぱく質30g。忙しい日のランチに。" },
  { name: "プロテイン入り飲むヨーグルト", protein: "15.0g", calories: "130kcal", price: "178円", note: "プロテインを手軽に摂取できるドリンクタイプ。" },
];

const familyMartProducts = [
  { name: "グリルチキン（ブラックペッパー）", protein: "25.5g", calories: "130kcal", price: "258円", note: "味付けしっかりで満足感が高い。おかずとしても活用可能。" },
  { name: "たんぱく質が摂れる サラダチキンバー", protein: "15.0g", calories: "83kcal", price: "162円", note: "スティックタイプで間食に最適。ハーブ味やスモーク味も。" },
  { name: "全粒粉サンド サラダチキンとたまご", protein: "20.2g", calories: "290kcal", price: "298円", note: "全粒粉パンで食物繊維もプラス。朝食におすすめ。" },
  { name: "バターコーヒー", protein: "0g", calories: "66kcal", price: "198円", note: "MCTオイル配合。朝のエネルギー補給に。たんぱく質はないが代謝サポートに。" },
];

const dailyPlans = [
  {
    title: "平日コンビニ活用プラン",
    meals: [
      { time: "朝食", menu: "ギリシャヨーグルト＋ブランパン", protein: "22g", calories: "197kcal" },
      { time: "昼食", menu: "サラダチキン＋おにぎり＋サラダ", protein: "30g", calories: "450kcal" },
      { time: "間食", menu: "サラダチキンバー＋プロテイン", protein: "35g", calories: "216kcal" },
      { time: "夕食", menu: "グリルチキン＋カット野菜＋パックご飯", protein: "28g", calories: "480kcal" },
    ],
    total: { protein: "115g", calories: "1,343kcal" },
  },
  {
    title: "コンビニ＋宅配弁当 併用プラン",
    meals: [
      { time: "朝食", menu: "コンビニ：ヨーグルト＋サンドイッチ", protein: "24g", calories: "330kcal" },
      { time: "昼食", menu: "宅配弁当（マッスルデリ等）", protein: "40g", calories: "500kcal" },
      { time: "間食", menu: "コンビニ：サラダチキンバー", protein: "15g", calories: "83kcal" },
      { time: "夕食", menu: "宅配弁当（nosh等）＋白米", protein: "30g", calories: "550kcal" },
    ],
    total: { protein: "109g", calories: "1,463kcal" },
  },
];

const tips = [
  {
    title: "栄養成分表示を必ずチェック",
    desc: "コンビニ食品は全て栄養成分が表示されています。たんぱく質・カロリー・脂質をチェックし、PFC管理に活用しましょう。似た商品でもメーカーによって栄養素が大きく異なることがあります。",
  },
  {
    title: "サラダチキンは最強のコスパ食材",
    desc: "100gあたりたんぱく質23g前後を200円台で摂取できるサラダチキンは、コンビニ筋トレ飯の王道。味のバリエーションが豊富なので、毎日食べても飽きにくいのが強みです。",
  },
  {
    title: "コンビニ弁当は脂質に注意",
    desc: "通常のコンビニ弁当は脂質が高めの傾向があります。「たんぱく質が摂れる」シリーズなどの高たんぱく商品を選ぶか、サラダチキン＋おにぎりの組み合わせがおすすめです。",
  },
  {
    title: "宅配弁当との使い分けが最強",
    desc: "平日の昼食はコンビニ、夕食は宅配弁当という使い分けがコスパ・栄養バランスともに最適。週末はまとめて宅配弁当を利用し、食事準備の手間を省くのも効果的です。",
  },
];

const faqs = [
  {
    q: "コンビニ食品だけで筋トレの栄養管理は可能ですか？",
    a: "可能ですが、メニューの偏りや栄養バランスの管理が難しくなります。サラダチキンやたんぱく質シリーズを活用すればたんぱく質は確保できますが、ビタミン・ミネラルの不足に注意。宅配弁当と併用するのが理想的です。",
  },
  {
    q: "コンビニで1日に必要なたんぱく質を摂るにはいくらかかりますか？",
    a: "目標120gの場合、サラダチキン2個（約430円）＋サンドイッチ（約350円）＋ヨーグルト（約180円）＋おにぎり（約150円）で約1,100円程度。宅配弁当1食（600〜1,000円）と組み合わせると1日1,500〜2,000円が目安です。",
  },
  {
    q: "各コンビニで一番おすすめの高たんぱく商品は？",
    a: "セブンは「たんぱく質が摂れる」シリーズが充実。ローソンはブランパンと低糖質商品が強み。ファミマはグリルチキンのクオリティが高い。いずれもサラダチキン系が最もコスパに優れています。",
  },
  {
    q: "コンビニ食品と宅配弁当、どちらがコスパが良いですか？",
    a: "1食あたりのコスパはコンビニ（サラダチキン＋おにぎり等で400〜500円）が安いですが、PFCバランスや栄養の完成度では宅配弁当（600〜1,000円）が優れています。予算に応じて使い分けるのがベストです。",
  },
  {
    q: "コンビニのプロテインバーは筋トレに効果的ですか？",
    a: "間食としては便利ですが、脂質や糖質が高いものも多いのでラベルをチェックしましょう。たんぱく質15g以上・脂質10g以下のものを選ぶのがポイント。サラダチキンバーの方が脂質が低くおすすめです。",
  },
  {
    q: "筋トレ後にコンビニで何を買うべきですか？",
    a: "トレーニング直後は、たんぱく質と糖質を素早く摂取することが重要です。サラダチキン＋おにぎり、またはプロテインドリンク＋バナナの組み合わせがおすすめ。30分以内に摂取するのが理想的です。",
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

export default function ConvenienceStore() {
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
            { name: "目的別おすすめ", href: "/#purpose" },
            { name: "コンビニ高たんぱく食品ガイド" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">コンビニで買える高たんぱく食品ガイド</h1>
          <p className="text-gray-300">
            セブン・ローソン・ファミマの筋トレ飯を徹底比較
          </p>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレやボディメイクに取り組む人にとって、毎食の栄養管理は大きな課題です。自炊の時間がない日やトレーニング後の素早い栄養補給には、コンビニの高たんぱく食品が強い味方になります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            近年、セブンイレブン・ローソン・ファミリーマートの各社は「高たんぱく」「低糖質」をキーワードにした商品を続々と展開。サラダチキンだけでなく、サンドイッチ、パン、ヨーグルト、ドリンクと選択肢が大幅に増えています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、コンビニ3社の高たんぱく食品を徹底比較し、1日の組み合わせ例や宅配弁当との最強の使い分け方法を紹介します。
          </p>
        </section>

        {/* Seven-Eleven */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            セブンイレブンの高たんぱく商品
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="text-left p-3 font-bold text-gray-800">商品名</th>
                  <th className="text-center p-3 font-bold text-gray-800">たんぱく質</th>
                  <th className="text-center p-3 font-bold text-gray-800">カロリー</th>
                  <th className="text-center p-3 font-bold text-gray-800">価格</th>
                </tr>
              </thead>
              <tbody>
                {sevenProducts.map((p) => (
                  <tr key={p.name} className="border-t border-gray-100">
                    <td className="p-3">
                      <div className="font-medium text-gray-800">{p.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{p.note}</div>
                    </td>
                    <td className="text-center p-3 font-bold text-[#16A34A]">{p.protein}</td>
                    <td className="text-center p-3 text-gray-700">{p.calories}</td>
                    <td className="text-center p-3 text-gray-700">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lawson */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            ローソンの高たんぱく商品
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="text-left p-3 font-bold text-gray-800">商品名</th>
                  <th className="text-center p-3 font-bold text-gray-800">たんぱく質</th>
                  <th className="text-center p-3 font-bold text-gray-800">カロリー</th>
                  <th className="text-center p-3 font-bold text-gray-800">価格</th>
                </tr>
              </thead>
              <tbody>
                {lawsonProducts.map((p) => (
                  <tr key={p.name} className="border-t border-gray-100">
                    <td className="p-3">
                      <div className="font-medium text-gray-800">{p.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{p.note}</div>
                    </td>
                    <td className="text-center p-3 font-bold text-[#16A34A]">{p.protein}</td>
                    <td className="text-center p-3 text-gray-700">{p.calories}</td>
                    <td className="text-center p-3 text-gray-700">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FamilyMart */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            ファミリーマートの高たんぱく商品
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#F9FAFB]">
                  <th className="text-left p-3 font-bold text-gray-800">商品名</th>
                  <th className="text-center p-3 font-bold text-gray-800">たんぱく質</th>
                  <th className="text-center p-3 font-bold text-gray-800">カロリー</th>
                  <th className="text-center p-3 font-bold text-gray-800">価格</th>
                </tr>
              </thead>
              <tbody>
                {familyMartProducts.map((p) => (
                  <tr key={p.name} className="border-t border-gray-100">
                    <td className="p-3">
                      <div className="font-medium text-gray-800">{p.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{p.note}</div>
                    </td>
                    <td className="text-center p-3 font-bold text-[#16A34A]">{p.protein}</td>
                    <td className="text-center p-3 text-gray-700">{p.calories}</td>
                    <td className="text-center p-3 text-gray-700">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Daily Plans */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            1日の組み合わせ例
          </h2>
          <div className="space-y-6">
            {dailyPlans.map((plan) => (
              <div key={plan.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4">{plan.title}</h3>
                <div className="space-y-3 mb-4">
                  {plan.meals.map((meal) => (
                    <div key={meal.time} className="flex items-center gap-4 bg-[#F9FAFB] rounded-lg p-3">
                      <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        {meal.time}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">{meal.menu}</div>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <div className="text-sm font-bold text-[#16A34A]">P: {meal.protein}</div>
                        <div className="text-xs text-gray-500">{meal.calories}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F0FDF4] rounded-lg p-3 flex justify-between items-center">
                  <span className="font-bold text-sm text-gray-800">1日合計</span>
                  <div className="text-right">
                    <span className="font-bold text-[#16A34A] mr-4">P: {plan.total.protein}</span>
                    <span className="font-bold text-gray-800">{plan.total.calories}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            コンビニ筋トレ飯のコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((t) => (
              <div key={t.title} className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-[#16A34A] mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
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

        {/* CTA + Related */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">コンビニ＋宅配弁当で最強の筋トレ飯を</h2>
            <p className="text-gray-300 text-sm mb-6">PFC管理された宅配弁当と組み合わせて効率アップ</p>
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
              { name: "増量期おすすめ", href: "/purpose/bulking/" },
              { name: "減量期おすすめ", href: "/purpose/cutting/" },
              { name: "マッスルデリ レビュー", href: "/review/muscle-deli/" },
              { name: "nosh 詳細レビュー", href: "/review/nosh/" },
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
