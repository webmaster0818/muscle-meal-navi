import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "外食チェーンの高たんぱくメニュー｜筋トレ中の外食選び【2026年】",
  description:
    "筋トレ中でも安心して外食できる高たんぱくメニューを徹底紹介。吉野家・松屋・大戸屋・すき家・やよい軒・サイゼリヤのPFC比較表、注文時のコツ、宅食弁当との使い分け方を解説。",
  keywords: ["外食", "高たんぱく", "メニュー", "筋トレ", "チェーン店", "PFC"],
  openGraph: {
    title: "外食チェーンの高たんぱくメニュー｜筋トレ中の外食選び",
    description:
      "筋トレ中でも安心して外食できる高たんぱくメニューを徹底紹介。チェーン別PFC比較表付き。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/eating-out/",
  },
};

const chainMenus = [
  {
    chain: "吉野家",
    menu: "牛丼ライト（お肉たっぷり）",
    protein: "28g",
    fat: "22g",
    carb: "18g",
    kcal: "380kcal",
    point: "ご飯の代わりにサラダでヘルシー。たんぱく質を確保しつつ糖質を大幅カット。",
  },
  {
    chain: "松屋",
    menu: "鶏の甘辛味噌定食",
    protein: "32g",
    fat: "14g",
    carb: "85g",
    kcal: "590kcal",
    point: "鶏肉メインで高たんぱく低脂質。定食でバランスよく栄養が摂れる。",
  },
  {
    chain: "大戸屋",
    menu: "鶏の竜田揚げ定食",
    protein: "35g",
    fat: "18g",
    carb: "90g",
    kcal: "650kcal",
    point: "鶏もも肉でたんぱく質たっぷり。五穀米に変更すればさらに栄養価アップ。",
  },
  {
    chain: "すき家",
    menu: "鉄火丼（並盛）",
    protein: "30g",
    fat: "5g",
    carb: "80g",
    kcal: "490kcal",
    point: "マグロ赤身は超低脂質・高たんぱく。脂質を抑えたい減量期に最適。",
  },
  {
    chain: "やよい軒",
    menu: "しまほっけ定食",
    protein: "33g",
    fat: "12g",
    carb: "78g",
    kcal: "550kcal",
    point: "魚の良質な脂質（オメガ3）も摂れる。ご飯おかわり自由で増量期にも対応。",
  },
  {
    chain: "サイゼリヤ",
    menu: "チキングリル（ディアボラ風）",
    protein: "36g",
    fat: "16g",
    carb: "5g",
    kcal: "310kcal",
    point: "コスパ最強の高たんぱくメニュー。サイドのライスやサラダで調整可能。",
  },
];

const orderTips = [
  {
    title: "ご飯の量を調整する",
    desc: "減量期はご飯を少なめ・半分にし、増量期はおかわり自由の店を活用。目的に合わせて炭水化物量をコントロールしましょう。",
  },
  {
    title: "揚げ物よりグリル・焼き物を選ぶ",
    desc: "同じ鶏肉でも、唐揚げとグリルでは脂質が大きく異なります。調理法で脂質量は2〜3倍変わることも。",
  },
  {
    title: "サラダ・副菜を追加する",
    desc: "ビタミン・ミネラル・食物繊維を補うためにサラダを追加。食物繊維は血糖値の急上昇を抑え、脂肪蓄積を防ぎます。",
  },
  {
    title: "ドレッシング・ソースは別添えに",
    desc: "ドレッシングやソースには意外と脂質や糖質が含まれています。別添えにして量をコントロールしましょう。",
  },
  {
    title: "飲み物はお茶か水にする",
    desc: "清涼飲料水は糖質の塊。お茶や水を選ぶだけで100kcal以上カットできることがあります。",
  },
];

