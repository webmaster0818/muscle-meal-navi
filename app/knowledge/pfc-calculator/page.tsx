import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PFCバランス計算方法｜筋トレ向け完全ガイド【2026年】",
  description:
    "PFCバランスの計算方法を筋トレ・ボディメイク向けに徹底解説。基礎代謝の算出方法から、増量期・減量期・維持期別のPFC比率、1日の目標設定まで完全ガイド。宅配弁当を使った実践例も紹介。",
};

const pfcSteps = [
  {
    step: 1,
    title: "基礎代謝（BMR）を計算する",
    desc: "ハリス・ベネディクト方程式を使って基礎代謝を算出します。",
    formula: "男性: 88.362 + (13.397 × 体重kg) + (4.799 × 身長cm) - (5.677 × 年齢)\n女性: 447.593 + (9.247 × 体重kg) + (3.098 × 身長cm) - (4.330 × 年齢)",
    example: "例: 30歳男性、体重70kg、身長175cm → BMR = 88.362 + 937.79 + 839.825 - 170.31 = 約1,696kcal",
  },
  {
    step: 2,
    title: "活動代謝（TDEE）を計算する",
    desc: "基礎代謝に活動係数を掛けて、1日の総消費カロリーを算出します。",
    formula: "座り仕事: BMR × 1.2\n軽い運動（週1-3回）: BMR × 1.375\n中程度の運動（週3-5回）: BMR × 1.55\nハードなトレーニング（週6-7回）: BMR × 1.725",
    example: "例: BMR 1,696kcal × 1.55（週4回トレーニング） = 約2,629kcal",
  },
  {
    step: 3,
    title: "目的別にカロリー目標を設定する",
    desc: "増量・維持・減量の目的に応じて、TDEEから目標カロリーを決めます。",
    formula: "増量期: TDEE + 300〜500kcal\n維持期: TDEE\n減量期: TDEE - 300〜500kcal",
    example: "例: TDEE 2,629kcalの場合\n増量期: 2,929〜3,129kcal\n維持期: 2,629kcal\n減量期: 2,129〜2,329kcal",
  },
  {
    step: 4,
    title: "PFC比率を決める",
    desc: "目的別に最適なPFC（たんぱく質・脂質・炭水化物）の比率を設定します。",
    formula: "増量期: P25% / F25% / C50%\n維持期: P30% / F25% / C45%\n減量期: P35% / F20% / C45%",
    example: "例: 減量期2,200kcalの場合\nP: 2,200 × 0.35 = 770kcal = 193g\nF: 2,200 × 0.20 = 440kcal = 49g\nC: 2,200 × 0.45 = 990kcal = 248g",
  },
];

const pfcTable = [
  { purpose: "増量期（バルク）", calories: "TDEE+300〜500", protein: "体重×2g", fat: "総Cal×25%", carbs: "残りのCal" },
  { purpose: "維持期（メンテナンス）", calories: "TDEE", protein: "体重×1.8-2g", fat: "総Cal×25%", carbs: "残りのCal" },
  { purpose: "減量期（カット）", calories: "TDEE-300〜500", protein: "体重×2-2.5g", fat: "総Cal×20%", carbs: "残りのCal" },
];

const mealPlanExample = {
  title: "減量期の1日PFCプラン例（体重70kg / 目標2,200kcal）",
  meals: [
    { meal: "朝食", menu: "オートミール50g + プロテイン1杯 + バナナ", p: 35, f: 5, c: 60, cal: 425 },
    { meal: "昼食", menu: "マッスルデリ LEANコース", p: 35, f: 12, c: 40, cal: 408 },
    { meal: "間食", menu: "プロテイン1杯 + ナッツ20g", p: 28, f: 12, c: 5, cal: 236 },
    { meal: "夕食", menu: "nosh 高たんぱくメニュー + 玄米100g", p: 30, f: 10, c: 55, cal: 430 },
    { meal: "トレ後", menu: "プロテイン1杯 + 餅2個", p: 25, f: 1, c: 50, cal: 309 },
  ],
};

const totalPFC = mealPlanExample.meals.reduce(
  (acc, m) => ({ p: acc.p + m.p, f: acc.f + m.f, c: acc.c + m.c, cal: acc.cal + m.cal }),
  { p: 0, f: 0, c: 0, cal: 0 }
);

