import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マッスルミールナビ | 筋トレする人のための宅配弁当比較【2026年最新】",
  description:
    "筋トレ・ボディメイクに最適な宅配弁当を徹底比較。マッスルデリ・nosh・筋肉食堂DELIなど人気10社のPFC・価格・口コミを比較し、増量・減量・メンテナンス目的別におすすめをランキング形式でご紹介。",
  openGraph: {
    title: "マッスルミールナビ | 筋トレする人のための宅配弁当比較",
    description: "筋トレ・ボディメイクに最適な宅配弁当を徹底比較。PFC・価格・口コミで選ぶおすすめランキング。",
    type: "website",
  },
};

const services = [
  {
    rank: 1,
    name: "マッスルデリ",
    proteinPerMeal: "30〜65g",
    pricePerMeal: "980円〜(定期)",
    features: [
      "たんぱく質30-65g/食の高たんぱく設計",
      "増量・減量・メンテナンスの3コース展開",
      "管理栄養士が全メニューを監修",
      "PFCバランスが計算済みで手間いらず",
    ],
    pros: [
      "目的別にコースが選べるため迷わない",
      "たんぱく質含有量がトップクラス",
      "冷凍で長期保存が可能",
    ],
    cons: [
      "他社と比べてやや価格が高め",
      "メニュー数が限られている",
    ],
    recommend: "本格的な増量・減量に取り組むトレーニーに最適",
    reviewPath: "/review/muscle-deli/",
  },
  {
    rank: 2,
    name: "nosh(ナッシュ)",
    proteinPerMeal: "糖質30g以下",
    pricePerMeal: "599円〜/食",
    features: [
      "全メニュー糖質30g以下の低糖質設計",
      "60種以上の豊富なメニューラインナップ",
      "好きなメニューを自分で選択可能",
      "継続するほど割引率がアップ",
    ],
    pros: [
      "圧倒的なメニュー数で飽きにくい",
      "1食599円〜とコスパが優秀",
      "糖質制限ダイエットに最適",
    ],
    cons: [
      "たんぱく質量はメニューにより差がある",
      "人気メニューは売り切れることがある",
    ],
    recommend: "糖質制限しながら食事を楽しみたい方に最適",
    reviewPath: "/review/nosh/",
  },
  {
    rank: 3,
    name: "筋肉食堂DELI",
    proteinPerMeal: "40〜65g",
    pricePerMeal: "996円〜/食",
    features: [
      "たんぱく質40-65g/食のハイプロテイン",
      "レストラン「筋肉食堂」の味をそのまま",
      "プロアスリートも愛用する本格品質",
      "ダイエット・バルクアップ各コースあり",
    ],
    pros: [
      "レストラン品質の本格的な味わい",
      "たんぱく質含有量が非常に高い",
      "アスリートの実績・信頼感がある",
    ],
    cons: [
      "価格帯は高めの設定",
      "配送エリアに制限がある場合がある",
    ],
    recommend: "味にもこだわりたい本格派トレーニーに最適",
    reviewPath: "/review/kinniku-shokudo/",
  },
  {
    rank: 4,
    name: "三ツ星ファーム",
    proteinPerMeal: "15g以上",
    pricePerMeal: "626円〜/食",
    features: [
      "全メニューたんぱく質15g以上を確保",
      "1食350kcal以下の低カロリー設計",
      "一流シェフ監修のおしゃれなメニュー",
      "見た目も味も満足度の高いお弁当",
    ],
    pros: [
      "カロリーコントロールがしやすい",
      "おしゃれなメニューでSNS映えする",
      "コスパと品質のバランスが良い",
    ],
    cons: [
      "ハードなトレーニーにはたんぱく質がやや不足",
      "ガッツリ系メニューは少なめ",
    ],
    recommend: "健康的にダイエットしたい方・女性トレーニーに最適",
    reviewPath: "/review/mitsuboshi/",
  },
  {
    rank: 5,
    name: "WooFoods",
    proteinPerMeal: "30g以上",
    pricePerMeal: "648円〜/食",
    features: [
      "たんぱく質30g以上の高たんぱく設計",
      "高たんぱく・低脂質に特化した配合",
      "ボディメイクに最適化されたPFCバランス",
      "トレーニング後の栄養補給に最適",
    ],
    pros: [
      "高たんぱく低脂質のバランスが秀逸",
      "ボディメイク特化で目的が明確",
      "価格が比較的リーズナブル",
    ],
    cons: [
      "メニュー数がやや少なめ",
      "知名度が他社に比べて低い",
    ],
    recommend: "コスパ重視で高たんぱく食を求める方に最適",
    reviewPath: "/review/woofoods/",
  },
];

