import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）｜筋トレ向け宅配弁当の疑問を解決 - マッスルミールナビ",
  description:
    "筋トレ・ボディメイク向け宅配弁当に関するよくある質問をまとめました。たんぱく質の必要量、コスパの良いサービス、増量期・減量期の食事選びなど10の質問に回答。",
};

const faqs = [
  {
    q: "筋トレ向け宅配弁当は普通の宅配弁当と何が違いますか？",
    a: "筋トレ向け宅配弁当は、たんぱく質・脂質・炭水化物（PFC）のバランスが細かく計算されている点が最大の違いです。通常の宅配弁当はカロリーや塩分に注目していることが多いですが、筋トレ向けはたんぱく質含有量を重視し、1食あたり30g以上のたんぱく質を確保しているサービスが多いです。また、増量・減量・メンテナンスなど目的別にコースが用意されていることも特徴です。",
  },
  {
    q: "1日に必要なたんぱく質量はどのくらいですか？",
    a: "一般的に筋トレをしている方は、体重1kgあたり1.6〜2.2gのたんぱく質摂取が推奨されています。例えば体重70kgの方であれば、1日112〜154gが目安です。減量期はやや多めの2.0〜2.4g/kg、増量期は1.6〜2.0g/kgを目安にすると良いでしょう。宅配弁当1食で30〜65gのたんぱく質を摂取できるため、残りをプロテインや他の食事で補うのが効率的です。",
  },
  {
    q: "コスパが一番良いサービスはどれですか？",
    a: "1食あたりの価格だけで見ると、nosh（ナッシュ）の599円〜が最安クラスです。ただし、たんぱく質1gあたりの単価で考えると、WooFoods（648円〜でたんぱく質30g以上）やマッスルデリ（定期980円〜でたんぱく質30-65g）も優れたコスパを発揮します。自分の重視するポイント（価格・たんぱく質量・味）に合わせて選ぶことが大切です。",
  },
  {
    q: "増量期におすすめのサービスはどれですか？",
    a: "増量期には、カロリーとたんぱく質が豊富なサービスがおすすめです。マッスルデリのGAIN（増量）コースは1食あたりたんぱく質55-65g・カロリー550-650kcalと最も充実しています。筋肉食堂DELIのバルクアップコースもたんぱく質40-65gと高水準。白米やオートミールを追加してカロリーを補うのも効果的です。",
  },
  {
    q: "減量期におすすめのサービスはどれですか？",
    a: "減量期には低カロリー・低脂質のサービスが最適です。三ツ星ファーム（350kcal以下）は厳格なカロリー管理に向いています。nosh（糖質30g以下）は糖質制限ダイエットに適しています。WooFoods（低脂質設計）はPFCバランスを重視した減量に最適。脂質をできるだけ抑えたい方にはWooFoodsがおすすめです。",
  },
  {
    q: "宅配弁当だけで筋トレの栄養は足りますか？",
    a: "1日3食すべてを宅配弁当にすれば理論上は足りますが、コスト面で現実的ではありません。おすすめの活用法は、1日1〜2食を宅配弁当にし、残りは自炊やプロテインで補う方法です。特にトレーニング直後はプロテインシェイク、その他の食事で宅配弁当を活用するパターンが多くのトレーニーに支持されています。",
  },
  {
    q: "冷凍弁当の保存方法と賞味期限は？",
    a: "届いたらすぐに冷凍庫に入れてください。賞味期限は一般的に製造から6ヶ月〜1年です。食べる時は電子レンジで指定の時間温めるだけ。一度解凍したものの再冷凍は品質が低下するため避けましょう。冷凍庫のスペースは5食セットで冷凍庫の1/4〜1/3程度必要です。",
  },
  {
    q: "味はおいしいですか？まずくないですか？",
    a: "各社とも味の改良を重ねており、冷凍弁当の味は年々向上しています。特に筋肉食堂DELIはレストランが母体のため味の評価が非常に高いです。三ツ星ファームは一流シェフ監修でおしゃれな味わい。noshは60種以上のメニューから選べるので好みの味を見つけやすいです。マッスルデリやWooFoodsは筋トレ弁当としては十分なおいしさですが、グルメ志向の方には筋肉食堂DELIや三ツ星ファームがおすすめです。",
  },
  {
    q: "アレルギーがあっても利用できますか？",
    a: "多くのサービスでアレルギー成分表示を行っていますが、完全な除去食に対応しているサービスは限られています。noshは各メニューに詳細なアレルギー表示があり、自分でメニューを選べるため回避がしやすいです。特定のアレルギーがある場合は、注文前に各サービスのカスタマーサポートに確認することを強くおすすめします。",
  },
  {
    q: "定期便の解約やスキップは簡単にできますか？",
    a: "はい。紹介しているサービスはすべてマイページから解約・スキップの手続きが可能です。多くのサービスで最低継続回数の縛りはなく、次回配送日の数日前（4〜8日前）までに手続きすれば問題ありません。「まずは1回試してみたい」という方は、定期便で注文して1回目の配送後にスキップ・解約する方法がお得です。",
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

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "よくある質問" }]} />

        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">よくある質問（FAQ）</h1>
          <p className="text-gray-500">筋トレ向け宅配弁当に関する疑問にお答えします</p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-gray-800 hover:text-[#16A34A] transition-colors">
                <span className="flex items-center gap-3">
                  <span className="bg-[#16A34A] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-left">{faq.q}</span>
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4 ml-9">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">自分に合ったサービスを見つけよう</h2>
          <p className="text-gray-300 text-sm mb-6">
            ランキングであなたの目的に合った宅配弁当をチェック
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ランキングを見る
          </Link>
        </div>
      </div>
    </>
  );
}
