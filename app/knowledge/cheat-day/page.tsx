import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "チートデイの正しいやり方と頻度｜筋トレ中の停滞期を打破【2026年】",
  description:
    "チートデイの正しいやり方・頻度・摂取カロリー目安を徹底解説。体脂肪率別の実施タイミング、メリット（代謝回復・精神的リフレッシュ）、やってはいけないNG例、翌日のリカバリー方法、おすすめ食事例を紹介。",
  keywords: ["チートデイ", "やり方", "頻度", "筋トレ", "停滞期", "代謝回復"],
  openGraph: {
    title: "チートデイの正しいやり方と頻度｜筋トレ中の停滞期を打破",
    description:
      "チートデイの正しいやり方・頻度を徹底解説。体脂肪率別の実施タイミングとNG例も。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/cheat-day/",
  },
};

const benefits = [
  {
    title: "代謝の回復（レプチン分泌促進）",
    desc: "長期間のカロリー制限では、食欲を抑えるホルモン「レプチン」の分泌が低下し、代謝が落ちます。チートデイで一時的にカロリーを増やすことで、レプチンの分泌を回復させ、停滞期を打破できます。",
  },
  {
    title: "精神的リフレッシュ",
    desc: "厳格な食事制限の連続はストレスの原因に。チートデイを計画的に設けることで「あと○日頑張れば好きなものが食べられる」というモチベーションになり、ダイエットの継続率が向上します。",
  },
  {
    title: "甲状腺ホルモンの正常化",
    desc: "カロリー制限が続くと、甲状腺ホルモン（T3）の分泌が低下し、基礎代謝が下がります。チートデイでカロリーを摂ることで、甲状腺ホルモンの分泌を正常化し、脂肪燃焼効率を維持します。",
  },
  {
    title: "筋グリコーゲンの回復",
    desc: "炭水化物を多めに摂取することで、枯渇した筋グリコーゲンが回復。翌日以降のトレーニングパフォーマンスが向上し、筋力アップにつながります。",
  },
];

const frequencyTable = [
  { bodyFat: "10%以下", frequency: "週1回", note: "体脂肪が低いほどレプチン低下が顕著。週1回のチートデイが効果的。" },
  { bodyFat: "10〜15%", frequency: "7〜10日に1回", note: "減量の進行度に合わせて調整。体重の減少が停滞したタイミングで実施。" },
  { bodyFat: "15〜20%", frequency: "2週間に1回", note: "まだ体脂肪に余裕があるため、頻度は控えめに。代謝の低下を感じたら実施。" },
  { bodyFat: "20%以上", frequency: "基本的に不要", note: "まずは通常の食事管理で体脂肪を落とすことが優先。チートデイよりリフィードを検討。" },
];

const calorieGuide = [
  { item: "基本のカロリー目安", value: "維持カロリー × 1.2〜1.5倍" },
  { item: "体重70kgの場合の目安", value: "約3,000〜3,500kcal" },
  { item: "炭水化物の比率", value: "全体の60〜70%（糖質中心に摂取）" },
  { item: "たんぱく質", value: "通常通り体重×2g程度は維持" },
  { item: "脂質", value: "意図的に増やす必要なし（自然に増える分でOK）" },
];

const ngExamples = [
  {
    title: "チートデイが毎日になる",
    desc: "「今日もチートデイにしよう」と自分に甘くなり、連日の過食に。チートデイは事前に日付を決めて計画的に行いましょう。",
  },
  {
    title: "暴飲暴食する",
    desc: "「何でも食べていい」を「無制限に食べていい」と勘違いするケース。摂取カロリーの上限は維持カロリーの1.5倍程度に設定しましょう。",
  },
  {
    title: "アルコールを大量に飲む",
    desc: "アルコールは筋たんぱく質合成を阻害し、テストステロンの分泌を低下させます。チートデイでもアルコールは控えめに。",
  },
  {
    title: "翌日に罪悪感で過度な制限をする",
    desc: "チートデイ翌日に極端なカロリー制限や過度な有酸素運動をすると、身体に負担がかかります。翌日は通常の食事管理に戻すだけで十分です。",
  },
];

const mealExamples = [
  {
    meal: "朝食",
    menu: "パンケーキ（3枚）+ メープルシロップ + バナナ + プロテインシェイク",
    kcal: "約800kcal",
    point: "炭水化物をしっかり摂って筋グリコーゲンを回復",
  },
  {
    meal: "昼食",
    menu: "牛丼（大盛り）+ 味噌汁 + サラダ",
    kcal: "約1,000kcal",
    point: "好きなものを食べつつ、たんぱく質も確保",
  },
  {
    meal: "間食",
    menu: "アイスクリーム + プロテインバー",
    kcal: "約400kcal",
    point: "甘いもので精神的な満足感を得る",
  },
  {
    meal: "夕食",
    menu: "ピザ2切れ + パスタ + サラダ + 鶏肉グリル",
    kcal: "約1,200kcal",
    point: "炭水化物メインで代謝回復を狙う",
  },
];

