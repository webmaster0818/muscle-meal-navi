import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレにおける炭水化物の正しい摂り方｜カーブサイクリング入門【2026年】",
  description:
    "筋トレの効果を最大化する炭水化物の摂り方を解説。トレーニング日と休息日で量を変えるカーブサイクリング、GI値の使い分け、1週間のモデルプラン、おすすめ炭水化物源を紹介。",
  keywords: ["炭水化物", "筋トレ", "カーブサイクリング", "GI値", "摂り方"],
  openGraph: {
    title: "筋トレにおける炭水化物の正しい摂り方｜カーブサイクリング入門",
    description:
      "トレーニング日と休息日で炭水化物量を変えるカーブサイクリングを徹底解説。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/carb-cycling/",
  },
};

const carbSources = [
  { name: "白米", gi: "高（88）", per100g: "37g", best: "トレ後", note: "吸収が早くグリコーゲン補充に最適" },
  { name: "玄米", gi: "低（55）", per100g: "35g", best: "トレ前・普段", note: "食物繊維豊富で腹持ちが良い" },
  { name: "オートミール", gi: "低（55）", per100g: "60g", best: "朝食・トレ前", note: "β-グルカンで血糖値安定" },
  { name: "さつまいも", gi: "中（55）", per100g: "31g", best: "トレ前・間食", note: "ビタミン・ミネラルも豊富" },
  { name: "バナナ", gi: "中（62）", per100g: "23g", best: "トレ直前・直後", note: "手軽にエネルギー補給" },
  { name: "パスタ（全粒粉）", gi: "低（50）", per100g: "72g", best: "トレ前日・当日", note: "カーボローディングに最適" },
  { name: "もち", gi: "高（85）", per100g: "50g", best: "トレ後", note: "高GIで素早い補充が可能" },
  { name: "そば", gi: "低（54）", per100g: "26g", best: "普段の食事", note: "ルチンで血流改善効果も" },
];

const weeklyPlan = [
  { day: "月曜（胸・三頭）", type: "High", carb: "体重×6g", example: "70kgなら420g", meals: "朝オートミール80g / 昼白米200g / トレ前バナナ1本 / トレ後白米250g+鶏胸肉 / 夜玄米150g" },
  { day: "火曜（背中・二頭）", type: "High", carb: "体重×6g", example: "70kgなら420g", meals: "朝オートミール80g / 昼パスタ100g / トレ前さつまいも150g / トレ後白米250g / 夜玄米150g" },
  { day: "水曜（休息日）", type: "Low", carb: "体重×2g", example: "70kgなら140g", meals: "朝オートミール40g / 昼玄米100g / 夜さつまいも100g / 間食はたんぱく質中心" },
  { day: "木曜（肩・腕）", type: "Mid", carb: "体重×4g", example: "70kgなら280g", meals: "朝オートミール60g / 昼白米150g / トレ前バナナ1本 / トレ後白米200g / 夜そば1束" },
  { day: "金曜（脚）", type: "High", carb: "体重×7g", example: "70kgなら490g", meals: "朝オートミール80g / 昼白米250g / トレ前もち2個 / トレ後白米300g / 夜パスタ100g" },
  { day: "土曜（休息日）", type: "Low", carb: "体重×2g", example: "70kgなら140g", meals: "朝オートミール40g / 昼そば1束 / 夜玄米100g / 間食はナッツ・プロテイン" },
  { day: "日曜（休息日）", type: "Mid", carb: "体重×3g", example: "70kgなら210g", meals: "朝オートミール50g / 昼玄米150g / 夜さつまいも150g / 翌日のトレに備える" },
];

