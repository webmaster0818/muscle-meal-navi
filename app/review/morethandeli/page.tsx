import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "MORE THAN DELIの口コミ・評判｜高たんぱく低脂質弁当を徹底レビュー【2026年】",
  description:
    "MORE THAN DELIを実際に利用した口コミ・評判を紹介。高たんぱく・低脂質にこだわった宅配弁当のPFC、価格、メニュー内容を徹底レビュー。本格的なボディメイク食を解説。",
};

const overview = {
  name: "MORE THAN DELI",
  protein: "30〜50g/食",
  fat: "5〜15g/食",
  carbs: "30〜50g/食",
  calories: "300〜500kcal/食",
  price: "1,080円〜",
  menuCount: "約25種類",
  delivery: "全国対応（冷凍便）",
  features: "高たんぱく・低脂質 / 玄米付き / 無添加志向",
};

const strengths = [
  {
    title: "脂質5g台のメニューも存在",
    desc: "脂質を極限まで抑えたメニューが豊富。減量期のトレーニーにとって脂質管理は最重要課題であり、5g台の弁当は非常に貴重です。",
  },
  {
    title: "玄米付きで完結する食事",
    desc: "多くの高たんぱく弁当はおかずのみですが、MORE THAN DELIは玄米付き。主食を別途用意する手間がなく、PFCが完結します。",
  },
  {
    title: "無添加・自然素材へのこだわり",
    desc: "保存料・着色料を極力使用せず、自然素材にこだわった調理法を採用。体づくりだけでなく、健康面にも配慮されています。",
  },
  {
    title: "トレーニーが監修するリアルな設計",
    desc: "実際にボディメイクに取り組むスタッフが監修しているため、トレーニーの実情に沿ったPFC設計になっています。",
  },
];

const reviews = [
  {
    name: "D.K さん（20代男性）",
    rating: 4.5,
    period: "利用歴6ヶ月",
    text: "コンテスト出場を目指して利用しています。脂質が本当に低い。他社の弁当だと脂質15-20gが普通ですが、MORE THAN DELIは10g以下のメニューが多い。減量期の味方です。玄米付きなのも地味に嬉しい。",
  },
  {
    name: "M.Y さん（30代女性）",
    rating: 4.0,
    period: "利用歴3ヶ月",
    text: "無添加志向なので選びました。味は素材の味がしっかりしていて好きです。価格は高めですが、品質を考えれば納得。メニュー数がもう少し増えてくれたら完璧です。",
  },
  {
    name: "K.T さん（30代男性）",
    rating: 4.0,
    period: "利用歴4ヶ月",
    text: "マッスルデリと併用しています。脂質を抑えたい日はMORE THAN DELI、たんぱく質を多く摂りたい日はマッスルデリという使い分け。両方を使うことでマクロ管理の幅が広がりました。",
  },
  {
    name: "E.S さん（20代女性）",
    rating: 3.5,
    period: "利用歴1ヶ月",
    text: "味はおいしいですが、量がやや少なく感じました。男性で体重70kg以上の方だと物足りないかも。女性や体重60kg前後の方にはちょうどいい量だと思います。",
  },
];

const faqs = [
  {
    q: "MORE THAN DELIの脂質はどのくらい低いですか？",
    a: "メニューによりますが、1食あたりの脂質は5-15g程度です。最も脂質が低いメニューでは5g台のものもあり、脂質制限中のトレーニーから高い評価を得ています。",
  },
  {
    q: "玄米の量は調整できますか？",
    a: "標準では玄米付きのセットですが、おかずのみのプランも一部用意されています。糖質を自分で調整したい場合はおかずのみプランがおすすめです。",
  },
  {
    q: "冷凍庫にどのくらいスペースが必要ですか？",
    a: "5食セットで冷凍庫の約1/4程度のスペースが必要です。玄米付きのためやや大きめの容器になりますので、事前に冷凍庫の空きを確認してください。",
  },
  {
    q: "アレルギー対応はしていますか？",
    a: "特定のアレルゲンを除去したメニューは現時点では用意されていません。各メニューにアレルギー表示が記載されているので、注文前に確認してください。",
  },
  {
    q: "定期便はありますか？",
    a: "定期便プランが用意されており、単品購入よりもお得に購入できます。配送頻度は2週間ごと、3週間ごと、4週間ごとから選択可能です。",
  },
  {
    q: "コンテスト前の減量食として使えますか？",
    a: "低脂質・高たんぱくの設計はコンテスト準備期間に適しています。ただし、大会直前の極端な減量期には、より細かいマクロ管理が必要になるため、トレーナーと相談しながら活用することをおすすめします。",
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
  { name: "マッスルデリ", href: "/review/muscle-deli/" },
  { name: "Dietician", href: "/review/dietician/" },
  { name: "筋肉食堂DELI", href: "/review/kinniku-shokudo/" },
  { name: "WooFoods", href: "/review/woofoods/" },
];

export default function MoreThanDeli() {
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
            { name: "MORE THAN DELI" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">MORE THAN DELIの口コミ・評判</h1>
          <p className="text-gray-300">
            高たんぱく・低脂質にこだわった宅配弁当を徹底レビュー
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
                  ["特徴", overview.features],
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
            MORE THAN DELIの強み
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
                {["業界最低水準の脂質量", "玄米付きでPFCが完結", "無添加志向で健康にも配慮", "トレーニー監修のリアルな設計"].map((p) => (
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
                {["価格が高め（1食1,080円〜）", "メニュー数が少なめ", "量が少ないと感じる人もいる"].map((c) => (
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
            <h2 className="text-xl font-bold mb-3">MORE THAN DELIを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">低脂質の本格ボディメイク食を体験しましょう</p>
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
