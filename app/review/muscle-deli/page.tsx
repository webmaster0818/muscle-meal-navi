import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "マッスルデリの口コミ・評判｜PFC・価格を徹底レビュー【2026年】",
  description:
    "マッスルデリを実際に利用した口コミ・評判を紹介。たんぱく質30-65g/食の高たんぱく宅配弁当のPFC、価格、メニュー内容を徹底レビュー。増量・減量・メンテナンスの3コースを比較。",
};

const overview = {
  name: "マッスルデリ",
  protein: "30〜65g/食",
  fat: "10〜25g/食",
  carbs: "35〜65g/食",
  calories: "350〜650kcal/食",
  price: "980円〜（定期）",
  menuCount: "約50種類",
  delivery: "全国対応（冷凍便）",
  courses: "LEAN（減量）/ MAINTAIN（維持）/ GAIN（増量）",
};

const strengths = [
  {
    title: "目的別3コースで迷わない",
    desc: "減量（LEAN）・維持（MAINTAIN）・増量（GAIN）の3コースから選べるため、自分のトレーニング目標に合った食事が簡単に見つかります。",
  },
  {
    title: "管理栄養士が全メニューを監修",
    desc: "全メニューを管理栄養士が監修しており、PFCバランスが最適化されています。栄養計算の手間が省けるのが大きなメリットです。",
  },
  {
    title: "業界トップクラスのたんぱく質量",
    desc: "GAINコースでは1食あたり65gものたんぱく質を摂取可能。プロテインシェイクなしでも十分なたんぱく質を確保できます。",
  },
  {
    title: "PFC計算済みで手間いらず",
    desc: "カロリー、たんぱく質、脂質、炭水化物が全て計算済み。マクロ管理をしているトレーニーにとって、食事管理が格段に楽になります。",
  },
];

const reviews = [
  {
    name: "T.K さん（30代男性）",
    rating: 4.5,
    period: "利用歴6ヶ月",
    text: "増量期にGAINコースを利用しています。1食で60g以上のたんぱく質が摂れるのは本当に助かります。味も意外としっかりしていて、鶏胸肉のパサパサ感が少ないのが好印象。ただ価格が少し高いので、毎食利用するのは厳しいかも。週3〜4食で利用しています。",
  },
  {
    name: "M.S さん（20代女性）",
    rating: 4.0,
    period: "利用歴3ヶ月",
    text: "LEANコースでダイエット中です。PFCが計算済みなので、MyFitnessPalへの入力も楽。味は普通においしいですが、もう少しメニュー数が増えてほしいです。冷凍庫のスペースは結構必要なので注意。",
  },
  {
    name: "R.O さん（40代男性）",
    rating: 5.0,
    period: "利用歴1年",
    text: "MAINTAINコースを1年以上継続しています。体型維持が目的ですが、栄養バランスが安定しているおかげで体重管理がとても楽です。定期便の割引があるので、長期利用するほどお得感があります。",
  },
  {
    name: "A.H さん（30代男性）",
    rating: 3.5,
    period: "利用歴2ヶ月",
    text: "たんぱく質量は申し分ないです。ただ、同じようなメニューが続くと飽きてくるので、noshと併用しています。コスパだけ見ると他社に負けますが、PFC設計の正確さはNo.1だと思います。",
  },
];

const faqs = [
  {
    q: "マッスルデリのコースはどう選べばいい？",
    a: "体脂肪を減らしたい方はLEAN、現在の体型を維持したい方はMAINTAIN、筋肉量を増やしたい方はGAINがおすすめです。迷ったらMAINTAINから始めて、目的に応じて変更しましょう。",
  },
  {
    q: "定期便と単品購入はどちらがお得？",
    a: "定期便の方がお得です。定期便では1食あたりの価格が割引されるほか、送料無料のプランもあります。いつでもスキップ・解約可能なので、まずは定期便がおすすめです。",
  },
  {
    q: "冷凍庫にどのくらいスペースが必要？",
    a: "5食セットで冷凍庫の約1/4〜1/3程度のスペースが必要です。10食セットの場合はさらにスペースが必要なので、冷凍庫の容量を確認してから注文しましょう。",
  },
  {
    q: "メニューは自分で選べる？",
    a: "コースによって異なりますが、基本的にはランダムでの配送です。苦手な食材がある場合は事前に申告することも可能です。",
  },
  {
    q: "解約に縛りはある？",
    a: "定期便に最低継続回数はなく、いつでも解約・スキップが可能です。次回配送日の8日前までにマイページから手続きできます。",
  },
  {
    q: "添加物は使っていますか？",
    a: "一部のメニューに保存料等の添加物が含まれますが、管理栄養士監修のもと、安全性が確認された範囲で使用しています。詳細は各メニューの成分表で確認できます。",
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
  { name: "nosh(ナッシュ)", href: "/review/nosh/" },
  { name: "筋肉食堂DELI", href: "/review/kinniku-shokudo/" },
  { name: "三ツ星ファーム", href: "/review/mitsuboshi/" },
  { name: "WooFoods", href: "/review/woofoods/" },
];

export default function MuscleDeli() {
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
            { name: "マッスルデリ" },
          ]}
        />

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">第1位</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">マッスルデリの口コミ・評判</h1>
          <p className="text-gray-300">
            たんぱく質30-65g/食の高たんぱく宅配弁当を徹底レビュー
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

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            マッスルデリの強み
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
                {["目的別にコースが選べるため迷わない", "たんぱく質含有量がトップクラス", "冷凍で長期保存が可能", "管理栄養士監修の安心感"].map((p) => (
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
                {["他社と比べてやや価格が高め", "メニュー数が限られている", "冷凍庫のスペースが必要"].map((c) => (
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
            <h2 className="text-xl font-bold mb-3">マッスルデリを始めてみる</h2>
            <p className="text-gray-300 text-sm mb-6">まずはお試しセットから始めてみましょう</p>
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
