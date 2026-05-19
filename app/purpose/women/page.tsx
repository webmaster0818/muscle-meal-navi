import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性のボディメイクにおすすめの宅配弁当【低カロリー×高たんぱく】厳選5社比較【2026年】",
  description:
    "女性のボディメイク・ダイエットに最適な宅配弁当を厳選比較。低カロリー・適度なたんぱく質・美容成分にこだわった宅食5社を徹底解説。月経周期に合わせた栄養管理のコツも紹介。",
};

const services = [
  {
    rank: 1,
    name: "三ツ星ファーム",
    protein: "15〜25g",
    calories: "350kcal以下",
    price: "680円〜",
    point: "全メニュー350kcal以下で低カロリー管理が簡単。一流シェフ監修の味は業界トップクラス。見た目も華やかでSNS映えするメニューが多く、女性人気No.1。",
    href: "/review/mitsuboshi/",
  },
  {
    rank: 2,
    name: "nosh（ナッシュ）",
    protein: "20〜35g",
    calories: "300〜500kcal",
    price: "599円〜",
    point: "60種類以上の豊富なメニューで飽きずに継続可能。糖質30g以下設計でダイエットに最適。スイーツメニューもあり、甘いもの好きな女性にもうれしい。",
    href: "/review/nosh/",
  },
  {
    rank: 3,
    name: "RIZAPサポートミール",
    protein: "18〜25g",
    calories: "200〜300kcal",
    price: "882円〜",
    point: "あのRIZAPが監修した糖質制限弁当。糖質10g前後と業界最低水準。短期間で結果を出したい女性のダイエットに最適。たんぱく質もしっかり18g以上確保。",
    href: "/review/rizap-meal/",
  },
  {
    rank: 4,
    name: "マッスルデリ LEANコース",
    protein: "30〜40g",
    calories: "350〜450kcal",
    price: "980円〜",
    point: "女性のボディメイクに特化したLEANコース。たんぱく質30g以上でしっかり筋肉をつけたい女性向け。PFC設計の正確さが強み。",
    href: "/review/muscle-deli/",
  },
  {
    rank: 5,
    name: "ウェルネスダイニング",
    protein: "15〜25g",
    calories: "300〜400kcal",
    price: "740円〜",
    point: "管理栄養士に無料で食事相談ができる。カロリー制限コースは女性のダイエットにぴったり。やさしい味付けで毎日食べやすく、長期継続向き。",
    href: "/review/wellness-dining/",
  },
];

const nutritionNeeds = [
  {
    title: "たんぱく質は1食20〜30gを目安に",
    desc: "女性のボディメイクでは1食あたり20〜30gのたんぱく質が理想的です。1日の目標は体重×1.2〜1.6g。体重55kgなら66〜88g/日が目安。過剰摂取は腎臓に負担がかかるため、適量を意識しましょう。",
  },
  {
    title: "鉄分・カルシウムを意識的に摂取",
    desc: "女性は月経による鉄分の損失があり、鉄欠乏性貧血になりやすい体質です。また骨密度維持のためカルシウムも重要。宅配弁当に加え、小魚やほうれん草、乳製品などを意識的に取り入れましょう。",
  },
  {
    title: "良質な脂質で美容もサポート",
    desc: "脂質を極端に減らすと肌荒れやホルモンバランスの乱れにつながります。オメガ3脂肪酸（魚、くるみ）やオリーブオイルなどの良質な脂質を適度に摂取し、美容面もケアしましょう。",
  },
  {
    title: "食物繊維で腸内環境を整える",
    desc: "ダイエット中は食事量の減少により便秘になりがちです。1日18g以上の食物繊維を目標に、野菜・きのこ・海藻類を積極的に摂りましょう。腸内環境の改善は肌質やむくみの改善にもつながります。",
  },
];

const cycleTips = [
  {
    phase: "卵胞期（生理後〜排卵前）",
    period: "約2週間",
    desc: "エストロゲンが増加し、代謝が上がりやすい時期。ダイエットの効果が出やすく、トレーニング強度も上げやすい。この時期に集中的にボディメイクに取り組むのが効果的です。",
    color: "bg-pink-50 border-pink-100",
    textColor: "text-pink-600",
  },
  {
    phase: "黄体期（排卵後〜生理前）",
    period: "約2週間",
    desc: "プロゲステロンの影響で体温が上がり、むくみやすい時期。食欲が増加しやすいため、たんぱく質をしっかり摂って満腹感を維持しましょう。体重が増えても水分の影響が大きいので気にしすぎないことが大切です。",
    color: "bg-purple-50 border-purple-100",
    textColor: "text-purple-600",
  },
  {
    phase: "月経期",
    period: "約5〜7日",
    desc: "鉄分が不足しやすい時期。激しいトレーニングは控えめにし、鉄分・ビタミンCを意識的に摂取しましょう。無理な食事制限は避け、体を労わることを優先してください。",
    color: "bg-red-50 border-red-100",
    textColor: "text-red-600",
  },
];