const faqs = [
  {
    q: "筋トレ向け宅配弁当とは何ですか？",
    a: "筋トレ向け宅配弁当は、たんぱく質・脂質・炭水化物（PFC）のバランスが計算された冷凍弁当です。トレーニングの効果を最大化するための栄養設計がされており、調理の手間なく最適な食事が摂れます。",
  },
  {
    q: "1日にどのくらいのたんぱく質が必要ですか？",
    a: "筋トレをしている方は、体重1kgあたり1.6〜2.2gのたんぱく質摂取が推奨されています。体重70kgの方であれば、1日112〜154gが目安です。宅配弁当を活用することで、効率的にたんぱく質を摂取できます。",
  },
  {
    q: "増量期と減量期で選ぶサービスは変わりますか？",
    a: "はい。増量期はカロリーとたんぱく質が多いマッスルデリの「GAIN」コースや筋肉食堂DELIがおすすめです。減量期は低カロリーのnoshや三ツ星ファーム、低脂質のWooFoodsが適しています。",
  },
  {
    q: "宅配弁当は冷凍で届きますか？保存期間は？",
    a: "ほとんどのサービスが冷凍便で届きます。保存期間は一般的に製造から約6ヶ月〜1年です。電子レンジで温めるだけで食べられるため、忙しいトレーニーにも便利です。",
  },
  {
    q: "送料はかかりますか？",
    a: "サービスによって異なります。マッスルデリは送料無料のプランがあり、noshは地域によって送料が変動します。定期便にすると送料が割引になるサービスが多いです。",
  },
  {
    q: "味はおいしいですか？",
    a: "各社とも味の改良に力を入れており、特に筋肉食堂DELIはレストラン品質、三ツ星ファームは一流シェフ監修で味の評価が高いです。noshはメニュー数が豊富なので、好みに合ったものを選びやすいです。",
  },
  {
    q: "アレルギー対応はありますか？",
    a: "多くのサービスでアレルギー成分表示は行っていますが、完全なアレルギー対応メニューは限られています。各公式サイトで成分表を確認するか、カスタマーサポートに問い合わせることをおすすめします。",
  },
  {
    q: "定期便の解約は簡単ですか？",
    a: "はい。多くのサービスではマイページから簡単に解約・スキップ・一時停止が可能です。解約縛りがないサービスがほとんどなので、まずはお試しから始めることをおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A1A] via-gray-900 to-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#16A34A] font-bold text-sm tracking-widest mb-4 uppercase">
            Muscle Meal Navigator
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            筋トレする人のための
            <br />
            <span className="text-[#16A34A]">宅配弁当選び</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            PFC（たんぱく質・脂質・炭水化物）バランスを重視した
            宅配弁当サービスを徹底比較。あなたの目的に合った最適な食事を見つけましょう。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            ランキングを見る
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10社", label: "厳選サービス" },
              { num: "PFC", label: "徹底比較" },
              { num: "増量/減量", label: "目的別提案" },
              { num: "100件+", label: "口コミ掲載" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="text-2xl md:text-3xl font-bold text-[#16A34A] mb-1">{stat.num}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="bg-[#F9FAFB] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              筋トレ向け宅配弁当おすすめランキング
            </h2>
            <p className="text-gray-500">PFC・価格・味・口コミを総合評価してランキング</p>
          </div>

          <div className="space-y-8">
            {services.map((s) => (
              <article
                key={s.rank}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-[#1A1A1A] text-white px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#16A34A] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">
                      {s.rank}
                    </span>
                    <h3 className="font-bold text-lg">{s.name}</h3>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-[#16A34A] font-bold">{s.pricePerMeal}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Key info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">たんぱく質/食</div>
                      <div className="font-bold text-[#16A34A]">{s.proteinPerMeal}</div>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">価格/食</div>
                      <div className="font-bold">{s.pricePerMeal}</div>
                    </div>
                    <div className="bg-[#F9FAFB] rounded-lg p-3 text-center col-span-2">
                      <div className="text-xs text-gray-500 mb-1">おすすめ</div>
                      <div className="text-sm font-medium">{s.recommend}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-sm text-gray-700 mb-2">特徴</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#16A34A] mt-0.5 flex-shrink-0">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-bold text-sm text-green-700 mb-2">メリット</h4>
                      <ul className="space-y-1">
                        {s.pros.map((p, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 flex-shrink-0">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-red-700 mb-2">デメリット</h4>
                      <ul className="space-y-1">
                        {s.cons.map((c, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-red-500 flex-shrink-0">-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={s.reviewPath}
                      className="flex-1 text-center bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      詳しいレビューを見る
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose-based section */}
      <section id="purpose" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">目的別おすすめサービス</h2>
            <p className="text-gray-500">あなたのトレーニング目標に合った宅配弁当を選びましょう</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "増量・バルクアップ",
                desc: "高カロリー・高たんぱくで筋肥大をサポート",
                services: ["マッスルデリ（GAIN）", "筋肉食堂DELI"],
                color: "bg-red-50 border-red-200",
                textColor: "text-red-700",
              },
              {
                title: "減量・ダイエット",
                desc: "低カロリー・低脂質で脂肪燃焼を促進",
                services: ["nosh(ナッシュ)", "三ツ星ファーム"],
                color: "bg-blue-50 border-blue-200",
                textColor: "text-blue-700",
              },
              {
                title: "メンテナンス・体型維持",
                desc: "バランスの取れたPFCで体型をキープ",
                services: ["マッスルデリ（MAINTAIN）", "WooFoods"],
                color: "bg-green-50 border-green-200",
                textColor: "text-green-700",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border p-6 ${item.color}`}
              >
                <h3 className={`font-bold text-lg mb-2 ${item.textColor}`}>{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.services.map((name) => (
                    <div key={name} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <span className="text-[#16A34A]">&#10003;</span>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare table */}
      <section id="compare" className="bg-[#F9FAFB] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">サービス比較表</h2>
            <p className="text-gray-500">主要5サービスの基本情報を一覧で比較</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-[#1A1A1A] text-white text-sm">
                  <th className="py-3 px-4 text-left font-bold">サービス名</th>
                  <th className="py-3 px-4 text-center font-bold">たんぱく質/食</th>
                  <th className="py-3 px-4 text-center font-bold">価格/食</th>
                  <th className="py-3 px-4 text-center font-bold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s, i) => (
                  <tr key={s.rank} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-bold text-sm">
                      <Link href={s.reviewPath} className="text-[#16A34A] hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center text-sm">{s.proteinPerMeal}</td>
                    <td className="py-3 px-4 text-center text-sm">{s.pricePerMeal}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{s.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">よくある質問</h2>
            <p className="text-gray-500">筋トレ向け宅配弁当に関するよくある質問</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#F9FAFB] rounded-lg border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-gray-800 hover:text-[#16A34A] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#16A34A] font-bold text-sm">Q.</span>
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                  <span className="text-gray-400 font-bold text-sm mr-2">A.</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#1A1A1A] to-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            あなたに最適な宅配弁当を見つけよう
          </h2>
          <p className="text-gray-300 mb-8">
            目的・予算・味の好みに合わせて、ベストなサービスを選びましょう。
            まずはランキングをチェックして、気になるサービスの詳細レビューをご覧ください。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg shadow-lg"
          >
            ランキングをもう一度見る
          </Link>
        </div>
      </section>
    </>
  );
}
