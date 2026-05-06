import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレ前後の食事タイミング｜効果を最大化する食事術【2026年】",
  description:
    "筋トレ前後の食事タイミングを徹底解説。トレーニング2-3時間前・直前の食事、筋トレ後30分〜2時間のゴールデンタイムの活用法、栄養素別の摂取タイミング、宅食弁当を使った実践的なタイムスケジュール例を紹介。",
  keywords: ["筋トレ", "食事", "タイミング", "前後", "ゴールデンタイム", "栄養補給"],
  openGraph: {
    title: "筋トレ前後の食事タイミング｜効果を最大化する食事術",
    description:
      "筋トレ前後の食事タイミングを徹底解説。ゴールデンタイムの活用法や栄養素別の摂取タイミングを紹介。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/meal-timing/",
  },
};

const preWorkoutMeals = [
  {
    timing: "2〜3時間前",
    title: "メインの食事",
    desc: "消化に時間がかかる通常の食事を摂るベストタイミング。胃に負担をかけずにエネルギーを確保できます。",
    foods: "鶏胸肉+玄米、宅食弁当（マッスルデリ等）、パスタ+サラダチキン",
    nutrients: "たんぱく質20-30g、炭水化物40-60g、脂質は控えめ",
  },
  {
    timing: "1時間前",
    title: "軽めの補食",
    desc: "消化の良い炭水化物を中心に、軽めに摂取。脂質は消化を遅らせるため避けます。",
    foods: "バナナ、おにぎり、プロテインバー",
    nutrients: "炭水化物30-40g中心、脂質は最小限",
  },
  {
    timing: "30分前",
    title: "直前の栄養補給",
    desc: "吸収の速い糖質やアミノ酸を少量摂取。固形物は避け、液体やゼリー状のものが最適。",
    foods: "スポーツドリンク、EAA/BCAAドリンク、エネルギーゼリー",
    nutrients: "糖質10-20g、必須アミノ酸",
  },
];

const postWorkoutMeals = [
  {
    timing: "直後〜30分以内",
    title: "ゴールデンタイム（即時補給）",
    desc: "筋トレ直後は筋たんぱく質合成が最も活発な時間帯。吸収の速いプロテインと糖質を摂取します。",
    foods: "ホエイプロテイン+バナナ、プロテイン+マルトデキストリン",
    nutrients: "たんぱく質20-40g、糖質30-50g",
  },
  {
    timing: "1〜2時間以内",
    title: "リカバリー食事",
    desc: "固形食でしっかり栄養補給。筋グリコーゲンの回復と筋肉の修復に必要な栄養をバランスよく摂ります。",
    foods: "宅食弁当（高たんぱくメニュー）、鶏胸肉+白米+野菜",
    nutrients: "たんぱく質30-40g、炭水化物50-80g、ビタミン・ミネラル",
  },
];

const nutrientTimingTable = [
  { nutrient: "たんぱく質", preTiming: "2-3時間前に20-30g", postTiming: "直後〜2時間以内に30-40g", role: "筋たんぱく質合成・筋肉修復" },
  { nutrient: "炭水化物", preTiming: "1-3時間前に40-60g", postTiming: "直後に30-50g", role: "エネルギー源・グリコーゲン回復" },
  { nutrient: "脂質", preTiming: "トレ前は控えめに", postTiming: "直後は避ける（1時間後から可）", role: "消化を遅らせるため注意" },
  { nutrient: "水分", preTiming: "2時間前に500ml", postTiming: "体重減少分×1.5倍", role: "パフォーマンス維持・回復促進" },
];

const dailySchedule = {
  title: "筋トレする日のタイムスケジュール例（夕方トレーニングの場合）",
  items: [
    { time: "7:00", action: "朝食", detail: "オートミール+プロテイン+果物（P:30g / C:50g / F:8g）" },
    { time: "12:00", action: "昼食", detail: "宅食弁当（マッスルデリ MAINTAINコース）（P:40g / C:45g / F:15g）" },
    { time: "15:00", action: "間食", detail: "おにぎり1個+プロテインバー（P:15g / C:45g / F:5g）" },
    { time: "17:00", action: "トレーニング前", detail: "EAAドリンク+バナナ（P:5g / C:25g）" },
    { time: "17:30-19:00", action: "筋トレ", detail: "トレーニング中はBCAA+水分補給" },
    { time: "19:00", action: "トレ直後", detail: "ホエイプロテイン+マルトデキストリン（P:30g / C:40g）" },
    { time: "20:00", action: "夕食", detail: "宅食弁当（nosh 高たんぱくメニュー）+玄米（P:35g / C:55g / F:12g）" },
    { time: "23:00", action: "就寝前", detail: "カゼインプロテイン（P:25g）" },
  ],
};

