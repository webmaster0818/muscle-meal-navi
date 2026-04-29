import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋肉食堂DELIの口コミ・評判｜レストラン品質の高たんぱく弁当を徹底レビュー【2026年】",
  description:
    "筋肉食堂DELIを実際に利用した口コミ・評判を紹介。たんぱく質40-65g/食のレストラン品質宅配弁当のPFC、価格、味を徹底レビュー。",
};

const overview = {
  name: "筋肉食堂DELI",
  protein: "40〜65g/食",
  fat: "10〜20g/食",
  carbs: "30〜55g/食",
  calories: "400〜700kcal/食",
  price: "996円〜/食",
  menuCount: "約40種類",
  delivery: "全国対応（冷凍便）",
  features: "レストラン「筋肉食堂」の味を自宅で",
};

const strengths = [
  { title: "レストラン品質の本格的な味わい", desc: "渋谷・六本木で人気のレストラン「筋肉食堂」の味をそのまま冷凍弁当にしました。プロの料理人が調理する本格的な味わいが自宅で楽しめます。" },
  { title: "たんぱく質40-65gのハイプロテイン", desc: "業界最高レベルのたんぱく質含有量。ハードなトレーニングに取り組むアスリートやボディビルダーにも十分なたんぱく質を提供します。" },
  { title: "プロアスリートも愛用", desc: "格闘家やプロスポーツ選手など多くのアスリートが利用しており、その実績が品質の高さを証明しています。" },
  { title: "ダイエット・バルクアップ各コース", desc: "目的に合わせたコース設計で、ダイエットからバルクアップまで幅広いニーズに対応。コース変更も柔軟に行えます。" },
];

const reviews = [
  { name: "D.T さん（30代男性）", rating: 5.0, period: "利用歴10ヶ月", text: "味の満足度は断トツNo.1です。冷凍弁当とは思えない本格的な味わいで、鶏胸肉も柔らかくジューシー。価格は高めですが、外食のレストランと比べれば圧倒的にコスパが良いです。バルクアップコースのたんぱく質65gは本当にすごい。" },
  { name: "N.K さん（20代男性）", rating: 4.5, period: "利用歴5ヶ月", text: "フィジーク選手として減量期に利用しています。低脂質でたんぱく質が多いので、マクロ管理がしやすい。味も文句なしです。ただ値段が高いので、大会前の減量期に集中して利用しています。" },
  { name: "E.S さん（30代女性）", rating: 4.0, period: "利用歴3ヶ月", text: "パーソナルトレーナーに勧められて始めました。ダイエットコースを利用していますが、しっかりした味付けでダイエット食とは思えません。量もちょうどよく、女性でも満足できます。" },
  { name: "J.W さん（40代男性）", rating: 4.0, period: "利用歴6ヶ月", text: "値段だけがネック。味とたんぱく質量は業界トップだと思います。週に2〜3回の利用で、残りは自炊という使い方がベスト。配送エリアの制限が以前はありましたが、最近は全国対応になって助かっています。" },
];

const faqs = [
  { q: "筋肉食堂DELIのコースの選び方は？", a: "ダイエットコースは低カロリー・低脂質で減量向け、エブリデイコースは日常使い向け、パワーコースは高たんぱくでバルクアップ向けです。目的に応じて選びましょう。" },
  { q: "レストランと同じ味ですか？", a: "レストランのレシピをベースに冷凍弁当用に最適化しています。解凍後の味の再現度は非常に高く、レストラン品質に近い味を楽しめます。" },
  { q: "送料はいくらですか？", a: "地域やセット数によって異なりますが、860円〜となっています。まとめ買いや定期便を利用すると1食あたりの送料負担を抑えられます。" },
  { q: "メニューは選べますか？", a: "コースによって内容が決まっていますが、定期的にメニューが入れ替わります。苦手な食材がある場合はカスタマーサポートに相談できます。" },
  { q: "解約方法は？", a: "マイページから簡単に解約できます。次回配送日の一定日数前までに手続きが必要です。最低継続回数の縛りはありません。" },
  { q: "トレーニング後に最適なメニューは？", a: "パワーコースがトレーニング後の栄養補給に最適です。高たんぱく・適度な炭水化物で筋肉の回復をサポートします。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

const relatedServices = [
  { name: "マッスルデリ", href: "/review/muscle-deli/" },
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
  { name: "WooFoods", href: "/review/woofoods/" },
];

export default function KinnikuShokudo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "筋肉食堂DELI" }]} />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">第3位</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">筋肉食堂DELIの口コミ・評判</h1>
          <p className="text-gray-300">レストラン品質の高たんぱく宅配弁当を徹底レビュー</p>
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
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>筋肉食堂DELIの強み</h2>
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
                {["レストラン品質の本格的な味わい", "たんぱく質含有量が非常に高い", "アスリートの実績・信頼感がある", "低脂質でPFCバランスが優秀"].map((p) => (
                  <li key={p} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-green-500 flex-shrink-0">+</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2">
                {["価格帯は高めの設定", "配送エリアに制限がある場合がある", "メニュー数は他社よりやや少なめ"].map((c) => (
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
            <h2 className="text-xl font-bold mb-3">筋肉食堂DELIを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">レストラン品質の高たんぱく弁当を体験</p>
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
