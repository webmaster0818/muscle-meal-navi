import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プロテインvs宅食弁当｜筋トレの栄養補給はどっちがいい？【2026年】",
  description:
    "プロテインと宅食弁当を7項目で徹底比較。栄養バランス・たんぱく質量・コスト・手軽さ・腹持ち・味・継続性を検証。併用のメリットやシーン別おすすめ、コスパ比較も解説。筋トレの栄養補給に最適な方法が分かります。",
  keywords: ["プロテイン", "宅食", "どっち", "比較", "筋トレ", "栄養補給"],
  openGraph: {
    title: "プロテインvs宅食弁当｜筋トレの栄養補給はどっちがいい？",
    description:
      "プロテインと宅食弁当を7項目で徹底比較。併用のメリットやシーン別おすすめも解説。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/supplements-vs-meal/",
  },
};

const comparisonItems = [
  {
    item: "栄養バランス",
    protein: { score: 2, detail: "たんぱく質に特化。ビタミン・ミネラル・食物繊維は不足" },
    meal: { score: 5, detail: "PFC＋ビタミン・ミネラル・食物繊維をバランスよく摂取可能" },
    winner: "宅食弁当",
  },
  {
    item: "たんぱく質量",
    protein: { score: 5, detail: "1杯で20-30g。効率よく摂取可能" },
    meal: { score: 4, detail: "1食で30-55g。サービス・メニューにより異なる" },
    winner: "プロテイン",
  },
  {
    item: "コスト（1回あたり）",
    protein: { score: 5, detail: "1杯あたり約60-120円" },
    meal: { score: 2, detail: "1食あたり約600-1,200円" },
    winner: "プロテイン",
  },
  {
    item: "手軽さ",
    protein: { score: 5, detail: "水や牛乳に溶かすだけ。30秒で完成" },
    meal: { score: 4, detail: "電子レンジで5-8分。調理不要だが温め時間あり" },
    winner: "プロテイン",
  },
  {
    item: "腹持ち",
    protein: { score: 2, detail: "液体のため消化が速く、すぐに空腹になりやすい" },
    meal: { score: 5, detail: "固形食のため消化に時間がかかり、腹持ちが良い" },
    winner: "宅食弁当",
  },
  {
    item: "味・満足感",
    protein: { score: 3, detail: "フレーバーは豊富だが、食事としての満足感は低い" },
    meal: { score: 5, detail: "本格的な食事を楽しめる。メニューも豊富で飽きにくい" },
    winner: "宅食弁当",
  },
  {
    item: "継続性",
    protein: { score: 3, detail: "味に飽きやすい。食事の代わりにはなりにくい" },
    meal: { score: 5, detail: "普通の食事感覚で続けやすい。メニューのバリエーション豊富" },
    winner: "宅食弁当",
  },
];

const combinationBenefits = [
  {
    title: "タイミングの使い分けで効率アップ",
    desc: "トレーニング直後の素早い栄養補給にはプロテイン、メインの食事には宅食弁当と使い分けることで、最適なタイミングで必要な栄養を摂取できます。",
  },
  {
    title: "たんぱく質の不足分を簡単に補填",
    desc: "宅食弁当で1食30-40gのたんぱく質を摂り、間食やトレーニング前後にプロテインで20-30gを追加。無理なく1日の目標量をクリアできます。",
  },
  {
    title: "コストの最適化",
    desc: "全食を宅食弁当にすると高コストに。メインの1-2食を宅食弁当、補食をプロテインにすることで、栄養バランスとコストのバランスが取れます。",
  },
];

const scenarioRecommendations = [
  { scenario: "トレーニング直後", recommend: "プロテイン", reason: "吸収速度が速く、ゴールデンタイムに最適" },
  { scenario: "メインの食事（昼・夕）", recommend: "宅食弁当", reason: "PFCバランス＋ビタミン・ミネラルを総合的に摂取" },
  { scenario: "間食・おやつ代わり", recommend: "プロテイン", reason: "手軽にたんぱく質を補給。低カロリー" },
  { scenario: "忙しい朝", recommend: "プロテイン", reason: "30秒で準備完了。最低限のたんぱく質を確保" },
  { scenario: "夜遅い食事", recommend: "宅食弁当", reason: "低カロリーメニューを選べば脂肪蓄積のリスクを抑えられる" },
  { scenario: "減量期", recommend: "併用", reason: "宅食弁当でカロリー管理＋プロテインでたんぱく質を確保" },
];

const costComparison = {
  title: "1ヶ月のコスパ比較（たんぱく質150g/日を目標とした場合）",
  patterns: [
    {
      pattern: "プロテインのみ",
      breakdown: "プロテイン6杯/日（150g）",
      monthlyCost: "約14,400-21,600円",
      pros: "最安だがビタミン等不足",
    },
    {
      pattern: "宅食弁当のみ",
      breakdown: "宅食弁当3食/日（約120g）+ プロテイン1杯（30g）",
      monthlyCost: "約57,000-90,000円",
      pros: "栄養バランス最適だが高コスト",
    },
    {
      pattern: "併用（推奨）",
      breakdown: "宅食弁当1-2食 + プロテイン2-3杯 + 自炊1食",
      monthlyCost: "約30,000-50,000円",
      pros: "コスト・栄養・手間のバランス最適",
    },
  ],
};

