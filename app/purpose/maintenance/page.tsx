import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンテナンス期におすすめの宅配弁当【体重維持×筋肉キープ】厳選5社比較【2026年】",
  description:
    "メンテナンス期（維持期）に最適な宅配弁当を厳選比較。筋肉を維持しながら体重をキープするためのPFCバランス・カロリー管理を徹底解説。おすすめ5社の価格・栄養素・メニューを比較。",
};

const services = [
  {
    rank: 1,
    name: "マッスルデリ MAINTAINコース",
    protein: "40〜50g",
    calories: "450〜550kcal",
    price: "1,080円〜",
    point: "メンテナンス期に特化したMAINTAINコースは、P30%・F25%・C45%のバランスを実現。カロリーも適度で、体重維持に最適な設計。PFCの正確さは業界随一。",
    href: "/review/muscle-deli/",
  },
  {
    rank: 2,
    name: "nosh（ナッシュ）",
    protein: "20〜35g",
    calories: "300〜500kcal",
    price: "599円〜",
    point: "60種類以上の豊富なメニューで飽きにくく、長期継続に最適。糖質30g以下に設計されており、体重維持期の食事管理がしやすい。コスパの良さも魅力。",
    href: "/review/nosh/",
  },
  {
    rank: 3,
    name: "Dietician SMALL PLAN",
    protein: "30〜40g",
    calories: "350〜450kcal",
    price: "898円〜",
    point: "管理栄養士が設計したPFCバランス弁当。SMALL PLANはメンテナンス期のカロリー帯にぴったり。約40種類のメニューで栄養バランスも優秀。",
    href: "/review/dietician/",
  },
  {
    rank: 4,
    name: "三ツ星ファーム",
    protein: "15〜25g",
    calories: "350kcal以下",
    price: "680円〜",
    point: "一流シェフ監修の低カロリー弁当。すべて350kcal以下で体重管理がしやすい。味の評価が高く、メンテナンス期の長期利用に向いている。",
    href: "/review/mitsuboshi/",
  },
  {
    rank: 5,
    name: "ウェルネスダイニング",
    protein: "15〜25g",
    calories: "300〜400kcal",
    price: "740円〜",
    point: "管理栄養士に無料相談できるサポート付き。栄養バランスコースは体重維持に適したカロリー設計。やさしい味付けで毎日食べても飽きにくい。",
    href: "/review/wellness-dining/",
  },
];

const tips = [
  {
    title: "カロリーは基礎代謝×活動係数で設定",
    desc: "メンテナンス期のカロリー目標は「基礎代謝×活動係数」で算出します。例えば基礎代謝1,500kcal・活動係数1.55（中程度の運動）なら、1日の目標は約2,325kcal。増減幅は±100kcal以内に抑えましょう。",
  },
  {
    title: "PFC比率はP30% F25% C45%が目安",
    desc: "メンテナンス期の理想的なPFC比率はたんぱく質30%、脂質25%、炭水化物45%です。増量期ほど炭水化物は必要ありませんが、筋肉維持に十分なたんぱく質を確保することが重要です。",
  },
  {
    title: "体重の微調整は炭水化物で行う",
    desc: "体重が増加傾向なら炭水化物を少し減らし、減少傾向なら増やす。たんぱく質と脂質は一定に保ち、炭水化物の量で微調整するのがメンテナンス期の基本戦略です。",
  },
  {
    title: "週1回の体重測定で管理する",
    desc: "毎日の体重変動は水分量の影響が大きいため、週1回（同じ曜日・同じ時間帯）に測定し、週平均で管理しましょう。±0.5kg以内の変動は正常範囲です。",
  },
];

const mistakes = [
  {
    title: "カロリーを落としすぎる",
    desc: "減量期の癖でカロリーを低く設定しすぎると、筋肉量の減少や代謝の低下を招きます。メンテナンス期は適切なカロリーを摂ることが重要です。",
  },
  {
    title: "たんぱく質の摂取量を減らす",
    desc: "「筋肉を増やす必要がないから」とたんぱく質を減らすのはNG。筋肉の維持には体重×1.6〜2.0gのたんぱく質が必要です。",
  },
  {
    title: "食事管理をやめてしまう",
    desc: "目標体重に到達して食事管理をやめると、リバウンドの原因に。宅配弁当を活用して無理なくPFCを管理し続けることが体型維持の鍵です。",
  },
];

