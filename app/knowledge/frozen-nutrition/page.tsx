import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "冷凍弁当の栄養価は落ちる？｜冷凍と手作りの栄養比較【2026年】",
  description:
    "冷凍弁当の栄養価は本当に落ちるのか？急速冷凍技術の進歩、栄養素別（ビタミン・ミネラル・たんぱく質・脂質）の影響、手作り弁当との比較表、保存方法と解凍のコツ、フィットネス宅食の品質管理まで徹底解説。",
  keywords: ["冷凍弁当", "栄養", "落ちる", "変わらない", "冷凍技術", "栄養価"],
  openGraph: {
    title: "冷凍弁当の栄養価は落ちる？｜冷凍と手作りの栄養比較",
    description:
      "冷凍弁当の栄養価は落ちるのか？科学的根拠に基づいて冷凍と手作りの栄養を比較。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/frozen-nutrition/",
  },
};

const freezingTechnology = [
  {
    title: "急速冷凍（ブラストフリージング）",
    desc: "マイナス30〜40℃の冷気を強力に吹き付け、食品を30分〜1時間以内に凍結。氷の結晶が微細なため、細胞膜を破壊せず食感・栄養を保持します。",
    benefit: "栄養素の損失が最小限、ドリップ（水分流出）が少ない",
  },
  {
    title: "従来の緩慢冷凍との違い",
    desc: "家庭用冷凍庫（マイナス18℃前後）で数時間かけて凍結すると、大きな氷の結晶が生成され、細胞膜が破壊されます。これが解凍時のドリップ増加と栄養素流出の原因です。",
    benefit: "フィットネス宅食は業務用急速冷凍を採用しているため、家庭冷凍とは品質が異なる",
  },
];

const nutrientImpactTable = [
  { nutrient: "たんぱく質", impact: "ほぼ変化なし", detail: "冷凍による変性はごくわずか。解凍後も同等の栄養価を維持", rating: "◎" },
  { nutrient: "脂質", impact: "ほぼ変化なし", detail: "冷凍では脂質の酸化は遅くなる。長期保存（3ヶ月以上）で若干の酸化リスク", rating: "◎" },
  { nutrient: "炭水化物", impact: "変化なし", detail: "冷凍・解凍による影響を受けにくい栄養素", rating: "◎" },
  { nutrient: "ビタミンC", impact: "やや減少（10-20%）", detail: "水溶性ビタミンのため、解凍時のドリップとともに一部流出。急速冷凍なら損失は最小限", rating: "○" },
  { nutrient: "ビタミンB群", impact: "やや減少（5-15%）", detail: "水溶性のため多少の損失あり。ただし加熱調理でも同程度の損失が起こる", rating: "○" },
  { nutrient: "ビタミンA・E（脂溶性）", impact: "ほぼ変化なし", detail: "脂溶性ビタミンは冷凍に強く、損失はほとんどない", rating: "◎" },
  { nutrient: "ミネラル（鉄・亜鉛等）", impact: "ほぼ変化なし", detail: "ミネラルは化学構造が安定しているため、冷凍による影響を受けにくい", rating: "◎" },
  { nutrient: "食物繊維", impact: "変化なし", detail: "冷凍・解凍で変化しない", rating: "◎" },
];

const comparisonTable = [
  { item: "たんぱく質量", frozen: "表示通り（変化なし）", homemade: "食材・調理法により変動", winner: "引き分け" },
  { item: "ビタミン保持率", frozen: "80-95%（急速冷凍）", homemade: "60-90%（調理法による）", winner: "冷凍弁当" },
  { item: "栄養バランス", frozen: "管理栄養士監修で最適化", homemade: "自分の知識・スキル次第", winner: "冷凍弁当" },
  { item: "PFC管理のしやすさ", frozen: "表示通りに計算可能", homemade: "食材ごとに計算が必要", winner: "冷凍弁当" },
  { item: "添加物", frozen: "サービスにより異なる", homemade: "自分で管理可能", winner: "手作り" },
  { item: "食材の鮮度", frozen: "調理直後に急速冷凍", homemade: "購入時期による", winner: "引き分け" },
  { item: "コスト（1食）", frozen: "600-1,200円", homemade: "300-600円", winner: "手作り" },
  { item: "準備時間", frozen: "5-8分（レンジ）", homemade: "30-60分", winner: "冷凍弁当" },
];

const storageAndThawing = [
  {
    title: "正しい保存方法",
    tips: [
      "冷凍庫の温度はマイナス18℃以下を維持する",
      "届いたらすぐに冷凍庫に入れる（常温放置は厳禁）",
      "冷凍庫内は詰め込みすぎない（冷気の循環を確保）",
      "賞味期限内に食べきる（一般的に製造から3ヶ月〜1年）",
    ],
  },
  {
    title: "おすすめの解凍方法",
    tips: [
      "電子レンジ加熱がベスト（栄養素の損失が最小限）",
      "パッケージの表示時間を守る（加熱しすぎは栄養損失の原因）",
      "自然解凍は細菌繁殖のリスクがあるため避ける",
      "解凍後の再冷凍は品質・栄養価が大幅に低下するためNG",
    ],
  },
];

const qualityControl = [
  { service: "マッスルデリ", feature: "管理栄養士監修、HACCP認証工場で製造、急速冷凍" },
  { service: "nosh", feature: "自社工場で調理・急速冷凍、全メニュー糖質30g以下" },
  { service: "Dietician", feature: "管理栄養士が全メニュー監修、医療機関レベルの栄養管理" },
  { service: "筋肉食堂DELI", feature: "レストラン品質、プロの料理人が調理後に急速冷凍" },
];