const faqs = [
  {
    q: "プロテインだけで筋肉はつきますか？",
    a: "プロテインだけでは十分な筋肉の成長は期待できません。筋肉の成長にはたんぱく質だけでなく、炭水化物（エネルギー源）、脂質（ホルモン合成）、ビタミン・ミネラル（代謝の補酵素）が必要です。プロテインはあくまで「補助」であり、バランスの良い食事が基本です。",
  },
  {
    q: "宅食弁当だけでたんぱく質は足りますか？",
    a: "1食あたり30-55gのたんぱく質が摂れるサービスが多いですが、筋トレをしている場合（体重×2g必要）、3食すべてを宅食弁当にしても不足する可能性があります。プロテインや高たんぱく食品で補うことをおすすめします。",
  },
  {
    q: "プロテインと宅食弁当を同時に摂取してもいいですか？",
    a: "同時に摂取しても問題ありません。ただし、1回の食事でたんぱく質を過剰に摂ると吸収効率が下がるとされています。宅食弁当の食事から1-2時間空けてプロテインを摂るか、別のタイミングで分けて摂取するのが効果的です。",
  },
  {
    q: "コスパが良いのはどちらですか？",
    a: "たんぱく質1gあたりのコストではプロテインが圧倒的に安い（約3-4円/g vs 宅食弁当は約20-30円/g）です。ただし、総合的な栄養価を考えると宅食弁当の方が効率的です。併用することでコスパと栄養バランスの両立が可能です。",
  },
  {
    q: "ダイエット中はどちらを優先すべきですか？",
    a: "ダイエット中は「宅食弁当メイン＋プロテイン補助」がおすすめです。宅食弁当はカロリーが管理されており、腹持ちも良いため空腹によるドカ食いを防げます。間食にプロテインを飲むことで、たんぱく質不足による筋肉減少を防ぎます。",
  },
  {
    q: "プロテインは1日何杯まで飲んでいいですか？",
    a: "一般的には1日2-3杯（50-90g）程度が目安です。残りのたんぱく質は食事から摂取しましょう。プロテインだけで1日の必要量を満たそうとすると、他の栄養素が不足するだけでなく、腎臓への負担や消化器の不調を招く可能性があります。",
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

export default function SupplementsVsMeal() {
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
            { name: "プロテインvs宅食弁当" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">プロテインvs宅食弁当</h1>
          <p className="text-gray-300">
            筋トレの栄養補給はどっちがいい？
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレの栄養補給といえば「プロテイン」と「宅食弁当」が定番ですが、どちらが自分に合っているのか迷う方も多いのではないでしょうか。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、プロテインと宅食弁当を7つの項目で徹底比較し、それぞれのメリット・デメリット、併用のメリット、シーン別のおすすめを解説します。
          </p>
        </section>

        {/* 7-item comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            プロテイン vs 宅食弁当 7項目比較
          </h2>
          <div className="space-y-4">
            {comparisonItems.map((comp) => (
              <div key={comp.item} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800">{comp.item}</h3>
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {comp.winner}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs text-gray-500 font-bold">プロテイン</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`w-3 h-3 rounded-full ${i < comp.protein.score ? "bg-[#16A34A]" : "bg-gray-200"}`}></span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{comp.protein.detail}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs text-green-600 font-bold">宅食弁当</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`w-3 h-3 rounded-full ${i < comp.meal.score ? "bg-[#16A34A]" : "bg-gray-200"}`}></span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{comp.meal.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            比較まとめ表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">比較項目</th>
                  <th className="py-3 px-4 text-center font-bold">プロテイン</th>
                  <th className="py-3 px-4 text-center font-bold">宅食弁当</th>
                  <th className="py-3 px-3 text-center font-bold">優位</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((comp, i) => (
                  <tr key={comp.item} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{comp.item}</td>
                    <td className="py-3 px-4 text-center">
                      {"★".repeat(comp.protein.score)}{"☆".repeat(5 - comp.protein.score)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {"★".repeat(comp.meal.score)}{"☆".repeat(5 - comp.meal.score)}
                    </td>
                    <td className="py-3 px-3 text-center text-[#16A34A] font-bold text-xs">{comp.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Combination benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            併用のメリット
          </h2>
          <div className="space-y-3">
            {combinationBenefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scene-based recommendations */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            シーン別おすすめ
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">シーン</th>
                  <th className="py-3 px-4 text-center font-bold">おすすめ</th>
                  <th className="py-3 px-4 text-left font-bold">理由</th>
                </tr>
              </thead>
              <tbody>
                {scenarioRecommendations.map((rec, i) => (
                  <tr key={rec.scenario} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{rec.scenario}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{rec.recommend}</td>
                    <td className="py-3 px-4 text-gray-600">{rec.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            {costComparison.title}
          </h2>
          <div className="space-y-3">
            {costComparison.patterns.map((p) => (
              <div key={p.pattern} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2">{p.pattern}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">内訳</p>
                    <p className="text-sm text-gray-700">{p.breakdown}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">月額コスト</p>
                    <p className="text-sm text-[#16A34A] font-bold">{p.monthlyCost}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">評価</p>
                    <p className="text-sm text-gray-700">{p.pros}</p>
                  </div>
                </div>
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

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">高たんぱく宅食弁当をチェック</h2>
            <p className="text-gray-300 text-sm mb-6">プロテインとの併用で最強の栄養補給を実現しましょう</p>
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
              { name: "たんぱく質の摂取量", href: "/knowledge/protein-intake/" },
              { name: "食事タイミング", href: "/knowledge/meal-timing/" },
              { name: "冷凍弁当の栄養価", href: "/knowledge/frozen-nutrition/" },
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
