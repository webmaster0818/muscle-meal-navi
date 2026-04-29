import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "三ツ星ファームの口コミ・評判｜低カロリー350kcal以下の宅配弁当を徹底レビュー【2026年】",
  description:
    "三ツ星ファームを実際に利用した口コミ・評判を紹介。たんぱく質15g以上・350kcal以下の低カロリー宅配弁当のPFC、価格、味を徹底レビュー。",
};

const overview = {
  name: "三ツ星ファーム",
  protein: "15g以上/食",
  fat: "10〜18g/食",
  carbs: "25〜35g/食",
  calories: "350kcal以下/食",
  price: "626円〜/食",
  menuCount: "80種以上",
  delivery: "全国対応（冷凍便）",
  features: "一流シェフ監修のおしゃれメニュー",
};

const strengths = [
  { title: "全メニュー350kcal以下の低カロリー設計", desc: "ダイエット中のカロリーコントロールがしやすく、食事を楽しみながらも無理なくカロリー制限ができます。" },
  { title: "一流シェフ監修のおしゃれなメニュー", desc: "有名シェフが監修したメニューは見た目も味も高品質。SNS映えするお弁当として女性からの人気が特に高いです。" },
  { title: "80種以上の豊富なラインナップ", desc: "和洋中からエスニックまで、80種以上のバリエーション。毎日違うメニューを楽しめるので長期間続けやすいです。" },
  { title: "コスパと品質のバランスが優秀", desc: "1食626円〜というリーズナブルな価格ながら、シェフ監修の品質を実現。コスパの良さが口コミでも評価されています。" },
];

const reviews = [
  { name: "Y.I さん（20代女性）", rating: 5.0, period: "利用歴8ヶ月", text: "見た目がおしゃれでテンションが上がります。ダイエット中でも「我慢している」感がなく、むしろ食事が楽しみになりました。350kcal以下なのにしっかり満足感があります。友人にも紹介しました。" },
  { name: "K.M さん（30代女性）", rating: 4.5, period: "利用歴4ヶ月", text: "ボディメイク中の女性に最適だと思います。たんぱく質15g以上・低カロリーで、味もよいのでストレスフリー。ただ、ハードにトレーニングしている男性にはたんぱく質が足りないかも。" },
  { name: "T.A さん（30代男性）", rating: 3.5, period: "利用歴2ヶ月", text: "減量期に利用しました。味はとてもいいですが、筋トレガチ勢としてはたんぱく質15gでは全然足りません。プロテインを足して使っていました。女性や軽い運動をする方にはぴったりだと思います。" },
  { name: "R.F さん（40代女性）", rating: 4.5, period: "利用歴6ヶ月", text: "仕事が忙しくて自炊できない時の強い味方。レンジで温めるだけでおしゃれな食事ができるのが嬉しい。カロリー計算不要で健康管理ができるので、ズボラな私にぴったりです。" },
];

const faqs = [
  { q: "三ツ星ファームは筋トレ向きですか？", a: "軽〜中程度のトレーニングやダイエット目的であれば十分です。ハードなトレーニーにはたんぱく質量がやや不足するため、プロテインとの併用がおすすめです。" },
  { q: "何食セットがお得ですか？", a: "14食セット・21食セットがコスパが良くおすすめです。まとめ買いするほど1食あたりの単価が下がり、送料負担も軽減されます。" },
  { q: "冷凍庫にどのくらいスペースが必要？", a: "7食セットで冷凍庫の約1/3程度のスペースが必要です。14食以上の場合は大型冷凍庫があると便利です。" },
  { q: "メニューは自分で選べますか？", a: "はい。全80種以上のメニューから好きなものを自分で選ぶことができます。人気ランキングや栄養情報を参考に選びましょう。" },
  { q: "初回限定のお得なプランはありますか？", a: "初回は14食セットが送料無料になるキャンペーンを実施していることがあります。公式サイトで最新のキャンペーン情報を確認しましょう。" },
  { q: "定期便の解約はいつでもできますか？", a: "はい。マイページからいつでも解約・スキップが可能です。次回配送日の一定日数前までに手続きしてください。" },
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
  { name: "WooFoods", href: "/review/woofoods/" },
];

export default function MitsuboshiFarm() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "三ツ星ファーム" }]} />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">第4位</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">三ツ星ファームの口コミ・評判</h1>
          <p className="text-gray-300">低カロリー350kcal以下のおしゃれ宅配弁当を徹底レビュー</p>
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
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>三ツ星ファームの強み</h2>
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
                {["カロリーコントロールがしやすい", "おしゃれなメニューでSNS映え", "コスパと品質のバランスが良い", "80種以上で飽きにくい"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["ハードなトレーニーにはたんぱく質不足", "ガッツリ系メニューは少なめ", "ご飯（主食）は別途用意が必要"].map((c) => (
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
            <h2 className="text-xl font-bold mb-3">三ツ星ファームを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">おしゃれで低カロリーな宅配弁当を体験</p>
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