const faqs = [
  {
    q: "冷凍弁当の栄養価は手作りより本当に落ちないのですか？",
    a: "急速冷凍技術を使った冷凍弁当であれば、栄養価の損失はごくわずかです。特にたんぱく質・脂質・炭水化物の三大栄養素はほぼ変化しません。水溶性ビタミンは若干減少しますが、これは手作りの加熱調理でも同程度の損失が起こるため、大きな差はありません。",
  },
  {
    q: "冷凍弁当は何ヶ月保存できますか？",
    a: "一般的に製造から3ヶ月〜1年が賞味期限です。ただし、開封後は再冷凍せずすぐに食べてください。家庭用冷凍庫でマイナス18℃以下を維持していれば、賞味期限内であれば栄養価はほぼ維持されます。",
  },
  {
    q: "電子レンジで温めると栄養は壊れますか？",
    a: "電子レンジ加熱は短時間で済むため、実は栄養素の損失が少ない加熱方法です。長時間のボイルや煮込み調理のほうがビタミンの流出が多くなります。パッケージの指定時間を守って過加熱を避ければ問題ありません。",
  },
  {
    q: "冷凍弁当に添加物は多いですか？",
    a: "サービスによって異なります。フィットネス向け宅食弁当は健康意識の高い顧客が多いため、添加物を最小限に抑えている傾向があります。気になる方は各サービスの原材料表示を確認してください。noshなど無添加にこだわるサービスもあります。",
  },
  {
    q: "解凍方法によって栄養価は変わりますか？",
    a: "はい、解凍方法は栄養価に影響します。電子レンジ加熱が最も栄養損失が少なくおすすめです。自然解凍は時間がかかるため、水溶性ビタミンの流出や細菌繁殖のリスクがあります。流水解凍も水溶性栄養素が流出するため推奨しません。",
  },
  {
    q: "フィットネス用の冷凍弁当は一般的な冷凍食品と何が違いますか？",
    a: "フィットネス用宅食弁当は(1)管理栄養士によるPFC管理、(2)高たんぱく設計、(3)適切なカロリーコントロール、(4)栄養成分の正確な表示が特徴です。一般的な冷凍食品は味重視でPFCバランスが考慮されていない場合が多く、筋トレやボディメイク目的には不向きです。",
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

export default function FrozenNutrition() {
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
            { name: "冷凍弁当の栄養価" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">冷凍弁当の栄養価は落ちる？</h1>
          <p className="text-gray-300">
            冷凍と手作りの栄養比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            「冷凍弁当は栄養が落ちるのでは？」という不安を持つ方は多いですが、結論から言うと、現代の急速冷凍技術を使った冷凍弁当であれば、栄養価の損失はごくわずかです。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、冷凍技術の仕組みから栄養素別の影響、手作り弁当との比較、正しい保存・解凍方法まで、科学的根拠に基づいて解説します。
          </p>
        </section>

        {/* Freezing technology */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            冷凍技術の進歩
          </h2>
          <div className="space-y-4">
            {freezingTechnology.map((tech) => (
              <div key={tech.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{tech.desc}</p>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-green-600 font-bold mb-1">ポイント</p>
                  <p className="text-sm text-gray-700">{tech.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrient impact table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            栄養素別の冷凍による影響
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">栄養素</th>
                  <th className="py-3 px-3 text-center font-bold">評価</th>
                  <th className="py-3 px-4 text-center font-bold">影響</th>
                  <th className="py-3 px-4 text-left font-bold">詳細</th>
                </tr>
              </thead>
              <tbody>
                {nutrientImpactTable.map((row, i) => (
                  <tr key={row.nutrient} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.nutrient}</td>
                    <td className="py-3 px-3 text-center text-lg">{row.rating}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold text-xs">{row.impact}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Frozen vs Homemade comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            冷凍弁当 vs 手作り弁当 比較表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">比較項目</th>
                  <th className="py-3 px-4 text-center font-bold">冷凍弁当</th>
                  <th className="py-3 px-4 text-center font-bold">手作り弁当</th>
                  <th className="py-3 px-3 text-center font-bold">優位</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.item}</td>
                    <td className="py-3 px-4 text-center text-gray-600 text-xs">{row.frozen}</td>
                    <td className="py-3 px-4 text-center text-gray-600 text-xs">{row.homemade}</td>
                    <td className="py-3 px-3 text-center text-[#16A34A] font-bold text-xs">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Storage & thawing tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            保存方法と解凍のコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storageAndThawing.map((section) => (
              <div key={section.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-800 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#16A34A] font-bold mt-0.5 flex-shrink-0">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Quality control */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            フィットネス宅食の品質管理
          </h2>
          <div className="space-y-3">
            {qualityControl.map((qc) => (
              <div key={qc.service} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-1">{qc.service}</h3>
                <p className="text-sm text-gray-600">{qc.feature}</p>
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
            <h2 className="text-xl font-bold mb-3">栄養価を保つ冷凍弁当で筋トレをサポート</h2>
            <p className="text-gray-300 text-sm mb-6">急速冷凍技術で栄養を閉じ込めた高たんぱく宅食弁当をチェック</p>
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
              { name: "プロテインvs宅食", href: "/knowledge/supplements-vs-meal/" },
              { name: "マッスルデリ レビュー", href: "/review/muscle-deli/" },
              { name: "nosh レビュー", href: "/review/nosh/" },
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