const faqs = [
  {
    q: "チートデイとリフィードの違いは何ですか？",
    a: "チートデイは1日全体でカロリーを増やすのに対し、リフィードは主に炭水化物だけを増やす方法です。リフィードの方がコントロールしやすく、脂肪蓄積のリスクが低いため、体脂肪率が高めの方や初心者にはリフィードがおすすめです。",
  },
  {
    q: "チートデイ翌日に体重が増えますが大丈夫ですか？",
    a: "はい、問題ありません。チートデイ翌日の体重増加のほとんどは、炭水化物による水分貯留（グリコーゲン1gにつき水3g）と胃腸内の食べ物の重さです。通常2〜3日で元に戻ります。脂肪がつくのは長期的なカロリー過剰の場合のみです。",
  },
  {
    q: "チートデイにトレーニングはすべきですか？",
    a: "チートデイの翌日にトレーニングするのが最も効果的です。チートデイで回復した筋グリコーゲンを活用し、高強度のトレーニングが可能になります。チートデイ当日にトレーニングする場合は、食後2〜3時間空けてから行いましょう。",
  },
  {
    q: "減量初期からチートデイを設けるべきですか？",
    a: "減量初期は身体にまだ余裕があるため、すぐにチートデイを設ける必要はありません。まずは2〜4週間の食事管理を続け、体重の減少が停滞してきた（1〜2週間体重が変わらない）タイミングで初めてチートデイを検討しましょう。",
  },
  {
    q: "女性もチートデイを取り入れて大丈夫ですか？",
    a: "はい、女性もチートデイは有効です。ただし、女性は男性よりも基礎代謝が低いため、カロリー摂取量は維持カロリーの1.2倍程度に抑えるのがおすすめです。また、生理周期に合わせて高温期（黄体期）にチートデイを設けると、食欲の増加に対応しやすくなります。",
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

export default function CheatDay() {
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
            { name: "チートデイの正しいやり方" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">チートデイの正しいやり方と頻度</h1>
          <p className="text-gray-300">
            停滞期を打破して減量を加速させる
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            減量を続けていると、ある時期から体重が落ちなくなる「停滞期」が訪れます。これは身体が省エネモードに入り、代謝が低下しているサインです。チートデイは、この停滞期を打破するための戦略的な食事法です。
          </p>
          <p className="text-gray-700 leading-relaxed">
            ただし、やり方を間違えると単なる暴飲暴食になり、逆効果に。本記事では、チートデイの科学的なメカニズムから、体脂肪率別の適切な頻度、具体的な食事例まで徹底解説します。
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            チートデイの4つのメリット
          </h2>
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{b.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frequency table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            体脂肪率別チートデイの頻度
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">体脂肪率</th>
                  <th className="py-3 px-4 text-center font-bold">推奨頻度</th>
                  <th className="py-3 px-4 text-left font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {frequencyTable.map((row, i) => (
                  <tr key={row.bodyFat} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.bodyFat}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.frequency}</td>
                    <td className="py-3 px-4 text-gray-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 体脂肪率15%以下から特に効果的です。20%以上の方はまず通常のダイエットを優先してください。
          </p>
        </section>

        {/* Calorie guide */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            摂取カロリー目安
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-3">
              {calorieGuide.map((g) => (
                <div key={g.item} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm font-bold text-gray-700">{g.item}</span>
                  <span className="text-sm text-[#16A34A] font-bold">{g.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NG examples */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            やってはいけないNG例
          </h2>
          <div className="space-y-3">
            {ngExamples.map((ng, i) => (
              <div key={i} className="bg-white rounded-xl border border-red-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded flex-shrink-0">
                    NG
                  </span>
                  {ng.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{ng.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meal examples */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            おすすめ食事例（1日の流れ）
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">食事</th>
                  <th className="py-3 px-4 text-left font-bold">メニュー例</th>
                  <th className="py-3 px-4 text-center font-bold">カロリー</th>
                  <th className="py-3 px-4 text-left font-bold">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {mealExamples.map((m, i) => (
                  <tr key={m.meal} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-[#16A34A] whitespace-nowrap">{m.meal}</td>
                    <td className="py-3 px-4 text-gray-700">{m.menu}</td>
                    <td className="py-3 px-4 text-center font-bold text-gray-700">{m.kcal}</td>
                    <td className="py-3 px-4 text-gray-600">{m.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 合計約3,400kcal。体重70kg・維持カロリー2,500kcalの場合の例です。
          </p>
        </section>

        {/* Recovery */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            翌日のリカバリー
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              チートデイ翌日は「通常の食事管理に戻す」だけで十分です。過度な制限は不要です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
                <p className="font-bold text-green-700 mb-1">食事</p>
                <p className="text-xs text-gray-600">通常のダイエット食に戻す。極端なカロリー制限は不要</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
                <p className="font-bold text-green-700 mb-1">トレーニング</p>
                <p className="text-xs text-gray-600">回復した筋グリコーゲンを活かして高強度トレーニング</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
                <p className="font-bold text-green-700 mb-1">水分</p>
                <p className="text-xs text-gray-600">水分を多めに摂取。塩分過多による浮腫みの解消を促進</p>
              </div>
            </div>
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
            <h2 className="text-xl font-bold mb-3">チートデイ以外の日は宅食弁当で管理</h2>
            <p className="text-gray-300 text-sm mb-6">減量期の食事管理はPFC計算済みの宅食弁当にお任せ</p>
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
              { name: "炭水化物の摂り方", href: "/knowledge/carb-cycling/" },
              { name: "外食の高たんぱくメニュー", href: "/knowledge/eating-out/" },
              { name: "食事タイミング", href: "/knowledge/meal-timing/" },
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
