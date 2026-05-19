import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレする人の間食・プロテインおやつガイド｜おすすめ商品比較【2026年】",
  description:
    "筋トレする人向けの間食・プロテインおやつを徹底ガイド。プロテインバー、ギリシャヨーグルト、ナッツ類など市販品のたんぱく質量比較表、トレ前後の間食タイミング、手作りプロテインレシピ3選を紹介。",
  keywords: ["間食", "プロテイン", "おやつ", "筋トレ", "たんぱく質", "プロテインバー"],
  openGraph: {
    title: "筋トレする人の間食・プロテインおやつガイド｜おすすめ商品比較",
    description:
      "筋トレする人向けの間食・プロテインおやつを徹底ガイド。市販品たんぱく質量比較表付き。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/snack-protein/",
  },
};

const snackItems = [
  {
    name: "プロテインバー",
    protein: "15〜20g",
    kcal: "180〜220kcal",
    merit: "持ち運びやすく、手軽にたんぱく質を補給。種類も豊富で飽きにくい。",
    timing: "トレ前1時間〜30分前、外出先での間食",
  },
  {
    name: "ギリシャヨーグルト",
    protein: "10〜15g",
    kcal: "60〜100kcal",
    merit: "低脂質・高たんぱく。カゼイン由来のたんぱく質でゆっくり吸収される。腸内環境の改善にも。",
    timing: "朝食後、就寝前の間食",
  },
  {
    name: "ミックスナッツ（30g）",
    protein: "5〜7g",
    kcal: "180〜200kcal",
    merit: "良質な脂質（不飽和脂肪酸）が豊富。ビタミンE、マグネシウムも含む。",
    timing: "午前・午後の間食、空腹時の少量摂取",
  },
  {
    name: "ゆで卵",
    protein: "6〜7g（1個）",
    kcal: "80kcal（1個）",
    merit: "完全栄養食に近い優秀な間食。ビタミン・ミネラルもバランスよく含む。",
    timing: "トレ2時間前、食事の補助",
  },
  {
    name: "サラダチキン",
    protein: "25〜28g",
    kcal: "110〜130kcal",
    merit: "コンビニで手軽に入手。高たんぱく・超低脂質の王道間食。",
    timing: "トレ2〜3時間前、昼食の補助",
  },
  {
    name: "プロテインドリンク",
    protein: "15〜20g",
    kcal: "80〜150kcal",
    merit: "吸収が速く、トレ直後の補給に最適。コンビニでも購入可能。",
    timing: "トレ直後、食事が摂れないときの代替",
  },
];

const proteinComparison = [
  { product: "inバー プロテイン", brand: "森永", protein: "15.9g", kcal: "209kcal", price: "約180円" },
  { product: "1本満足バー プロテイン", brand: "アサヒ", protein: "15g", kcal: "183kcal", price: "約160円" },
  { product: "SIXPACK プロテインバー", brand: "UHA味覚糖", protein: "20.3g", kcal: "166kcal", price: "約300円" },
  { product: "オイコス プレーン", brand: "ダノン", protein: "11.7g", kcal: "69kcal", price: "約180円" },
  { product: "パルテノ プレーン", brand: "森永", protein: "9.9g", kcal: "99kcal", price: "約170円" },
  { product: "サラダチキン プレーン", brand: "セブン", protein: "26.5g", kcal: "114kcal", price: "約230円" },
  { product: "SAVAS MILK PROTEIN", brand: "明治", protein: "15g", kcal: "102kcal", price: "約170円" },
  { product: "タンパクト ヨーグルト", brand: "明治", protein: "12g", kcal: "110kcal", price: "約170円" },
];

const recipes = [
  {
    title: "プロテインオートミールボール",
    ingredients: "オートミール80g、プロテインパウダー30g、ピーナッツバター大さじ2、はちみつ大さじ1、チョコチップ少々",
    steps: "1. すべての材料をボウルで混ぜる → 2. 一口大に丸める → 3. 冷蔵庫で30分冷やして完成",
    pfc: "P: 8g / F: 5g / C: 15g（1個あたり）",
  },
  {
    title: "ギリシャヨーグルトプロテインパフェ",
    ingredients: "ギリシャヨーグルト200g、プロテインパウダー15g、バナナ1/2本、グラノーラ20g、はちみつ少々",
    steps: "1. ヨーグルトにプロテインを混ぜる → 2. バナナをスライス → 3. 交互に重ねてグラノーラとはちみつをトッピング",
    pfc: "P: 30g / F: 4g / C: 40g（1食あたり）",
  },
  {
    title: "プロテインバナナマフィン",
    ingredients: "バナナ2本、卵2個、プロテインパウダー60g、ベーキングパウダー小さじ1、シナモン少々",
    steps: "1. バナナをつぶし卵と混ぜる → 2. プロテインとベーキングパウダーを加える → 3. 180℃のオーブンで20分焼く",
    pfc: "P: 12g / F: 3g / C: 14g（1個あたり、6個分）",
  },
];

