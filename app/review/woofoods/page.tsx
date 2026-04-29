import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "WooFoodsの口コミ・評判｜高たんぱく低脂質の宅配弁当を徹底レビュー【2026年】",
  description:
    "WooFoodsを実際に利用した口コミ・評判を紹介。たんぱく質30g以上・高たんぱく低脂質のボディメイク特化宅配弁当のPFC、価格、味を徹底レビュー。",
};

const overview = {
  name: "WooFoods",
  protein: "30g以上/食",
  fat: "8〜15g/食",
  carbs: "30〜50g/食",
  calories: "300〜500kcal/食",
  price: "648円〜/食",
  menuCount: "約30種類",
  delivery: "全国対応（冷凍便）",
  features: "ボディメイク特化の高たんぱく低脂質設計",
};

const strengths = [
  { title: "高たんぱく・低脂質に特化", desc: "たんぱく質30g以上を確保しつつ、脂質を10g前後に抑えた設計。ボディメイクに最適化されたPFCバランスが最大の特徴です。" },
  { title: "コスパの良さ", desc: "1食648円〜と、高たんぱく弁当としてはリーズナブルな価格設定。マッスルデリや筋肉食堂DELIと比べてコスパが優れています。" },
  { title: "ボディメイクに最適化されたPFC", desc: "脂質が低く抑えられているため、カロリー管理がしやすい。減量期のPFCバランスに最適で、マクロ管理が楽になります。" },
  { title: "トレーニング後の栄養補給に最適", desc: "高たんぱく・適度な炭水化物の配合で、トレーニング後のリカバリーミールとして理想的なバランスです。" },
];

const reviews = [
  { name: "S.K さん（20代男性）", rating: 4.5, period: "利用歴7ヶ月", text: "高たんぱく低脂質でこの価格はすごいと思います。減量期のメイン食として重宝しています。味は素朴ですが、調味料でアレンジすれば十分おいしい。筋トレ後の栄養補給にぴったりです。コスパは筋トレ弁当の中で一番いいかも。" },
  { name: "A.O さん（30代男性）", rating: 4.0, period: "利用歴4ヶ月", text: "マッスルデリが高くて乗り換えました。たんぱく質30g以上で脂質が低いので、マクロ計算が楽。味はマッスルデリや筋肉食堂には及びませんが、価格を考えると十分です。メニュー数がもう少し増えてほしい。" },
  { name: "M.T さん（20代女性）", rating: 4.0, period: "利用歴3ヶ月", text: "ボディメイクコンテストの準備で利用しています。脂質が低いので、減量末期でも使いやすいです。たまに味が淡白に感じることもありますが、全体的には満足。価格が手頃なのも続けやすいポイントです。" },
  { name: "G.H さん（30代男性）", rating: 3.5, period: "利用歴2ヶ月", text: "知名度は低いですが、PFCバランスは本当に優秀です。低脂質なので減量向き。ただメニューバリエーションが少ないので、飽きる前にnoshと交互に使うのがおすすめ。配送は問題なく届いています。" },
];

const faqs = [
  { q: "WooFoodsは他のサービスと何が違いますか？", a: "高たんぱく・低脂質に特化している点が最大の特徴です。脂質を10g前後に抑えつつ、たんぱく質30g以上を確保しているサービスは珍しく、PFCバランスを重視するボディメイク愛好者に最適です。" },
  { q: "増量期にも使えますか？", a: "増量期には白米や炭水化物を追加することで活用できます。ただし増量に特化したコースはないため、カロリーを増やしたい場合は自分で調整する必要があります。" },
  { q: "送料はいくらですか？", a: "地域やセット数によって異なりますが、全国一律ではないため公式サイトで確認してください。まとめ注文で1食あたりの送料負担を軽減できます。" },
  { q: "メニューは選べますか？", a: "コース内容はお任せが基本ですが、セットの中から選択できるプランもあります。詳しくは公式サイトの注文ページをご確認ください。" },
  { q: "定期便の解約に縛りはありますか？", a: "最低継続回数の縛りはなく、マイページからいつでも解約・スキップが可能です。初回注文後でも気軽に解約できます。" },
  { q: "他のサービスと併用するのはアリですか？", a: "おすすめです。WooFoodsは低脂質に強いので減量期のメイン使いに、noshは味の変化を楽しむサブ使いにするなど、目的に応じた使い分けが効果的です。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

const relatedServices = [
  { name: "マッスルデリ", href: "/review/muscle-deli/" },
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "筋肉食堂DELI", href: "/review/kinniku-shokudo/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
];

export default function WooFoodsReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "WooFoods" }]} />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">第5位</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">WooFoodsの口コミ・評判</h1>
          <p className="text-gray-300">高たんぱく低脂質のボディメイク特化弁当を徹底レビュー</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>基本情報</h2>
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
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>WooFoodsの強み</h2>
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
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                {["高たんぱく低脂質のバランスが秀逸", "ボディメイク特化で目的が明確", "価格が比較的リーズナブル", "トレーニング後の栄養補給に最適"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["メニュー数がやや少なめ", "知名度が他社に比べて低い", "味が淡白に感じるメニューもある"].map((c) => (
                  <li key={c} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-red-500 flex-shrink-0">-</span>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>利用者の口コミ・評判</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-gray-800">{r.name}</span>
                  <span className="text-xs text-gray-500">{r.period}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (<span key={j} className={`text-sm ${j < Math.floor(r.rating) ? "text-yellow-400" : "text-gray-300"}`}>&#9733;</span>))}
                  <span className="text-xs text-gray-500 ml-1">{r.rating}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>よくある質問</h2>
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
            <h2 className="text-xl font-bold mb-3">WooFoodsを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">コスパ抜群の高たんぱく低脂質弁当を体験</p>
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
