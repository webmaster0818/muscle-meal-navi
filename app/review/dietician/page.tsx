import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dietician（ダイエティシャン）の口コミ・評判｜管理栄養士監修PFC弁当を徹底レビュー【2026年】",
  description:
    "Dietician（ダイエティシャン）を実際に利用した口コミ・評判を紹介。管理栄養士が監修するPFC最適化宅配弁当の価格、メニュー、味を徹底レビュー。ボディメイク・ダイエットに最適。",
};

const overview = {
  name: "Dietician（ダイエティシャン）",
  protein: "30〜40g/食",
  fat: "10〜20g/食",
  carbs: "35〜65g/食",
  calories: "350〜550kcal/食",
  price: "898円〜（定期）",
  menuCount: "約40種類",
  delivery: "全国対応（冷凍便）",
  plans: "SMALL PLAN（ダイエット）/ MEDIUM PLAN（ボディメイク）",
};

const strengths = [
  {
    title: "PFC最適化に特化した設計",
    desc: "管理栄養士がPFC（たんぱく質・脂質・炭水化物）バランスを徹底的に計算。マクロ管理をしているトレーニーに最適な食事設計です。",
  },
  {
    title: "2プランで目的別に選べる",
    desc: "ダイエット向けのSMALL PLAN（350-450kcal）とボディメイク向けのMEDIUM PLAN（450-550kcal）の2種類。目的に合わせて選択できます。",
  },
  {
    title: "高たんぱく30-40gを安定供給",
    desc: "どのメニューでも1食あたり30g以上のたんぱく質を確保。たんぱく質摂取量の安定化に貢献します。",
  },
  {
    title: "和洋中の豊富なメニュー",
    desc: "約40種類のメニューを和洋中バランスよく展開。飽きにくく、長期継続しやすいのが特徴です。",
  },
];

const reviews = [
  {
    name: "T.S さん（20代男性）",
    rating: 4.5,
    period: "利用歴5ヶ月",
    text: "PFCが明確に記載されているので、マクロ管理がとても楽になりました。MEDIUM PLANを利用していますが、1食でたんぱく質35g前後摂れるのは優秀。味も和食系が特においしいです。冷凍弁当とは思えないクオリティ。",
  },
  {
    name: "A.K さん（30代女性）",
    rating: 4.0,
    period: "利用歴3ヶ月",
    text: "SMALL PLANでダイエット中です。400kcal前後でしっかりたんぱく質が摂れるのが嬉しい。副菜も充実していて、食べ応えがあります。ただ送料がやや高めなので、まとめ買いがおすすめ。",
  },
  {
    name: "R.M さん（30代男性）",
    rating: 4.0,
    period: "利用歴4ヶ月",
    text: "マッスルデリから乗り換えました。たんぱく質量は少し劣りますが、メニューの種類が豊富で飽きにくい。価格もやや安めなのでコスパは良いと思います。",
  },
  {
    name: "N.H さん（40代男性）",
    rating: 3.5,
    period: "利用歴2ヶ月",
    text: "増量期には少しカロリーが足りないかな。減量期にはぴったりのPFCバランスです。メニューの当たり外れは多少ありますが、全体的に満足しています。",
  },
];

const faqs = [
  {
    q: "Dieticianの2つのプランの違いは何ですか？",
    a: "SMALL PLANはダイエット・減量向けで1食350-450kcal、たんぱく質30g以上です。MEDIUM PLANはボディメイク・維持向けで1食450-550kcal、たんぱく質35g以上です。目的に応じて選択してください。",
  },
  {
    q: "送料はいくらですか？",
    a: "配送地域によって異なりますが、全国一律で冷凍便の送料がかかります。定期便や10食セットなど、まとめ買いで1食あたりのコストを下げることをおすすめします。",
  },
  {
    q: "メニューは自分で選べますか？",
    a: "基本的にはおまかせでの配送ですが、苦手な食材やアレルギーがある場合は事前に申告することが可能です。メニューは定期的に入れ替わるため、飽きにくい設計になっています。",
  },
  {
    q: "他の宅配弁当と比べてPFCバランスはどうですか？",
    a: "Dieticianは「PFC最適化」をコンセプトにしているため、たんぱく質・脂質・炭水化物のバランスが特に優れています。脂質を抑えながらたんぱく質を確保する設計はトレーニーに高く評価されています。",
  },
  {
    q: "定期便の解約に縛りはありますか？",
    a: "定期便に最低継続回数の縛りはありません。次回配送予定日の一定期間前までに手続きすれば、いつでもスキップ・解約が可能です。",
  },
  {
    q: "電子レンジの加熱時間はどのくらいですか？",
    a: "冷凍状態から600Wで約5-6分が目安です。メニューによって若干異なるため、パッケージの記載を確認してください。",
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

const relatedServices = [
  { name: "マッスルデリ", href: "/review/muscle-deli/" },
  { name: "MORE THAN DELI", href: "/review/morethandeli/" },
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "RIZAPサポートミール", href: "/review/rizap-meal/" },
];

export default function Dietician() {
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
            { name: "レビュー", href: "/#ranking" },
            { name: "Dietician（ダイエティシャン）" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Dietician（ダイエティシャン）の口コミ・評判</h1>
          <p className="text-gray-300">
            管理栄養士監修のPFC最適化宅配弁当を徹底レビュー
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            基本情報
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["サービス名", overview.name],
                  ["たんぱく質/食", overview.protein],
                  ["脂質/食", overview.fat],
                  ["炭水化物/食", overview.carbs],
                  ["カロリー/食", overview.calories],
                  ["価格", overview.price],
                  ["メニュー数", overview.menuCount],
                  ["配送", overview.delivery],
                  ["プラン", overview.plans],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 w-1/3">{label}</th>
                    <td className="py-3 px-4 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            Dieticianの強み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-[#16A34A] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {["PFCバランスが業界トップクラス", "メニュー約40種類で飽きにくい", "管理栄養士監修の安心感", "2プランで目的別に選択可能"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["送料がやや高め", "メニューの選択ができない場合がある", "増量目的には少しカロリー不足"].map((c) => (
                  <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">-</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            利用者の口コミ・評判
          </h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-gray-800">{r.name}</span>
                  <span className="text-xs text-gray-500">{r.period}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`text-sm ${j < Math.floor(r.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                      &#9733;
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{r.rating}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">Dieticianを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">PFC最適化された食事を試してみましょう</p>
            <Link
              href="/"
              className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ランキングに戻る
            </Link>
          </div>

          <h3 className="font-bold text-lg mb-3">他のサービスも比較する</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
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