const faqs = [
  {
    q: "筋トレ後のゴールデンタイムは本当に30分以内ですか？",
    a: "最新の研究では、筋たんぱく質合成の窓は以前考えられていたより広く、トレーニング後2時間以内であれば十分な効果があるとされています。ただし、空腹状態でトレーニングした場合は、なるべく早めに栄養補給することが推奨されます。",
  },
  {
    q: "筋トレ前に食事を摂る時間がない場合はどうすればいい？",
    a: "直前でも消化の速いバナナやエネルギーゼリー、BCAAドリンクなどを摂取すれば問題ありません。空腹のままトレーニングすると、パフォーマンスの低下や筋分解のリスクがあるため、何かしら口にすることをおすすめします。",
  },
  {
    q: "朝一の筋トレの場合、食事タイミングはどうすべき？",
    a: "起床後すぐのトレーニングの場合、バナナ1本とプロテインなど消化の速い軽食を20-30分前に摂るのがベストです。前夜の夕食でしっかり栄養を摂っておくことも重要です。",
  },
  {
    q: "宅食弁当はトレーニング前後の食事として使えますか？",
    a: "はい、特にトレーニング2-3時間前の食事やトレーニング1-2時間後の食事として最適です。マッスルデリやDieticianなどのサービスは高たんぱく・PFC管理済みで、栄養計算の手間も省けます。電子レンジで温めるだけなので準備も簡単です。",
  },
  {
    q: "筋トレ後にすぐ食事できない場合はどうすればいい？",
    a: "まずプロテインシェイクだけでも摂取し、その後できるだけ早く固形食を食べましょう。プロテインを携帯しておけば、ジムのロッカールームでもすぐに飲めます。帰宅後に宅食弁当を温めれば、準備の手間なく栄養バランスの良い食事ができます。",
  },
  {
    q: "脂質はトレーニング前後にどのくらい控えるべきですか？",
    a: "トレーニング1時間前〜直後の食事では、脂質を10g以下に抑えるのが理想です。脂質は消化に時間がかかり（約4-6時間）、トレーニング中の不快感や栄養吸収の遅延を引き起こす可能性があります。通常の食事タイミング（トレーニング2-3時間前や夕食）では適度な脂質摂取は問題ありません。",
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

export default function MealTiming() {
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
            { name: "筋トレ前後の食事タイミング" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">筋トレ前後の食事タイミング</h1>
          <p className="text-gray-300">
            効果を最大化する食事術
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレの効果を最大限に引き出すには、トレーニングの内容だけでなく「いつ食べるか」も非常に重要です。適切なタイミングで適切な栄養素を摂取することで、パフォーマンス向上・筋肉の合成促進・回復の加速が期待できます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、筋トレ前後の食事タイミングを科学的根拠に基づいて解説し、宅配弁当を活用した実践的なスケジュール例も紹介します。
          </p>
        </section>

        {/* Pre-workout meals */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            筋トレ前の食事タイミング
          </h2>
          <div className="space-y-4">
            {preWorkoutMeals.map((m) => (
              <div key={m.timing} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                    {m.timing}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{m.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{m.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">おすすめ食品</p>
                    <p className="text-sm text-gray-700">{m.foods}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-600 font-bold mb-1">栄養目安</p>
                    <p className="text-sm text-gray-700">{m.nutrients}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Post-workout meals */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            筋トレ後の食事タイミング（ゴールデンタイム）
          </h2>
          <div className="space-y-4">
            {postWorkoutMeals.map((m) => (
              <div key={m.timing} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                    {m.timing}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{m.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{m.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">おすすめ食品</p>
                    <p className="text-sm text-gray-700">{m.foods}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-600 font-bold mb-1">栄養目安</p>
                    <p className="text-sm text-gray-700">{m.nutrients}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrient timing table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            栄養素別の摂取タイミング一覧
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">栄養素</th>
                  <th className="py-3 px-4 text-center font-bold">トレーニング前</th>
                  <th className="py-3 px-4 text-center font-bold">トレーニング後</th>
                  <th className="py-3 px-4 text-center font-bold">役割</th>
                </tr>
              </thead>
              <tbody>
                {nutrientTimingTable.map((row, i) => (
                  <tr key={row.nutrient} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.nutrient}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.preTiming}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.postTiming}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Daily schedule */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            {dailySchedule.title}
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">時間</th>
                  <th className="py-3 px-4 text-left font-bold">内容</th>
                  <th className="py-3 px-4 text-left font-bold">詳細</th>
                </tr>
              </thead>
              <tbody>
                {dailySchedule.items.map((item, i) => (
                  <tr key={item.time} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-[#16A34A] whitespace-nowrap">{item.time}</td>
                    <td className="py-3 px-4 font-bold text-gray-700 whitespace-nowrap">{item.action}</td>
                    <td className="py-3 px-4 text-gray-600">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 数値は体重70kgの場合の概算です。個人の体格・目標により調整してください。
          </p>
        </section>

        {/* CTA: 宅食弁当の活用 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            宅食弁当を活用した食事タイミング管理
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              筋トレ前後の食事を毎回自炊で用意するのは大変です。PFC計算済みの宅食弁当を活用すれば、栄養バランスの整った食事を手軽にタイミングよく摂ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
                <p className="font-bold text-gray-800 mb-1">トレ2-3時間前</p>
                <p className="text-xs text-gray-600">宅食弁当を温めて食べるだけ。PFC管理済みで計算不要</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
                <p className="font-bold text-gray-800 mb-1">トレ1-2時間後</p>
                <p className="text-xs text-gray-600">帰宅後すぐにレンジで温めるだけ。調理時間ゼロ</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4 text-center">
                <p className="font-bold text-gray-800 mb-1">作り置き不要</p>
                <p className="text-xs text-gray-600">冷凍保存で1ヶ月以上。食べたいときに食べられる</p>
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
            <h2 className="text-xl font-bold mb-3">食事タイミングを宅食弁当で最適化</h2>
            <p className="text-gray-300 text-sm mb-6">PFC管理済みの宅食弁当なら、トレーニング前後の栄養補給が簡単です</p>
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
              { name: "たんぱく質の摂取量", href: "/knowledge/protein-intake/" },
              { name: "初心者の食事管理", href: "/knowledge/meal-prep-beginner/" },
              { name: "プロテインvs宅食", href: "/knowledge/supplements-vs-meal/" },
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