const faqs = [
  { q: "炭水化物を完全にカットしたほうが痩せますか？", a: "いいえ。炭水化物は筋トレのエネルギー源であり、完全カットはパフォーマンス低下・筋肉分解を招きます。減量期でも体重×2g以上は確保しましょう。" },
  { q: "カーブサイクリングは初心者でもできますか？", a: "はい。まずはトレーニング日を「多め」、休息日を「少なめ」の2段階から始めるのがおすすめです。慣れてきたらHigh/Mid/Lowの3段階に調整しましょう。" },
  { q: "トレーニング後は何分以内に炭水化物を摂るべき？", a: "トレ後30分〜2時間以内が理想です。この「ゴールデンタイム」にたんぱく質と一緒に高GI炭水化物を摂ると、グリコーゲン補充と筋合成が促進されます。" },
  { q: "GI値が高い食品は避けるべき？", a: "場面によります。普段の食事では低GI食品を選びましょう。ただしトレーニング直後は高GI食品（白米、もち、バナナ等）のほうがグリコーゲン補充に有利です。" },
  { q: "宅配弁当でカーブサイクリングはできますか？", a: "可能です。Low日は宅配弁当のみ、High日は宅配弁当＋白米を追加するなどの調整で実現できます。PFCが明記されたマッスルデリやnoshが管理しやすくおすすめです。" },
  { q: "脂質と炭水化物はどちらを減らすべき？", a: "筋トレをしている方は炭水化物を確保し、脂質を適度に抑えるのが基本です。ただし脂質も体重×0.8g以下にはしないようにしましょう。ホルモンバランスに影響します。" },
];