const faqs = [
  {
    q: "メンテナンス期とは何ですか？",
    a: "メンテナンス期（維持期）とは、増量期や減量期を経た後に、現在の体重と筋肉量を維持するための期間です。摂取カロリーと消費カロリーをほぼ同じに設定し、体組成を安定させることが目的です。",
  },
  {
    q: "メンテナンス期はどのくらいの期間を設けるべきですか？",
    a: "一般的に4〜12週間が推奨されます。増量期や減量期で変化した代謝を安定させるために、最低でも4週間はメンテナンス期を設けましょう。長期的な体型維持を目指すなら、メンテナンス期を基本とした生活スタイルが理想です。",
  },
  {
    q: "メンテナンス期のPFCバランスはどう設定すべきですか？",
    a: "たんぱく質30%、脂質25%、炭水化物45%が一般的な目安です。体重70kgの場合、たんぱく質は約140g（体重×2g）を確保し、残りを脂質と炭水化物で配分します。",
  },
  {
    q: "メンテナンス期に宅配弁当は必要ですか？",
    a: "必須ではありませんが、PFC管理を継続する上で非常に便利です。自炊だとカロリー計算が面倒になり、食事管理をやめてしまう人が多いのが現実。宅配弁当なら栄養素が明記されているため、手軽に管理を続けられます。",
  },
  {
    q: "メンテナンス期のカロリー計算方法を教えてください",
    a: "基礎代謝×活動係数で計算します。活動係数は、ほとんど運動しない人は1.2、週1-3回運動は1.375、週3-5回運動は1.55、週6-7回運動は1.725が目安です。例えば基礎代謝1,600kcalで週3-5回運動する場合、1,600×1.55＝2,480kcalが目標です。",
  },
  {
    q: "メンテナンス期でも筋トレは続けるべきですか？",
    a: "はい、筋肉量を維持するためにトレーニングの継続は必須です。ただし、増量期ほどの高ボリュームは不要で、週2-3回の筋トレで十分に筋肉を維持できます。強度は維持しつつ、セット数を少し減らすのが効果的です。",
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

export default function Maintenance() {
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
            { name: "メンテナンス期におすすめ" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">メンテナンス期におすすめの宅配弁当</h1>
          <p className="text-gray-300">
            筋肉維持×体重キープのための宅配弁当を厳選比較
          </p>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            メンテナンス期（維持期）は、増量期や減量期で手に入れた体型をキープするための重要な期間です。摂取カロリーと消費カロリーのバランスを取りながら、十分なたんぱく質を確保して筋肉量を維持する必要があります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            しかし、「ちょうどいいカロリー」を毎日の自炊で管理するのは意外と難しいもの。食べすぎれば体脂肪が増え、食べなさすぎれば筋肉が落ちてしまいます。PFCが計算済みの宅配弁当を活用すれば、面倒なカロリー計算なしで体型維持が可能です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、メンテナンス期に最適な宅配弁当5社を厳選比較し、体重維持のための食事戦略や失敗しがちなパターンについても詳しく解説します。
          </p>
        </section>

        {/* PFC Guide */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メンテナンス期のPFC目安
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center bg-[#F0FDF4] rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-1">たんぱく質 (P)</div>
                <div className="text-2xl font-bold text-[#16A34A]">30%</div>
                <div className="text-xs text-gray-500 mt-1">体重×1.6〜2.0g</div>
              </div>
              <div className="text-center bg-[#FEF9C3] rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-1">脂質 (F)</div>
                <div className="text-2xl font-bold text-[#CA8A04]">25%</div>
                <div className="text-xs text-gray-500 mt-1">ホルモン維持に重要</div>
              </div>
              <div className="text-center bg-[#FEF3C7] rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-1">炭水化物 (C)</div>
                <div className="text-2xl font-bold text-[#D97706]">45%</div>
                <div className="text-xs text-gray-500 mt-1">トレーニングの燃料</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              カロリー目標は「基礎代謝×活動係数」で算出します。例：基礎代謝1,500kcal × 活動係数1.55（週3-5回運動）= 約2,325kcal/日。この数値を基準に±100kcal以内で調整しましょう。
            </p>
          </div>
        </section>

        {/* Ranking */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メンテナンス期向け宅配弁当ランキング
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

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メンテナンス期の栄養ポイント
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

        {/* Mistakes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メンテナンス期に失敗しがちなパターン
          </h2>
          <div className="space-y-4">
            {mistakes.map((m) => (
              <div key={m.title} className="bg-red-50 rounded-lg p-5 border border-red-100">
                <h3 className="font-bold text-red-600 mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
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
            <h2 className="text-xl font-bold mb-3">メンテナンス期の食事管理を始めよう</h2>
            <p className="text-gray-300 text-sm mb-6">PFC計算済みの宅配弁当で無理なく体型キープ</p>
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
              { name: "PFCバランス計算", href: "/knowledge/pfc-calculator/" },
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
