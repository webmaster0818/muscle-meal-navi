import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ウェルネスダイニングの口コミ・評判｜制限食専門の宅配弁当を徹底レビュー【2026年】",
  description:
    "ウェルネスダイニングを実際に利用した口コミ・評判を紹介。制限食専門の宅配弁当のPFC、価格、メニュー内容を徹底レビュー。カロリー制限・糖質制限・塩分制限に対応。",
};

const overview = {
  name: "ウェルネスダイニング",
  protein: "15〜20g/食",
  fat: "8〜15g/食",
  carbs: "15〜25g/食（糖質制限食）",
  calories: "240〜350kcal/食",
  price: "694円〜（定期）",
  menuCount: "約60種類",
  delivery: "全国対応（冷凍便）",
  courses: "カロリー制限 / 塩分制限 / たんぱく&塩分調整 / 糖質制限 / 健康応援",
};

const strengths = [
  {
    title: "制限食のスペシャリスト",
    desc: "カロリー・塩分・糖質・たんぱく質の各種制限食を専門的に提供。医師や管理栄養士の監修のもと、正確な栄養管理を実現します。",
  },
  {
    title: "管理栄養士への無料相談",
    desc: "常駐する管理栄養士に電話で無料相談が可能。自分に合ったコース選びや、食事の組み合わせについてプロの助言を受けられます。",
  },
  {
    title: "制限食でもおいしい味設計",
    desc: "制限食にありがちな味気なさを解消。出汁や香辛料を活かした調理で、制限食とは思えないおいしさを追求しています。",
  },
  {
    title: "初回送料無料でお試し可能",
    desc: "初回注文は送料無料で利用可能。まずは味を試してから継続を判断できるため、リスクなく始められます。",
  },
];

const reviews = [
  {
    name: "T.O さん（40代男性）",
    rating: 4.0,
    period: "利用歴6ヶ月",
    text: "糖質制限食を利用しています。筋トレと併せて体脂肪率を落とすのが目的ですが、糖質15g前後に抑えられているので助かります。味は制限食とは思えないほどしっかりしていて驚きました。管理栄養士に電話相談できるのも心強い。",
  },
  {
    name: "M.K さん（50代女性）",
    rating: 4.5,
    period: "利用歴1年",
    text: "カロリー制限食を夫婦で利用中です。240kcal前後の食事で、体重管理がとても楽になりました。メニューが約60種類あるので飽きません。味付けも薄すぎず、ちょうどいいです。",
  },
  {
    name: "J.S さん（30代男性）",
    rating: 3.5,
    period: "利用歴2ヶ月",
    text: "減量目的で糖質制限食を試しましたが、たんぱく質量が15-20gと筋トレ向けにはやや物足りない。ただ、プロテインと併用すれば問題ない範囲。価格が安めなのは魅力的です。",
  },
  {
    name: "R.F さん（60代男性）",
    rating: 4.5,
    period: "利用歴8ヶ月",
    text: "腎臓の数値が気になり、たんぱく&塩分調整食を利用しています。自分で栄養計算するのは大変なので、全てプロが管理してくれるのは本当に助かります。味もおいしいので毎日の食事が楽しみです。",
  },
];

const faqs = [
  {
    q: "ウェルネスダイニングは筋トレ目的で使えますか？",
    a: "そのままでは1食あたりのたんぱく質が15-20g程度と少なめですが、糖質制限食やカロリー制限食は減量期の食事管理に適しています。プロテインとの併用がおすすめです。",
  },
  {
    q: "コースの選び方がわかりません。",
    a: "無料の管理栄養士電話相談サービスがあります。自分の目的や健康状態を伝えれば、最適なコースを提案してもらえます。一般的な減量目的ならカロリー制限食か糖質制限食がおすすめです。",
  },
  {
    q: "初回はどのコースがおすすめですか？",
    a: "迷ったら「健康応援気配り宅配食」がおすすめです。カロリー300kcal以下でバランスの取れた食事が摂れます。初回は送料無料なので、まずは味を確認してみてください。",
  },
  {
    q: "定期便と都度購入はどちらがお得ですか？",
    a: "定期便の方がお得です。定期便なら送料が毎回半額になるほか、1食あたりの価格もお得になります。スキップや解約はいつでも可能です。",
  },
  {
    q: "冷凍庫にどのくらいスペースが必要ですか？",
    a: "7食セットで冷凍庫の約1/3程度のスペースが必要です。14食や21食セットの場合はさらにスペースが必要なので、事前に確認してください。",
  },
  {
    q: "味付けは薄いですか？",
    a: "制限食でありながら、出汁や香辛料を効かせた味設計で、味気ない印象はありません。口コミでも『制限食とは思えないおいしさ』と評価されることが多いです。",
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
  { name: "タイヘイファミリーセット", href: "/review/taihei/" },
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "RIZAPサポートミール", href: "/review/rizap-meal/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
];

export default function WellnessDining() {
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
            { name: "ウェルネスダイニング" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">ウェルネスダイニングの口コミ・評判</h1>
          <p className="text-gray-300">
            制限食専門の宅配弁当を徹底レビュー
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
                  ["炭水化物（糖質）/食", overview.carbs],
                  ["カロリー/食", overview.calories],
                  ["価格", overview.price],
                  ["メニュー数", overview.menuCount],
                  ["配送", overview.delivery],
                  ["コース", overview.courses],
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
            ウェルネスダイニングの強み
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
                {["制限食の種類が豊富", "管理栄養士に無料で相談可能", "制限食でもおいしい味設計", "初回送料無料でお試し可能"].map((p) => (
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
                {["たんぱく質量は筋トレ目的にはやや少ない", "メニューの個別選択はできない", "ボリュームが少なめ"].map((c) => (
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
            <h2 className="text-xl font-bold mb-3">ウェルネスダイニングを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">初回送料無料でお試しできます</p>
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
