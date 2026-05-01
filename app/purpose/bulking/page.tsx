import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "増量期におすすめの宅配弁当【高カロリー×高たんぱく】厳選5社比較【2026年】",
  description:
    "増量期・バルクアップに最適な宅配弁当を厳選比較。高カロリー・高たんぱくの宅配弁当5社のPFC・価格・メニューを徹底解説。効率的に筋肉を増やすための食事戦略も紹介。",
};

const services = [
  {
    rank: 1,
    name: "マッスルデリ GAINコース",
    protein: "55〜65g",
    calories: "550〜650kcal",
    price: "1,280円〜",
    point: "業界トップクラスのたんぱく質量。1食で65gのたんぱく質が摂れるGAINコースは増量期の強い味方。PFC設計の正確さも高評価。",
    href: "/review/muscle-deli/",
  },
  {
    rank: 2,
    name: "筋肉食堂DELI パワーコース",
    protein: "40〜60g",
    calories: "500〜700kcal",
    price: "1,180円〜",
    point: "レストラン品質の味を自宅で。ボリューム感があり、増量期でも満足できる食事量。鶏肉・牛肉のバリエーションが豊富。",
    href: "/review/kinniku-shokudo/",
  },
  {
    rank: 3,
    name: "MORE THAN DELI",
    protein: "30〜50g",
    calories: "400〜500kcal",
    price: "1,080円〜",
    point: "玄米付きでPFCが完結。低脂質ながら十分なカロリーを確保。クリーンバルクを目指す方に最適。",
    href: "/review/morethandeli/",
  },
  {
    rank: 4,
    name: "Dietician MEDIUM PLAN",
    protein: "35〜40g",
    calories: "450〜550kcal",
    price: "998円〜",
    point: "管理栄養士監修のPFC最適化弁当。増量期に必要な栄養素をバランスよく摂取可能。メニューも約40種類と豊富。",
    href: "/review/dietician/",
  },
  {
    rank: 5,
    name: "nosh（ナッシュ）",
    protein: "20〜35g",
    calories: "300〜500kcal",
    price: "599円〜",
    point: "コスパ最強で60種類以上のメニュー。たんぱく質量はやや劣るが、価格の安さと品数でカバー。おかずの追加で増量にも対応可能。",
    href: "/review/nosh/",
  },
];

const tips = [
  {
    title: "カロリー余剰を作る",
    desc: "増量期は消費カロリーに対して300〜500kcalのカロリー余剰が必要です。宅配弁当1食分のカロリーを把握し、1日の総摂取カロリーを計算しましょう。足りない場合は白米やオートミールで補います。",
  },
  {
    title: "たんぱく質は体重×2gが目安",
    desc: "増量期のたんぱく質摂取量は体重1kgあたり2g程度が推奨されます。体重70kgなら140g/日が目標。宅配弁当3食で100g前後を確保し、残りをプロテインで補うのが効率的です。",
  },
  {
    title: "脂質を抑えてクリーンに増量",
    desc: "脂質の多い食事は体脂肪の増加につながります。PFCバランスが管理された宅配弁当を活用し、たんぱく質と炭水化物を中心にカロリーを増やすクリーンバルクが理想的です。",
  },
  {
    title: "食事回数を増やす",
    desc: "1日3食では必要カロリーを摂りきれない場合、4〜5食に分けましょう。宅配弁当を2〜3食利用し、間食にプロテインやおにぎりを加えるのが実践的な方法です。",
  },
];

const faqs = [
  {
    q: "増量期に宅配弁当だけで足りますか？",
    a: "宅配弁当だけでは増量期に必要なカロリーとたんぱく質を全て賄うのは難しい場合があります。白米やオートミール、プロテインシェイクを組み合わせることで、必要な栄養素を効率的に摂取できます。",
  },
  {
    q: "増量期のPFCバランスはどうすべきですか？",
    a: "一般的な増量期のPFC比率はたんぱく質25-30%、脂質20-25%、炭水化物45-55%が推奨されます。宅配弁当のPFCを基準にしつつ、足りない分を主食やプロテインで補うのが効率的です。",
  },
  {
    q: "クリーンバルクに最適な宅配弁当は？",
    a: "脂質を抑えながらたんぱく質とカロリーを確保できるMORE THAN DELIやマッスルデリのGAINコースがおすすめです。特にMORE THAN DELIは脂質5g台のメニューもあり、クリーンバルクに最適です。",
  },
  {
    q: "1日に何食分の宅配弁当を利用すべきですか？",
    a: "予算と目的に応じて1〜3食がおすすめです。全食を宅配弁当にするとコストがかかるため、昼食と夕食の2食を宅配弁当にし、朝食はオートミールとプロテインにするのが実践的です。",
  },
  {
    q: "増量期にnoshのような低カロリー弁当は使えますか？",
    a: "そのままではカロリー不足になりますが、白米を大盛りにしたり、おかずを追加することで増量期にも対応可能です。コスパが良いので、メインの食事として活用し、不足分は自炊で補うのがおすすめです。",
  },
  {
    q: "増量期はどのくらいのカロリーを摂るべきですか？",
    a: "基礎代謝と活動量から計算した消費カロリーに300-500kcalを上乗せしたカロリーが目安です。例えば消費カロリーが2,500kcalなら、2,800-3,000kcal/日を目標にしましょう。急激な増量は体脂肪の増加につながるため、緩やかに増やすのがポイントです。",
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

export default function Bulking() {
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
            { name: "目的別おすすめ", href: "/#purpose" },
            { name: "増量期におすすめ" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">増量期におすすめの宅配弁当</h1>
          <p className="text-gray-300">
            高カロリー×高たんぱくの宅配弁当を厳選比較
          </p>
        </div>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            増量期（バルクアップ期）は、筋肉の成長に必要なカロリーとたんぱく質を十分に摂取することが重要です。しかし、自炊でPFCバランスを管理しながら高カロリーの食事を毎日準備するのは大変です。そこで活用したいのが、PFC計算済みの宅配弁当サービスです。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本記事では、増量期に適した高カロリー・高たんぱくの宅配弁当を5社厳選し、PFC・価格・メニューの観点から比較しました。効率的にバルクアップするための食事戦略も解説します。
          </p>
        </section>

        {/* Ranking */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            増量期向け宅配弁当ランキング
          </h2>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.rank} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{s.rank}位
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{s.name}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">たんぱく質/食</div>
                    <div className="font-bold text-[#16A34A]">{s.protein}</div>
                  </div>
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">カロリー/食</div>
                    <div className="font-bold text-gray-800">{s.calories}</div>
                  </div>
                  <div className="text-center bg-[#F9FAFB] rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">価格</div>
                    <div className="font-bold text-gray-800">{s.price}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.point}</p>
                <Link href={s.href} className="text-sm text-[#16A34A] hover:underline font-medium">
                  詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            増量期の食事管理のポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((t) => (
              <div key={t.title} className="bg-[#F9FAFB] rounded-lg p-5 border border-gray-100">
                <h3 className="font-bold text-[#16A34A] mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
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
            <h2 className="text-xl font-bold mb-3">増量期の食事管理を始めよう</h2>
            <p className="text-gray-300 text-sm mb-6">PFC計算済みの宅配弁当で効率的にバルクアップ</p>
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
              { name: "減量期おすすめ", href: "/purpose/cutting/" },
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
              { name: "PFCバランス計算", href: "/knowledge/pfc-calculator/" },
              { name: "マッスルデリ vs nosh", href: "/compare/muscledeli-vs-nosh/" },
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
