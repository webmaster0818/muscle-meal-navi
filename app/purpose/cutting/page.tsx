import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "減量期におすすめの宅配弁当【低カロリー×高たんぱく】厳選5社比較【2026年】",
  description:
    "減量期・ダイエットに最適な宅配弁当を厳選比較。低カロリー・高たんぱくの宅配弁当5社のPFC・価格・メニューを徹底解説。筋肉を維持しながら体脂肪を落とすための食事戦略も紹介。",
};

const services = [
  {
    rank: 1,
    name: "マッスルデリ LEANコース",
    protein: "30〜40g",
    calories: "350〜450kcal",
    price: "980円〜",
    point: "減量専用に設計されたLEANコース。たんぱく質30g以上を確保しながらカロリーを抑えた絶妙なバランス。PFC管理の正確さは業界No.1。",
    href: "/review/muscle-deli/",
  },
  {
    rank: 2,
    name: "RIZAPサポートミール",
    protein: "18〜25g",
    calories: "200〜350kcal",
    price: "871円〜",
    point: "RIZAP監修の超低糖質設計。1食200-350kcalと大幅なカロリーカットが可能。ケトジェニックダイエットとの相性が抜群。",
    href: "/review/rizap-meal/",
  },
  {
    rank: 3,
    name: "nosh（ナッシュ）",
    protein: "20〜35g",
    calories: "200〜400kcal",
    price: "599円〜",
    point: "全メニュー糖質30g以下で設計。60種類以上のメニューで飽きにくく、1食599円〜のコスパの良さは減量期の長期利用に最適。",
    href: "/review/nosh/",
  },
  {
    rank: 4,
    name: "ウェルネスダイニング 糖質制限食",
    protein: "15〜20g",
    calories: "240〜350kcal",
    price: "694円〜",
    point: "制限食専門だけあって、カロリー・糖質の管理が正確。管理栄養士への無料相談サービス付きで、食事管理の不安を解消。",
    href: "/review/wellness-dining/",
  },
  {
    rank: 5,
    name: "Dietician SMALL PLAN",
    protein: "30〜35g",
    calories: "350〜450kcal",
    price: "898円〜",
    point: "減量向けSMALL PLANは1食350-450kcal。たんぱく質30g以上を確保しながらカロリーを抑制。PFC最適化に特化した設計。",
    href: "/review/dietician/",
  },
];

const tips = [
  {
    title: "カロリー欠損は500kcal/日以内に",
    desc: "急激なカロリー制限は筋肉の分解を招きます。消費カロリーに対して300-500kcalの欠損に抑え、週に0.3-0.5kgの減量ペースを目指しましょう。",
  },
  {
    title: "たんぱく質は体重×2-2.5gを死守",
    desc: "減量期こそたんぱく質の摂取が重要です。カロリー制限中は筋肉の分解が進みやすいため、体重1kgあたり2-2.5gのたんぱく質で筋肉量を維持しましょう。",
  },
  {
    title: "脂質は総カロリーの20-25%に",
    desc: "脂質を極端に減らすとホルモンバランスが崩れます。総摂取カロリーの20-25%は脂質から摂るようにし、良質な脂質（魚油、オリーブオイルなど）を選びましょう。",
  },
  {
    title: "トレーニング前後の栄養摂取を最適化",
    desc: "トレーニング前2時間以内に炭水化物を含む食事を摂り、トレーニング後はたんぱく質を素早く補給しましょう。宅配弁当はトレーニング前の食事として活用するのが効果的です。",
  },
];

const faqs = [
  {
    q: "減量期に宅配弁当を使うメリットは何ですか？",
    a: "最大のメリットはPFCが計算済みであること。減量期はカロリー管理が最も重要ですが、自炊だと計量・計算の手間がかかります。宅配弁当なら正確なPFCが記載されているため、食事記録が簡単です。",
  },
  {
    q: "1日の食事のうち何食を宅配弁当にすべきですか？",
    a: "予算と目的に応じて1-2食がおすすめです。昼食と夕食を宅配弁当にし、朝食はオートミール＋プロテインにすると、PFC管理が楽かつコスパも良くなります。",
  },
  {
    q: "糖質制限と脂質制限、どちらが減量に効果的ですか？",
    a: "個人の体質や好みによりますが、筋トレを行う場合は脂質制限（ローファット）の方がおすすめです。糖質はトレーニングのエネルギー源になるため、ある程度確保した方がパフォーマンスが維持できます。",
  },
  {
    q: "減量期にnoshの糖質30g以下で足りますか？",
    a: "おかずの糖質が30g以下であれば、ご飯（主食）の量で糖質を調整できます。減量期なら主食を玄米100g程度（糖質約35g）にすると、1食の糖質65g程度に収まり適切な範囲です。",
  },
  {
    q: "減量期はどのくらいの期間が目安ですか？",
    a: "体脂肪率にもよりますが、一般的に8-16週間が推奨されます。長すぎる減量は代謝の低下や筋肉の減少を招くため、計画的に期間を設定しましょう。",
  },
  {
    q: "減量中に食べてもいい間食はありますか？",
    a: "プロテインバー、ゆで卵、ギリシャヨーグルト、ナッツ類（少量）がおすすめです。たんぱく質が多く、満足感のある間食を選ぶことで空腹感を抑えつつ、マクロ管理を維持できます。",
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

export default function Cutting() {
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
            { name: "減量期におすすめ" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">減量期におすすめの宅配弁当</h1>
          <p className="text-gray-300">
            低カロリー×高たんぱくの宅配弁当を厳選比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            減量期（カッティング期）は、筋肉量を維持しながら体脂肪を落とすために、正確なカロリー管理とたんぱく質の十分な摂取が不可欠です。しかし、低カロリーかつ高たんぱくの食事を毎日自炊するのは、手間も時間もかかります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            そこで本記事では、減量期に最適な低カロリー・高たんぱくの宅配弁当を5社厳選し、PFC・価格・メニューの観点から比較しました。筋肉を守りながら効率的に体脂肪を落とすための食事戦略も解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            減量期向け宅配弁当ランキング
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

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            減量期の食事管理のポイント
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
            <h2 className="text-xl font-bold mb-3">減量期の食事管理を始めよう</h2>
            <p className="text-gray-300 text-sm mb-6">PFC計算済みの宅配弁当で効率的に体脂肪を落とす</p>
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
              { name: "増量期おすすめ", href: "/purpose/bulking/" },
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
