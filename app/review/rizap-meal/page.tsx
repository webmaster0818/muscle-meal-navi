import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "RIZAPサポートミールの口コミ・評判｜RIZAP監修の宅配弁当を徹底レビュー【2026年】",
  description:
    "RIZAPサポートミールを実際に利用した口コミ・評判を紹介。RIZAP監修の低糖質・高たんぱく宅配弁当のPFC、価格、メニュー内容を徹底レビュー。ダイエット・ボディメイクに最適な食事管理を解説。",
};

const overview = {
  name: "RIZAPサポートミール",
  protein: "18〜25g/食",
  fat: "8〜18g/食",
  carbs: "10〜18g/食（糖質）",
  calories: "200〜350kcal/食",
  price: "871円〜（定期）",
  menuCount: "約30種類",
  delivery: "全国対応（冷凍便）",
  features: "RIZAP監修 / 低糖質設計 / 管理栄養士監修",
};

const strengths = [
  {
    title: "RIZAPメソッドに基づく栄養設計",
    desc: "累計20万人以上のボディメイク実績を持つRIZAPが監修。低糖質・高たんぱくの食事設計で、無理のない体づくりをサポートします。",
  },
  {
    title: "1食あたり糖質10g前後の徹底管理",
    desc: "糖質制限を重視した設計で、1食あたりの糖質は約10g前後。ケトジェニックダイエットとの併用にも適しています。",
  },
  {
    title: "主菜+副菜のバランス構成",
    desc: "1食に主菜1品+副菜3品がセットになっており、栄養バランスが整った食事を手軽に摂れます。野菜もしっかり摂れるのが特徴です。",
  },
  {
    title: "レンジ加熱のみで完成",
    desc: "冷凍状態から電子レンジで約5分加熱するだけで完成。調理の手間がゼロで、忙しいトレーニーに最適です。",
  },
];

const reviews = [
  {
    name: "K.M さん（30代男性）",
    rating: 4.0,
    period: "利用歴4ヶ月",
    text: "RIZAPに通っていた経験があり、サポートミールも試してみました。糖質が本当に低いので、減量期に重宝しています。たんぱく質は1食20g前後なので、プロテインとの併用が前提ですね。味は想像以上においしくて、冷凍弁当のイメージが変わりました。",
  },
  {
    name: "S.T さん（40代女性）",
    rating: 4.5,
    period: "利用歴6ヶ月",
    text: "低糖質ダイエット中ですが、自炊だと献立に悩むのでサポートミールに頼っています。副菜が3品ついているので満足感があります。価格は少し高めですが、RIZAPブランドの安心感があるので続けています。",
  },
  {
    name: "Y.N さん（20代男性）",
    rating: 3.5,
    period: "利用歴2ヶ月",
    text: "筋トレ用としてはたんぱく質が少し物足りないです。マッスルデリと比較するとたんぱく質量で劣りますが、糖質制限の観点ではRIZAPの方が優秀。目的に応じて使い分けるのがベストだと思います。",
  },
  {
    name: "H.I さん（30代女性）",
    rating: 4.0,
    period: "利用歴3ヶ月",
    text: "ジムのトレーナーにすすめられて始めました。おかずのみなので、ご飯の量を自分で調整できるのがいいですね。定期便だと送料無料になるのも嬉しいポイントです。",
  },
];

const faqs = [
  {
    q: "RIZAPサポートミールはRIZAPに通っていなくても利用できますか？",
    a: "はい、RIZAPの会員でなくても誰でも購入可能です。公式サイトから会員登録するだけで注文できます。RIZAPのメソッドを自宅で手軽に取り入れたい方におすすめです。",
  },
  {
    q: "1食あたりの糖質はどのくらいですか？",
    a: "1食あたりの糖質は約10g前後に設計されています。一般的なコンビニ弁当（糖質50-80g）と比較すると大幅に低く、糖質制限ダイエットに最適です。",
  },
  {
    q: "筋トレ目的で利用する場合、たんぱく質は足りますか？",
    a: "1食あたりのたんぱく質は18-25g程度です。本格的な筋トレをしている方は、プロテインシェイクやゆで卵などで補うことをおすすめします。糖質を抑えながらたんぱく質を摂りたい方に向いています。",
  },
  {
    q: "定期便の解約に縛りはありますか？",
    a: "定期便に最低継続回数の縛りはありません。次回配送予定日の10日前までにマイページから手続きすれば、いつでもスキップ・解約が可能です。",
  },
  {
    q: "ご飯（白米）はついていますか？",
    a: "RIZAPサポートミールはおかずのみの構成です。ご飯やパンは付属していないため、糖質量に合わせて自分で主食の量を調整できます。",
  },
  {
    q: "賞味期限はどのくらいですか？",
    a: "冷凍保存で製造日から約6ヶ月程度です。届いたら冷凍庫に保管し、食べる際に電子レンジで加熱してください。",
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
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "Dietician", href: "/review/dietician/" },
  { name: "筋肉食堂DELI", href: "/review/kinniku-shokudo/" },
];

export default function RizapMeal() {
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
            { name: "RIZAPサポートミール" },
          ]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">RIZAPサポートミールの口コミ・評判</h1>
          <p className="text-gray-300">
            RIZAP監修の低糖質・高たんぱく宅配弁当を徹底レビュー
          </p>
        </div>

        {/* Overview table */}
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
                  ["炭水化物（糖質）/食", overview.carbs],
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

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            RIZAPサポートミールの強み
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

        {/* Pros & Cons */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            メリット・デメリット
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {["RIZAP監修の信頼感と実績", "糖質10g前後の徹底した低糖質設計", "副菜3品で満足感がある", "レンジ5分で手間いらず"].map((p) => (
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
                {["たんぱく質量は他社よりやや少なめ", "ご飯が付属しない（おかずのみ）", "メニュー数がやや少ない"].map((c) => (
                  <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-red-500 flex-shrink-0">-</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reviews */}
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

        {/* CTA + Related */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">RIZAPサポートミールを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">まずはお試しセットで味を確認してみましょう</p>
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