const faqs = [
  {
    q: "間食は筋トレの効果を下げませんか？",
    a: "適切な間食はむしろ筋トレの効果を高めます。食事の間隔が空きすぎると筋分解（カタボリック）が進むため、3〜4時間ごとにたんぱく質を含む間食を摂ることで、筋たんぱく質合成を一日中促進できます。",
  },
  {
    q: "1日に間食は何回くらいが適切ですか？",
    a: "一般的には2〜3回が目安です。朝食と昼食の間、昼食と夕食の間、そしてトレーニング前後に摂るのが理想的。1回の間食でたんぱく質10〜20g程度を目安にし、1日のトータルカロリーを超えないよう管理しましょう。",
  },
  {
    q: "プロテインバーとプロテインドリンク、どちらがおすすめ？",
    a: "場面で使い分けるのがベストです。トレーニング直後は吸収の速いプロテインドリンクが適しています。一方、トレーニング前や日中の間食には腹持ちの良いプロテインバーが向いています。脂質や糖質の量にも注目して選びましょう。",
  },
  {
    q: "ダイエット中でも間食していいですか？",
    a: "はい、むしろダイエット中こそ間食が重要です。長時間の空腹は過食やドカ食いの原因になります。低カロリー・高たんぱくの間食（ギリシャヨーグルト、サラダチキンなど）を選べば、筋肉を維持しながら脂肪を落とせます。1日のカロリー内に収まるよう計算しましょう。",
  },
  {
    q: "寝る前の間食は太りますか？",
    a: "寝る前の間食が太るかどうかは「何を食べるか」と「1日の総カロリー」によります。就寝前にカゼイン系のプロテインやギリシャヨーグルトを摂ると、睡眠中の筋分解を防ぎ、筋肉の回復を促進する効果があります。高糖質・高脂質の間食は避けましょう。",
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

export default function SnackProtein() {
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
            { name: "間食・プロテインおやつガイド" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">筋トレする人の間食・プロテインおやつガイド</h1>
          <p className="text-gray-300">
            たんぱく質を効率よく補給する間食戦略
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレの効果を最大限に引き出すには、3食の食事だけでは不十分です。筋たんぱく質合成は食事後2〜3時間でピークを迎え、その後は低下していきます。適切な間食でたんぱく質を補給することで、1日を通じて筋肉の合成を促進し、分解を防ぐことができます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、筋トレする人におすすめの間食・プロテインおやつを紹介し、タイミングや市販品の比較、手作りレシピまで徹底解説します。
          </p>
        </section>

        {/* Snack items */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            おすすめ間食6選
          </h2>
          <div className="space-y-4">
            {snackItems.map((item) => (
              <div key={item.name} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                    おすすめ
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.merit}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-600 font-bold mb-1">たんぱく質</p>
                    <p className="text-sm font-bold text-gray-800">{item.protein}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">カロリー</p>
                    <p className="text-sm font-bold text-gray-800">{item.kcal}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">おすすめタイミング</p>
                    <p className="text-sm text-gray-700">{item.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timing section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            間食のタイミング（トレーニング前後）
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">トレーニング前（1〜2時間前）</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>・プロテインバー + バナナで糖質とたんぱく質を補給</li>
                  <li>・消化に負担の少ないものを選ぶ</li>
                  <li>・脂質の多いナッツ類は2時間以上前に</li>
                  <li>・目安: たんぱく質15-20g + 炭水化物20-30g</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">トレーニング後（30分以内）</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>・プロテインドリンクで素早くたんぱく質を補給</li>
                  <li>・バナナやおにぎりで糖質も同時に摂取</li>
                  <li>・ゴールデンタイムを逃さない</li>
                  <li>・目安: たんぱく質20-30g + 炭水化物30-40g</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product comparison table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            市販品たんぱく質量比較表
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">商品名</th>
                  <th className="py-3 px-4 text-left font-bold">ブランド</th>
                  <th className="py-3 px-4 text-center font-bold">たんぱく質</th>
                  <th className="py-3 px-4 text-center font-bold">カロリー</th>
                  <th className="py-3 px-4 text-center font-bold">目安価格</th>
                </tr>
              </thead>
              <tbody>
                {proteinComparison.map((row, i) => (
                  <tr key={row.product} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700">{row.product}</td>
                    <td className="py-3 px-4 text-gray-600">{row.brand}</td>
                    <td className="py-3 px-4 text-center text-[#16A34A] font-bold">{row.protein}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.kcal}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 価格は2026年5月時点の参考価格です。店舗により異なる場合があります。
          </p>
        </section>

        {/* Handmade recipes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            手作りプロテインおやつレシピ3選
          </h2>
          <div className="space-y-4">
            {recipes.map((recipe, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-[#16A34A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {recipe.title}
                </h3>
                <div className="space-y-3">
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">材料</p>
                    <p className="text-sm text-gray-700">{recipe.ingredients}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-bold mb-1">作り方</p>
                    <p className="text-sm text-gray-700">{recipe.steps}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-600 font-bold mb-1">栄養成分</p>
                    <p className="text-sm font-bold text-gray-800">{recipe.pfc}</p>
                  </div>
                </div>
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

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">間食で補えない栄養は宅食弁当で</h2>
            <p className="text-gray-300 text-sm mb-6">PFC管理済みの宅食弁当で、食事全体の栄養バランスを整えましょう</p>
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
              { name: "食事タイミング", href: "/knowledge/meal-timing/" },
              { name: "たんぱく質の摂取量", href: "/knowledge/protein-intake/" },
              { name: "外食の高たんぱくメニュー", href: "/knowledge/eating-out/" },
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