const faqs = [
  {
    q: "女性のボディメイクに宅配弁当は効果的ですか？",
    a: "はい、非常に効果的です。カロリーとPFCが明確に管理された宅配弁当を利用することで、面倒な栄養計算なしにダイエット・ボディメイクが可能です。特に自炊でカロリーコントロールが難しい方や、忙しい方に最適です。",
  },
  {
    q: "女性に必要なたんぱく質量はどのくらいですか？",
    a: "ボディメイク中の女性は体重×1.2〜1.6gが目安です。体重55kgなら1日66〜88g。1食あたり20〜30gを3食で摂取するイメージです。筋トレの強度が高い場合は体重×1.6g寄りで設定しましょう。",
  },
  {
    q: "生理中はダイエットを休むべきですか？",
    a: "完全に休む必要はありませんが、無理な食事制限は避けましょう。月経期は鉄分の損失が大きいため、しっかり栄養を摂ることが重要です。体重が一時的に増えるのは水分の影響なので、気にせず適度な食事管理を続けてください。",
  },
  {
    q: "低カロリーすぎる宅配弁当は問題ないですか？",
    a: "1食200kcal未満のような極端な低カロリー食は、筋肉量の減少や代謝の低下を招きます。女性のボディメイクでは1食300〜450kcalが適正範囲です。宅配弁当で適度なカロリーを確保しつつ、PFCバランスを整えましょう。",
  },
  {
    q: "宅配弁当とプロテインは両方必要ですか？",
    a: "宅配弁当のたんぱく質量が1食20〜30gあれば、3食の合計で60〜90g確保できます。目標量に届かない場合はプロテインで補いましょう。間食としてプロテインを飲むことで、空腹感の抑制にも役立ちます。",
  },
  {
    q: "味が心配です。美味しい宅配弁当はありますか？",
    a: "三ツ星ファームは一流シェフ監修で味の評価が非常に高く、noshは60種類以上のメニューがあり好みに合わせて選べます。多くのサービスがお試しセットを用意しているので、まずは少量から試してみるのがおすすめです。",
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

export default function Women() {
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
            { name: "女性のボディメイクにおすすめ" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">女性のボディメイクにおすすめの宅配弁当</h1>
          <p className="text-gray-300">
            低カロリー×適度なたんぱく質で美しく引き締まる宅食を厳選
          </p>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            女性のボディメイクやダイエットでは、ただカロリーを減らすだけでは不十分です。適度なたんぱく質で筋肉を維持しつつ、鉄分・カルシウムなどの女性特有の栄養ニーズにも配慮する必要があります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            宅配弁当を活用すれば、カロリー管理と栄養バランスの両立が簡単に。仕事や育児で忙しい毎日でも、手軽にボディメイクを継続できます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、女性のボディメイク・ダイエットに最適な宅配弁当5社を厳選比較し、女性特有の栄養ニーズや月経周期に合わせた食事管理のコツも詳しく解説します。
          </p>
        </section>

        {/* Selection Points */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            女性が宅配弁当を選ぶポイント
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center bg-[#F0FDF4] rounded-lg p-4">
                <div className="text-3xl mb-2">🍽</div>
                <div className="font-bold text-[#16A34A] mb-1">カロリー控えめ</div>
                <div className="text-xs text-gray-500">1食300〜450kcal</div>
              </div>
              <div className="text-center bg-[#F0FDF4] rounded-lg p-4">
                <div className="text-3xl mb-2">💪</div>
                <div className="font-bold text-[#16A34A] mb-1">適度なたんぱく質</div>
                <div className="text-xs text-gray-500">1食20〜30g</div>
              </div>
              <div className="text-center bg-[#F0FDF4] rounded-lg p-4">
                <div className="text-3xl mb-2">✨</div>
                <div className="font-bold text-[#16A34A] mb-1">低糖質・美容成分</div>
                <div className="text-xs text-gray-500">糖質30g以下</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ranking */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            女性のボディメイク向け宅配弁当ランキング
          </h2>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.rank} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{s.rank}位
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{s.name}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">たんぱく質/食</div>
                    <div className="font-bold text-[#16A34A]">{s.protein}</div>
                  </div>
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">カロリー/食</div>
                    <div className="font-bold text-gray-800">{s.calories}</div>
                  </div>
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">価格</div>
                    <div className="font-bold text-gray-800">{s.price}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.point}</p>
                <Link href={s.href} className="text-sm text-[#16A34A] hover:underline font-medium">
                  詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition Needs */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            女性特有の栄養ニーズ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nutritionNeeds.map((t) => (
              <div key={t.title} className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-[#16A34A] mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menstrual Cycle */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            月経周期と栄養管理
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            女性のボディメイクでは、月経周期に合わせた食事管理が効果的です。ホルモンバランスの変化に応じて戦略を調整しましょう。
          </p>
          <div className="space-y-4">
            {cycleTips.map((c) => (
              <div key={c.phase} className={`rounded-lg p-5 border ${c.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`font-bold ${c.textColor}`}>{c.phase}</h3>
                  <span className="text-xs text-gray-500">（{c.period}）</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
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
            <h2 className="text-xl font-bold mb-3">美しく引き締まるボディメイクを始めよう</h2>
            <p className="text-gray-300 text-sm mb-6">栄養管理された宅配弁当で無理なくダイエット</p>
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
              { name: "減量期おすすめ", href: "/purpose/cutting/" },
              { name: "メンテナンス期", href: "/purpose/maintenance/" },
              { name: "三ツ星ファーム レビュー", href: "/review/mitsuboshi/" },
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
