import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "睡眠と栄養が筋肉回復に与える影響｜筋トレの成果を最大化する睡眠術【2026年】",
  description:
    "筋トレ後の筋肉回復に不可欠な睡眠と栄養の関係を徹底解説。成長ホルモンの分泌メカニズム、就寝前のおすすめ食品、睡眠の質を高める栄養素、避けるべき習慣を紹介。",
  keywords: ["睡眠", "栄養", "筋肉", "回復", "筋トレ", "成長ホルモン"],
  openGraph: {
    title: "睡眠と栄養が筋肉回復に与える影響｜筋トレの成果を最大化する睡眠術",
    description:
      "筋トレ後の筋肉回復に不可欠な睡眠と栄養の関係を徹底解説。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/sleep-nutrition/",
  },
};

const sleepNutrients = [
  { name: "マグネシウム", effect: "筋弛緩・神経安定", source: "アーモンド、ほうれん草、バナナ、ダークチョコ", daily: "350〜400mg", note: "不足すると筋痙攣や不眠の原因に" },
  { name: "トリプトファン", effect: "セロトニン→メラトニン生成", source: "七面鳥、鶏胸肉、牛乳、バナナ、大豆", daily: "500〜600mg", note: "セロトニンの前駆体。睡眠ホルモンの材料" },
  { name: "GABA", effect: "抑制系神経伝達物質", source: "発芽玄米、トマト、味噌、漬物", daily: "100〜200mg", note: "リラックス効果で入眠をサポート" },
  { name: "ビタミンB6", effect: "トリプトファン代謝を促進", source: "鶏胸肉、サーモン、バナナ、ジャガイモ", daily: "1.4mg", note: "不足するとセロトニン合成が低下" },
  { name: "亜鉛", effect: "テストステロン・成長ホルモン分泌促進", source: "牡蠣、牛赤身肉、カシューナッツ", daily: "11mg", note: "筋肥大と睡眠の質の両方に関与" },
  { name: "グリシン", effect: "深部体温の低下・深い睡眠", source: "エビ、ホタテ、鶏皮、ゼラチン", daily: "3g", note: "就寝30分前の摂取で睡眠の質が向上" },
];

const bedtimeFoods = [
  { food: "カゼインプロテイン", protein: "25〜30g", timing: "就寝30分前", reason: "ゆっくり吸収され、睡眠中の筋分解を7〜8時間防ぐ。最もおすすめ。" },
  { food: "ギリシャヨーグルト", protein: "10〜15g", timing: "就寝1時間前", reason: "カゼイン豊富。トリプトファンも含み一石二鳥。はちみつを加えるとGABA分泌促進。" },
  { food: "カッテージチーズ", protein: "12〜14g", timing: "就寝1時間前", reason: "カゼイン主体の低脂肪タンパク源。消化に負担が少ない。" },
  { food: "ホットミルク＋はちみつ", protein: "6〜7g", timing: "就寝30分前", reason: "トリプトファン＋少量の糖質でセロトニン合成を促進。リラックス効果も。" },
  { food: "アーモンド10粒", protein: "3g", timing: "就寝1時間前", reason: "マグネシウム・亜鉛が豊富。ただし脂質も含むため食べ過ぎ注意。" },
];

const faqs = [
  { q: "筋トレ後に何時間寝れば十分ですか？", a: "一般的に7〜9時間が推奨されます。特にハードなトレーニングをした日は8時間以上を目指しましょう。成長ホルモンは入眠後の最初のノンレム睡眠（深い睡眠）で最も多く分泌されるため、睡眠の質も重要です。" },
  { q: "就寝前にプロテインを飲むと太りますか？", a: "カゼインプロテイン1杯（約120kcal）程度なら太る心配はほぼありません。むしろ睡眠中の筋分解を防ぎ、基礎代謝の維持に貢献します。ただし1日の総カロリーが過剰にならないよう調整しましょう。" },
  { q: "夜のトレーニングは睡眠に悪影響ですか？", a: "就寝2〜3時間前までに終えれば大きな問題はありません。ただし就寝直前の高強度トレーニングは交感神経が活発になり入眠を妨げます。夜トレの場合はクールダウンとストレッチを丁寧に行いましょう。" },
  { q: "成長ホルモンを最大化する睡眠のコツは？", a: "①毎日同じ時間に就寝・起床する ②就寝前2時間はブルーライトを避ける ③寝室を18〜22℃に保つ ④入浴は就寝90分前がベスト ⑤カフェインは就寝6時間前までに。これらを習慣化すると深い睡眠が増え、成長ホルモン分泌が最大化されます。" },
  { q: "昼寝（仮眠）は筋肉回復に効果がありますか？", a: "はい、20〜30分の昼寝は筋肉回復に有効です。昼寝でも成長ホルモンがわずかに分泌され、コルチゾール（筋分解ホルモン）を低下させます。ただし30分を超えると夜の睡眠に悪影響が出るため注意。" },
  { q: "アルコールは筋肉回復にどう影響しますか？", a: "アルコールは成長ホルモン分泌を最大70%低下させ、テストステロンも減少させます。また利尿作用で脱水を招き、レム睡眠を減少させます。トレーニング日の飲酒は特に避けるべきです。" },
];

