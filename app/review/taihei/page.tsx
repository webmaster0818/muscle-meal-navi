import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "タイヘイファミリーセットの口コミ・評判｜老舗宅配弁当を徹底レビュー【2026年】",
  description:
    "タイヘイファミリーセットを実際に利用した口コミ・評判を紹介。創業50年以上の老舗が手がける宅配弁当のPFC、価格、メニュー内容を徹底レビュー。たんぱく質制限食やカロリー調整食も解説。",
};

const overview = {
  name: "タイヘイファミリーセット",
  protein: "15〜25g/食",
  fat: "8〜18g/食",
  carbs: "20〜40g/食",
  calories: "200〜350kcal/食",
  price: "680円〜",
  menuCount: "約70種類以上",
  delivery: "全国対応（冷凍便）",
  courses: "ヘルシー御膳 / たんぱく調整食 / 彩ごころ / ソフト御膳",
};

const strengths = [
  {
    title: "創業50年以上の信頼と実績",
    desc: "食品業界で50年以上の実績を持つタイヘイが手がける宅配弁当。長年培ってきたノウハウと品質管理体制は他社にない強みです。",
  },
  {
    title: "1食680円〜の高コスパ",
    desc: "高たんぱく宅配弁当の中では最安級の価格帯。継続的に利用する場合のコスト負担が少なく、長期的なボディメイクに適しています。",
  },
  {
    title: "目的別の豊富なコース",
    desc: "カロリー制限、たんぱく質調整、塩分制限など、健康目的に応じた複数のコースを展開。筋トレだけでなく、健康管理全般に対応します。",
  },
  {
    title: "和食中心の落ち着いたメニュー",
    desc: "和食を中心とした家庭的なメニュー構成。味付けも濃すぎず、毎日食べても飽きにくいのが特徴です。",
  },
];

const reviews = [
  {
    name: "H.W さん（50代男性）",
    rating: 4.0,
    period: "利用歴8ヶ月",
    text: "健康診断で高血圧を指摘され、カロリー制限食を始めました。和食中心で味もしっかりしています。筋トレも週2回やっていますが、たんぱく質は少し物足りないのでプロテインを追加しています。価格が安いので続けやすいです。",
  },
  {
    name: "Y.A さん（30代男性）",
    rating: 3.5,
    period: "利用歴3ヶ月",
    text: "コスパ重視で選びました。マッスルデリほどたんぱく質は多くないですが、日常的な食事管理には十分です。メニューが多くて飽きない点は高評価。ガッツリ筋トレする人向けというよりは、健康的な体づくりをしたい人向けですね。",
  },
  {
    name: "C.N さん（40代女性）",
    rating: 4.5,
    period: "利用歴1年",
    text: "家族でヘルシー御膳を利用しています。70種類以上のメニューがあるので全く飽きません。子どもも食べやすい味付けで、家族全員の健康管理に役立っています。送料込みでもリーズナブルなのが嬉しい。",
  },
  {
    name: "S.M さん（20代男性）",
    rating: 3.0,
    period: "利用歴1ヶ月",
    text: "筋トレ目的だとたんぱく質が物足りないです。1食あたり15-20g程度なので、マッスルデリの半分以下。ただ価格は格段に安いので、プロテインと組み合わせれば使い方次第だと思います。",
  },
];

const faqs = [
  {
    q: "タイヘイファミリーセットは筋トレ目的で使えますか？",
    a: "そのままでは1食あたりのたんぱく質が15-25g程度と少なめです。プロテインシェイクやゆで卵などで補えば、コスパの良い食事管理が可能です。特に減量期のカロリー管理には適しています。",
  },
  {
    q: "他社と比べて価格はどうですか？",
    a: "1食あたり680円〜と、高たんぱく宅配弁当の中では最安級です。マッスルデリ（980円〜）やMORE THAN DELI（1,080円〜）と比較すると、大幅にコストを抑えられます。",
  },
  {
    q: "コースはどう選べばいいですか？",
    a: "カロリー制限が目的ならヘルシー御膳（200kcal前後）、腎臓病などでたんぱく質制限が必要ならたんぱく調整食、手軽にバランス食を摂りたいなら彩ごころがおすすめです。",
  },
  {
    q: "定期便の解約に縛りはありますか？",
    a: "定期便に最低継続回数の縛りはなく、いつでもスキップ・解約が可能です。電話またはマイページから手続きできます。",
  },
  {
    q: "送料はいくらですか？",
    a: "定期便の場合は送料無料です。単品購入の場合は地域によって異なる送料がかかります。継続利用なら定期便がお得です。",
  },
  {
    q: "メニュー数はどのくらいありますか？",
    a: "全コース合わせて約70種類以上のメニューが用意されています。季節限定メニューもあり、和洋中バランスよく展開されています。",
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

const relatedServices = [
  { name: "ウェルネスダイニング", href: "/review/wellness-dining/" },
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
  { name: "マッスルデリ", href: "/review/muscle-deli/" },
];

export default function Taihei() {
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
            { name: "レビュー", href: "/#ranking" },
            { name: "タイヘイファミリーセット" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">タイヘイファミリーセットの口コミ・評判</h1>
          <p className="text-gray-300">
            創業50年の老舗が手がける宅配弁当を徹底レビュー
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            基本情報
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["サービス名", overview.name],
                  ["たんぱく質/食", overview.protein],
                  ["脂質/食", overview.fat],
                  ["炭水化物/食", overview.carbs],
                  ["カロリー/食", overview.calories],
                  ["価格", overview.price],
                  ["メニュー数", overview.menuCount],
                  ["配送", overview.delivery],
                  ["コース", overview.courses],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <th className="py-3 px-4 text-left font-bold text-gray-700 w-1/3">{label}</th>
                    <td className="py-3 px-4 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            タイヘイファミリーセットの強み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div key={s.title} className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-[#16A34A] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {["1食680円〜の圧倒的コスパ", "70種類以上の豊富なメニュー", "老舗の信頼感と品質管理", "定期便なら送料無料"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-green-500 flex-shrink-0">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["たんぱく質量は他社よりやや少なめ", "本格的な筋トレ向けではない", "味付けが薄いと感じる人も"].map((c) => (
                  <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">-</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            利用者の口コミ・評判
          </h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-gray-800">{r.name}</span>
                  <span className="text-xs text-gray-500">{r.period}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`text-sm ${j < Math.floor(r.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                      &#9733;
                    </span>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{r.rating}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">タイヘイファミリーセットを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">コスパ抜群の宅配弁当を試してみましょう</p>
            <Link
              href="/"
              className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ランキングに戻る
            </Link>
          </div>

          <h3 className="font-bold text-lg mb-3">他のサービスも比較する</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
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