const faqs = [
  {
    q: "PFCバランスとは何ですか？",
    a: "PFCバランスとは、三大栄養素であるProtein（たんぱく質）、Fat（脂質）、Carbohydrate（炭水化物）の摂取比率のことです。筋トレやボディメイクでは、このPFCバランスを目的に応じて適切に管理することが重要です。",
  },
  {
    q: "PFC計算でたんぱく質は体重の何倍が正解ですか？",
    a: "一般的な筋トレユーザーの場合、体重1kgあたり1.6-2.2gが推奨されています。増量期は2g前後、減量期は筋肉維持のため2-2.5gと多めに設定するのが一般的です。",
  },
  {
    q: "脂質を減らしすぎるとどうなりますか？",
    a: "脂質を総カロリーの15%以下に減らすと、テストステロンなどのホルモンバランスが崩れるリスクがあります。最低でも総カロリーの20%は脂質から摂取することを推奨します。",
  },
  {
    q: "炭水化物は筋トレに必要ですか？",
    a: "はい、炭水化物は筋トレのエネルギー源として重要です。トレーニング前に炭水化物を摂ることでパフォーマンスが向上し、トレーニング後に摂ることで筋グリコーゲンの回復を促進します。",
  },
  {
    q: "PFC管理が面倒な場合はどうすればいいですか？",
    a: "PFC計算済みの宅配弁当を活用するのが最も効率的です。マッスルデリやDieticianなどのサービスはPFCが明記されているため、記録アプリに入力するだけで簡単に管理できます。",
  },
  {
    q: "チートデイはPFC管理にどう影響しますか？",
    a: "チートデイは1-2週間に1回程度設けることで、代謝の低下を防ぎ、精神的なリフレッシュにもなります。ただし、暴飲暴食ではなくTDEE+500-1,000kcal程度に抑え、翌日から通常のPFC管理に戻しましょう。",
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

export default function PfcCalculator() {
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
            { name: "PFCバランス計算方法" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">PFCバランス計算方法</h1>
          <p className="text-gray-300">
            筋トレ向け完全ガイド
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            PFCバランスの適切な管理は、筋トレ・ボディメイクの成果を左右する最も重要な要素の一つです。トレーニングをどんなに頑張っても、食事（PFC）が適切でなければ思うような結果は得られません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、基礎代謝の計算から目的別のPFC設定方法まで、4ステップで解説します。さらに、宅配弁当を活用した実践的な食事プランの例も紹介します。
          </p>
        </section>

        {/* 4 Steps */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            PFC計算の4ステップ
          </h2>
          <div className="space-y-6">
            {pfcSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <div className="bg-[#F9FAFB] rounded-lg p-4 mb-3">
                  <p className="text-xs text-gray-500 font-bold mb-1">計算式</p>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{s.formula}</pre>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-xs text-green-600 font-bold mb-1">計算例</p>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{s.example}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Purpose-based PFC table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            目的別PFC設定早見表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">目的</th>
                  <th className="py-3 px-4 text-center font-bold">カロリー</th>
                  <th className="py-3 px-4 text-center font-bold">たんぱく質</th>
                  <th className="py-3 px-4 text-center font-bold">脂質</th>
                  <th className="py-3 px-4 text-center font-bold">炭水化物</th>
                </tr>
              </thead>
              <tbody>
                {pfcTable.map((row, i) => (
                  <tr key={row.purpose} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.purpose}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.calories}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.protein}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.fat}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.carbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Meal plan example */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            {mealPlanExample.title}
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">食事</th>
                  <th className="py-3 px-4 text-left font-bold">メニュー</th>
                  <th className="py-3 px-3 text-center font-bold">P(g)</th>
                  <th className="py-3 px-3 text-center font-bold">F(g)</th>
                  <th className="py-3 px-3 text-center font-bold">C(g)</th>
                  <th className="py-3 px-3 text-center font-bold">kcal</th>
                </tr>
              </thead>
              <tbody>
                {mealPlanExample.meals.map((m, i) => (
                  <tr key={m.meal} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{m.meal}</td>
                    <td className="py-3 px-4 text-gray-600">{m.menu}</td>
                    <td className="py-3 px-3 text-center text-[#16A34A] font-bold">{m.p}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{m.f}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{m.c}</td>
                    <td className="py-3 px-3 text-center text-gray-600">{m.cal}</td>
                  </tr>
                ))}
                <tr className="bg-[#16A34A] text-white font-bold">
                  <td className="py-3 px-4" colSpan={2}>合計</td>
                  <td className="py-3 px-3 text-center">{totalPFC.p}g</td>
                  <td className="py-3 px-3 text-center">{totalPFC.f}g</td>
                  <td className="py-3 px-3 text-center">{totalPFC.c}g</td>
                  <td className="py-3 px-3 text-center">{totalPFC.cal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 数値は概算です。実際のPFCはメニューにより異なります。
          </p>
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
            <h2 className="text-xl font-bold mb-3">PFC管理を宅配弁当で簡単に</h2>
            <p className="text-gray-300 text-sm mb-6">PFC計算済みの宅配弁当なら、面倒な栄養計算が不要です</p>
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
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
              { name: "マッスルデリ vs nosh", href: "/compare/muscledeli-vs-nosh/" },
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