export default function SleepNutritionPage() {
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
            { name: "睡眠と栄養" },
          ]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2D2D2D] text-white rounded-2xl p-8 mb-10">
          <p className="text-[#16A34A] font-bold text-sm mb-2">KNOWLEDGE</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            睡眠と栄養が筋肉回復に与える影響
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            筋肉はトレーニング中ではなく、睡眠中に成長します。
            成長ホルモンの分泌を最大化する睡眠術と、就寝前の栄養戦略で筋トレの成果を加速させましょう。
          </p>
        </div>

        {/* 睡眠中に起きること */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            睡眠中に筋肉で起きていること
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "成長ホルモンの大量分泌", desc: "入眠後90分の深いノンレム睡眠で、1日の成長ホルモンの約70%が分泌されます。このホルモンが筋繊維の修復と成長を促進。", icon: "💪" },
              { title: "たんぱく質合成の促進", desc: "睡眠中はたんぱく質合成（MPS）が活発化。特にトレーニング後24〜48時間はMPSが高い状態が続きます。", icon: "🔬" },
              { title: "コルチゾールの低下", desc: "十分な睡眠はストレスホルモン（コルチゾール）を抑制。コルチゾールは筋分解を促進するため、睡眠不足は大敵です。", icon: "📉" },
              { title: "グリコーゲンの再合成", desc: "肝グリコーゲンの補充が行われ、翌日のトレーニングに備えます。炭水化物の適切な摂取が重要。", icon: "⚡" },
            ].map((item) => (
              <div key={item.title} className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-bold text-[#16A34A]">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 睡眠の質を上げる栄養素 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            睡眠の質を高める6つの栄養素
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#16A34A] text-white">
                  <th className="py-2 px-3 text-left">栄養素</th>
                  <th className="py-2 px-3 text-left">効果</th>
                  <th className="py-2 px-3 text-left">食品源</th>
                  <th className="py-2 px-3 text-left">目安量/日</th>
                  <th className="py-2 px-3 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {sleepNutrients.map((item) => (
                  <tr key={item.name} className="border-b hover:bg-green-50">
                    <td className="py-2 px-3 font-medium">{item.name}</td>
                    <td className="py-2 px-3">{item.effect}</td>
                    <td className="py-2 px-3">{item.source}</td>
                    <td className="py-2 px-3">{item.daily}</td>
                    <td className="py-2 px-3 text-gray-600 text-xs">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 就寝前のおすすめ食品 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            就寝前に摂りたいおすすめ食品
          </h2>
          <div className="space-y-3">
            {bedtimeFoods.map((item, i) => (
              <div key={item.food} className={`rounded-xl p-4 border ${i === 0 ? "border-green-300 bg-green-50" : "border-gray-200 bg-white"}`}>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  {i === 0 && <span className="text-xs bg-[#16A34A] text-white px-2 py-0.5 rounded-full">最推奨</span>}
                  <span className="font-bold">{item.food}</span>
                  <span className="text-xs text-gray-500">たんぱく質 {item.protein}｜{item.timing}</span>
                </div>
                <p className="text-sm text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 避けるべき習慣 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            筋肉回復を妨げるNG習慣
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "カフェイン（就寝6時間以内）", desc: "半減期が5〜6時間。15時以降のコーヒーは深い睡眠を大幅に減少させます。プレワークアウトサプリも注意。" },
              { title: "大量の脂質（就寝2時間以内）", desc: "消化に時間がかかり、胃腸が活発になって深い睡眠を妨げます。就寝前は低脂肪のたんぱく源を選びましょう。" },
              { title: "アルコール", desc: "入眠は早くなりますが、レム睡眠を減少させ成長ホルモン分泌を最大70%低下。筋トレ日の飲酒は特に避けるべき。" },
              { title: "ブルーライト（就寝1時間以内）", desc: "メラトニン分泌を抑制。スマホ・PCは就寝1時間前にオフ。どうしても使う場合はナイトモードを活用。" },
            ].map((item) => (
              <div key={item.title} className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-bold text-red-600 mb-1 text-sm">❌ {item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 宅配弁当との活用 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-[#16A34A] pl-3">
            宅配弁当で睡眠前の栄養管理
          </h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              夕食を宅配弁当にすれば、就寝3〜4時間前にPFCバランスの取れた食事を手軽に摂れます。
              消化時間を考慮すると、<strong>就寝3時間前に食べ終える</strong>のが理想的です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/review/nosh/" className="block bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-100">
                <p className="font-bold text-sm text-[#16A34A]">nosh</p>
                <p className="text-xs text-gray-500 mt-1">低糖質で消化に優しい</p>
              </Link>
              <Link href="/review/muscle-deli/" className="block bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-100">
                <p className="font-bold text-sm text-[#16A34A]">マッスルデリ</p>
                <p className="text-xs text-gray-500 mt-1">PFC計算済みで安心</p>
              </Link>
              <Link href="/review/dietician/" className="block bg-white rounded-lg p-3 text-center hover:shadow-md transition-shadow border border-gray-100">
                <p className="font-bold text-sm text-[#16A34A]">Dietician</p>
                <p className="text-xs text-gray-500 mt-1">栄養士監修の最適PFC</p>
              </Link>
            </div>
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
            <Link href="/knowledge/protein-intake/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">たんぱく質の適正摂取量</p>
              <p className="text-xs text-gray-500 mt-1">体重・目的別の計算ガイド</p>
            </Link>
            <Link href="/knowledge/meal-timing/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">筋トレ前後の食事タイミング</p>
              <p className="text-xs text-gray-500 mt-1">ゴールデンタイムの活用法</p>
            </Link>
            <Link href="/knowledge/supplements-vs-meal/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">プロテイン vs 宅食弁当</p>
              <p className="text-xs text-gray-500 mt-1">それぞれのメリット比較</p>
            </Link>
            <Link href="/knowledge/snack-protein/" className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-100">
              <p className="font-bold text-sm text-[#16A34A]">間食・プロテインおやつ</p>
              <p className="text-xs text-gray-500 mt-1">トレ前後の補食ガイド</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