export default function CarbCyclingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "知識", href: "/#knowledge" },
            { name: "炭水化物の摂り方" },
          ]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] text-white rounded-2xl p-8 mb-10">
          <p className="text-[#16A34A] font-bold text-sm mb-2">KNOWLEDGE</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            筋トレにおける炭水化物の正しい摂り方
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            炭水化物は筋トレの最重要エネルギー源。トレーニング日と休息日で摂取量を変える
            「カーブサイクリング」を取り入れれば、筋肉を維持しながら効率的に体脂肪を落とせます。
          </p>
        </div>

        {/* なぜ炭水化物が重要か */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            なぜ筋トレに炭水化物が必要なのか
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "筋グリコーゲンの補充", desc: "高強度トレーニングのエネルギー源の約80%は筋グリコーゲン（炭水化物由来）。不足するとパフォーマンスが大幅に低下します。" },
              { title: "筋分解の防止", desc: "炭水化物が不足すると、体はアミノ酸（筋肉）からエネルギーを作ろうとします。筋肉を守るために炭水化物は必須です。" },
              { title: "インスリンの活用", desc: "炭水化物摂取で分泌されるインスリンは、アミノ酸を筋肉に取り込む「輸送役」。トレ後の筋合成を促進します。" },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-5">
                <h3 className="font-bold text-[#16A34A] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* カーブサイクリングとは */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            カーブサイクリングとは
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            カーブサイクリング（Carb Cycling）は、日によって炭水化物の摂取量を変える食事戦略です。
            トレーニング日は炭水化物を多く摂り、休息日は少なくすることで、
            <strong>筋肉のパフォーマンスを維持しながら体脂肪を効率的に減らす</strong>ことができます。
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold mb-3">摂取量の目安（体重1kgあたり）</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A1A1A] text-white">
                    <th className="py-2 px-3 text-left rounded-tl-lg">日タイプ</th>
                    <th className="py-2 px-3 text-left">炭水化物量</th>
                    <th className="py-2 px-3 text-left">タイミング</th>
                    <th className="py-2 px-3 text-left rounded-tr-lg">例（70kg）</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-bold text-red-600">High Day</td>
                    <td className="py-2 px-3">体重×5〜7g</td>
                    <td className="py-2 px-3">高強度トレ日（脚・背中など）</td>
                    <td className="py-2 px-3">350〜490g</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-2 px-3 font-bold text-yellow-600">Mid Day</td>
                    <td className="py-2 px-3">体重×3〜4g</td>
                    <td className="py-2 px-3">中強度トレ日（肩・腕など）</td>
                    <td className="py-2 px-3">210〜280g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-bold text-blue-600">Low Day</td>
                    <td className="py-2 px-3">体重×1.5〜2.5g</td>
                    <td className="py-2 px-3">休息日・有酸素のみの日</td>
                    <td className="py-2 px-3">105〜175g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GI値の使い分け */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            GI値で炭水化物を使い分ける
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            GI値（グリセミック・インデックス）は血糖値の上昇スピードを示す指標。
            <strong>普段は低GI</strong>で血糖値を安定させ、<strong>トレ後は高GI</strong>で素早くグリコーゲンを補充するのが理想です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#16A34A] text-white">
                  <th className="py-2 px-3 text-left">食品</th>
                  <th className="py-2 px-3 text-left">GI値</th>
                  <th className="py-2 px-3 text-left">炭水化物/100g</th>
                  <th className="py-2 px-3 text-left">おすすめ場面</th>
                  <th className="py-2 px-3 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {carbSources.map((item) => (
                  <tr key={item.name} className="border-b hover:bg-green-50">
                    <td className="py-2 px-3 font-medium">{item.name}</td>
                    <td className="py-2 px-3">{item.gi}</td>
                    <td className="py-2 px-3">{item.per100g}</td>
                    <td className="py-2 px-3">{item.best}</td>
                    <td className="py-2 px-3 text-gray-600">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 1週間モデルプラン */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            1週間のカーブサイクリングモデルプラン
          </h2>
          <p className="text-gray-700 mb-4 text-sm">体重70kgの場合の目安です。自分の体重に合わせて調整してください。</p>
          <div className="space-y-3">
            {weeklyPlan.map((day) => (
              <div key={day.day} className={`rounded-xl p-4 border ${
                day.type === "High" ? "border-red-200 bg-red-50" :
                day.type === "Mid" ? "border-yellow-200 bg-yellow-50" :
                "border-blue-200 bg-blue-50"
              }`}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-bold">{day.day}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${
                    day.type === "High" ? "bg-red-500" :
                    day.type === "Mid" ? "bg-yellow-500" :
                    "bg-blue-500"
                  }`}>{day.type}</span>
                  <span className="text-sm text-gray-600">{day.carb}（{day.example}）</span>
                </div>
                <p className="text-xs text-gray-700">{day.meals}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 宅配弁当との組み合わせ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            宅配弁当との組み合わせ方
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-xl p-5">
              <h3 className="font-bold text-red-600 mb-2">High Day（トレーニング日）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                宅配弁当＋白米を大盛りで追加。<Link href="/review/muscle-deli/" className="text-[#16A34A] font-bold hover:underline">マッスルデリ</Link>の
                GAINコースは炭水化物も多めに設計されているのでそのままでもOK。
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-600 mb-2">Low Day（休息日）</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                宅配弁当のみで完結。<Link href="/review/nosh/" className="text-[#16A34A] font-bold hover:underline">nosh</Link>は
                糖質30g以下に設計されているのでLow Dayに最適。ご飯の追加は不要です。
              </p>
            </div>
          </div>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              💡 PFCが明記されたサービスなら管理が簡単です。
              <Link href="/compare/cost-ranking/" className="text-[#16A34A] font-bold hover:underline">コスパランキング</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="cursor-pointer bg-gray-50 px-4 py-3 font-medium text-sm hover:bg-gray-100 transition-colors">
                  {faq.q}
                </summary>
                <div className="px-4 py-3 text-sm text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 関連ページ */}
        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="font-bold text-lg mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/knowledge/meal-timing/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">筋トレ前後の食事タイミング</p>
              <p className="text-xs text-gray-500 mt-1">ゴールデンタイムを活用した栄養摂取</p>
            </Link>
            <Link href="/knowledge/pfc-calculator/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">PFCバランス計算方法</p>
              <p className="text-xs text-gray-500 mt-1">目的別のマクロ栄養素計算ガイド</p>
            </Link>
            <Link href="/knowledge/cheat-day/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">チートデイの正しいやり方</p>
              <p className="text-xs text-gray-500 mt-1">代謝回復と精神的リフレッシュの戦略</p>
            </Link>
            <Link href="/purpose/bulking/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">増量期おすすめ宅配弁当</p>
              <p className="text-xs text-gray-500 mt-1">High Dayに使える高カロリー宅食</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
