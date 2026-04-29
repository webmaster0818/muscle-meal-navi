import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "nosh(ナッシュ)の口コミ・評判｜糖質30g以下の宅配弁当を徹底レビュー【2026年】",
  description:
    "nosh(ナッシュ)を実際に利用した口コミ・評判を紹介。糖質30g以下・60種以上のメニューから選べる宅配弁当のPFC、価格、味を徹底レビュー。",
};

const overview = {
  name: "nosh(ナッシュ)",
  protein: "メニューにより異なる（10〜30g/食）",
  fat: "メニューにより異なる（8〜25g/食）",
  carbs: "全メニュー糖質30g以下",
  calories: "200〜500kcal/食",
  price: "599円〜/食（10食プランの場合）",
  menuCount: "60種以上（毎週新メニュー追加）",
  delivery: "全国対応（冷凍便）",
  features: "好きなメニューを自分で選択可能",
};

const strengths = [
  {
    title: "60種以上の圧倒的メニュー数",
    desc: "常時60種以上のメニューがあり、毎週新メニューが追加されます。和洋中エスニックまで幅広いジャンルがあるため、飽きずに続けられます。",
  },
  {
    title: "全メニュー糖質30g以下",
    desc: "ケトジェニックダイエットや糖質制限を行う方に最適。全メニューが糖質30g以下に設計されており、糖質管理が簡単です。",
  },
  {
    title: "1食599円〜の優れたコスパ",
    desc: "10食プランなら1食599円〜と業界でもトップクラスのコスパ。さらに「nosh club」で継続するほど割引が大きくなります。",
  },
  {
    title: "自分でメニューを選べる自由度",
    desc: "他社のようなコース固定ではなく、好きなメニューを1つずつ選べます。苦手な食材を避けたり、好きなメニューをリピートしやすいのが魅力です。",
  },
];

const reviews = [
  {
    name: "K.Y さん（20代男性）",
    rating: 4.0,
    period: "利用歴8ヶ月",
    text: "減量期のメイン食として使っています。糖質30g以下は助かりますが、たんぱく質量はメニューによってバラつきがあるので、高たんぱくメニューを選ぶようにしています。味は全体的においしく、チリハンバーグがお気に入り。コスパは最高クラスです。",
  },
  {
    name: "S.T さん（30代女性）",
    rating: 4.5,
    period: "利用歴1年",
    text: "ダイエット目的で始めましたが、メニューが豊富で全然飽きません。毎週新メニューが出るのも楽しみ。nosh clubで割引が増えていくので、長く続けるほどお得。冷凍庫はやっぱりスペースが必要です。",
  },
  {
    name: "H.N さん（30代男性）",
    rating: 3.5,
    period: "利用歴4ヶ月",
    text: "筋トレ目的だと、正直たんぱく質が物足りないメニューもあります。プロテインと併用して使うのがベスト。ただ味の満足度は高く、糖質制限中でもストレスなく食事できるのは大きなメリット。",
  },
  {
    name: "Y.M さん（40代女性）",
    rating: 5.0,
    period: "利用歴6ヶ月",
    text: "健康管理のために利用しています。カロリーと糖質が抑えられているのに、しっかり味がついていておいしい。特にスイーツも糖質控えめなのが嬉しいポイント。家族からも好評で、我が家の定番になりました。",
  },
];

const faqs = [
  {
    q: "noshは筋トレ向きですか？",
    a: "糖質制限・ダイエット目的であれば非常に優秀です。ただしハードなトレーニーにはたんぱく質量が不足するメニューもあるため、高たんぱくメニューを選ぶかプロテインと併用することをおすすめします。",
  },
  {
    q: "nosh clubとは何ですか？",
    a: "累計購入数に応じて割引率が上がるランク制度です。最大で1食499円まで割引されます。一度上がったランクは永久に維持されるため、長期利用するほどお得です。",
  },
  {
    q: "メニューの変更・スキップはできますか？",
    a: "はい。次回配送の4〜5日前までマイページからメニュー変更・スキップが可能です。旅行や外食が続く時はスキップを活用しましょう。",
  },
  {
    q: "送料はいくらですか？",
    a: "地域によって異なり、913円〜2,145円（税込）です。関西が最安で、北海道・沖縄は高めです。まとめて注文するほど1食あたりの送料負担が減ります。",
  },
  {
    q: "賞味期限はどのくらいですか？",
    a: "製造日から約6ヶ月〜1年です。冷凍保存なので長期間ストック可能ですが、届いたら早めに食べる方がおいしくいただけます。",
  },
  {
    q: "アレルギー表示はありますか？",
    a: "はい。各メニューの詳細ページにアレルギー成分（特定原材料7品目+特定原材料に準ずるもの21品目）が表示されています。注文前に必ず確認しましょう。",
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
  { name: "筋肉食堂DELI", href: "/review/kinniku-shokudo/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
  { name: "WooFoods", href: "/review/woofoods/" },
];

export default function NoshReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "nosh(ナッシュ)" }]} />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">第2位</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">nosh(ナッシュ)の口コミ・評判</h1>
          <p className="text-gray-300">糖質30g以下・60種以上のメニューを徹底レビュー</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>基本情報
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(overview).map(([key, value], i) => {
                  const labels: Record<string, string> = { name: "サービス名", protein: "たんぱく質/食", fat: "脂質/食", carbs: "炭水化物/食", calories: "カロリー/食", price: "価格", menuCount: "メニュー数", delivery: "配送", features: "特徴" };
                  return (
                    <tr key={key} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                      <th className="py-3 px-4 text-left font-bold text-gray-700 w-1/3">{labels[key]}</th>
                      <td className="py-3 px-4 text-gray-600">{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>noshの強み
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
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>メリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {["メニュー数60種以上で飽きにくい", "1食599円〜の優れたコスパ", "自分でメニューを選べる自由度", "nosh clubで続けるほどお得"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["たんぱく質量がメニューにより差がある", "人気メニューは売り切れる場合がある", "送料が地域によって高い"].map((c) => (
                  <li key={c} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-500 flex-shrink-0">-</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>利用者の口コミ・評判
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
                    <span key={j} className={`text-sm ${j < Math.floor(r.rating) ? "text-yellow-400" : "text-gray-300"}`}>&#9733;</span>
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
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#F9FAFB] rounded-lg border border-gray-200">
                <summary className="flex items-center justify-between cursor-pointer p-4 font-medium text-sm text-gray-800 hover:text-[#16A34A]">
                  <span className="flex items-center gap-2"><span className="text-[#16A34A] font-bold">Q.</span>{faq.q}</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-3"><span className="text-gray-400 font-bold mr-1">A.</span>{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">nosh(ナッシュ)を始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">初回300円OFFでお得にスタート</p>
            <Link href="/" className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">ランキングに戻る</Link>
          </div>
          <h3 className="font-bold text-lg mb-3">他のサービスも比較する</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.href} className="bg-[#F9FAFB] hover:bg-green-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:text-[#16A34A] transition-colors">{s.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