const faqs = [
  {
    q: "筋トレ中に外食しても大丈夫ですか？",
    a: "はい、メニュー選びに気をつければ問題ありません。高たんぱく・適度な炭水化物のメニューを選び、揚げ物やソース類を控えれば、外食でも十分に栄養管理ができます。完璧を求めすぎず、継続できる食事管理が重要です。",
  },
  {
    q: "外食と宅食弁当、どちらが筋トレに向いていますか？",
    a: "PFC管理の精度では宅食弁当が優れています。外食は栄養成分が正確にわからない場合が多く、脂質や塩分が高くなりがちです。ただし外食にはメリット（手軽さ、バリエーション、社交の場）もあるため、普段は宅食弁当で管理し、外食は週1-2回程度にするのがおすすめです。",
  },
  {
    q: "牛丼チェーンで最もたんぱく質が多いメニューは？",
    a: "すき家の「鉄火丼」や吉野家の「牛丼ライト」が高たんぱくです。特に鉄火丼はマグロ赤身でたんぱく質30g・脂質わずか5gと、PFCバランスが非常に優秀です。また吉野家の「ライザップ牛サラダ」もおすすめです。",
  },
  {
    q: "外食で脂質を抑えるコツはありますか？",
    a: "まず揚げ物を避けてグリル・蒸し・焼きメニューを選びましょう。ドレッシングやマヨネーズは別添えにし、ご飯は白米より雑穀米を選ぶと食物繊維も摂れます。また、魚メニューは肉メニューより脂質が低い傾向があります。",
  },
  {
    q: "コンビニと外食チェーン、どちらがおすすめですか？",
    a: "コンビニはサラダチキンやプロテイン飲料など、PFCが明確な商品が多い点がメリットです。一方、外食チェーンは温かい食事がとれ、満足感も高いです。トレーニング直後はコンビニで素早く補給し、しっかり食べたいときは外食チェーンを活用するなど、使い分けるのが効果的です。",
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

export default function EatingOut() {
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
            { name: "外食チェーンの高たんぱくメニュー" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">外食チェーンの高たんぱくメニュー</h1>
          <p className="text-gray-300">
            筋トレ中でも安心して食べられる外食ガイド
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレを続けていても、毎食自炊や宅食弁当というわけにはいきません。仕事の付き合いやプライベートで外食する機会は必ずあります。大切なのは「外食を避ける」ことではなく、「正しいメニュー選び」を身につけること。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、大手外食チェーン6社の高たんぱくメニューをPFC付きで比較し、注文時のコツから宅食弁当との使い分けまで徹底解説します。
          </p>
        </section>

        {/* Chain menu comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            チェーン別おすすめ高たんぱくメニュー
          </h2>
          <div className="space-y-4">
            {chainMenus.map((m) => (
              <div key={m.chain} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                    {m.chain}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{m.menu}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{m.point}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-center">
                    <p className="text-xs text-green-600 font-bold mb-1">たんぱく質</p>
                    <p className="text-lg font-bold text-gray-800">{m.protein}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 font-bold mb-1">脂質</p>
                    <p className="text-lg font-bold text-gray-800">{m.fat}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 font-bold mb-1">炭水化物</p>
                    <p className="text-lg font-bold text-gray-800">{m.carb}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 font-bold mb-1">カロリー</p>
                    <p className="text-lg font-bold text-gray-800">{m.kcal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PFC comparison table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            チェーン別PFC比較表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">チェーン</th>
                  <th className="py-3 px-4 text-left font-bold">メニュー</th>
                  <th className="py-3 px-4 text-center font-bold">P</th>
                  <th className="py-3 px-4 text-center font-bold">F</th>
                  <th className="py-3 px-4 text-center font-bold">C</th>
                  <th className="py-3 px-4 text-center font-bold">kcal</th>
                </tr>
              </thead>
              <tbody>
                {chainMenus.map((row, i) => (
                  <tr key={row.chain} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.chain}</td>
                    <td className="py-3 px-4 text-gray-600">{row.menu}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.protein}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.fat}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.carb}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.kcal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 栄養成分は概算値です。店舗や時期により異なる場合があります。
          </p>
        </section>

        {/* Order tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            外食時の注文のコツ
          </h2>
          <div className="space-y-3">
            {orderTips.map((tip, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <span className="bg-[#16A34A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 宅食との使い分け */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            宅食弁当との使い分け
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              外食と宅食弁当にはそれぞれメリットがあります。理想的な使い分けは、平日のランチや仕事帰りの夕食は宅食弁当でPFC管理を徹底し、週末の外食や付き合いでは本記事のメニュー選びを実践すること。完璧主義になりすぎず、継続できる食事管理を目指しましょう。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">宅食弁当が向くシーン</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>・減量期の厳格なPFC管理</li>
                  <li>・平日のルーティン食事</li>
                  <li>・トレーニング前後の計画的な栄養摂取</li>
                  <li>・食事準備に時間をかけられないとき</li>
                </ul>
              </div>
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">外食が向くシーン</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>・仕事の付き合い・会食</li>
                  <li>・増量期のカロリー確保</li>
                  <li>・チートデイやご褒美</li>
                  <li>・気分転換・バリエーション</li>
                </ul>
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
            <h2 className="text-xl font-bold mb-3">普段の食事は宅食弁当でPFC管理</h2>
            <p className="text-gray-300 text-sm mb-6">外食はたまのご褒美に。日常の食事管理はPFC計算済みの宅食弁当が最適です</p>
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
              { name: "間食・プロテインおやつ", href: "/knowledge/snack-protein/" },
              { name: "チートデイのやり方", href: "/knowledge/cheat-day/" },
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
