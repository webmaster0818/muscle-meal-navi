import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレ向け宅配弁当コスパランキング10選｜たんぱく質1gあたりの価格で比較【2026年】",
  description:
    "筋トレ・ボディメイク向け宅配弁当10サービスをコスパで徹底比較。1食あたり価格、たんぱく質1gあたりのコスト、送料込み総コストをランキング形式で紹介。最もコスパの良いサービスが一目でわかります。",
  keywords: "宅配弁当 コスパ ランキング 筋トレ,宅配弁当 たんぱく質 コスパ,筋トレ 弁当 安い",
};

type Service = {
  rank: number;
  name: string;
  slug: string;
  priceMin: number;
  priceDisplay: string;
  proteinMin: number;
  proteinMax: number;
  proteinDisplay: string;
  costPerGram: number;
  shipping: string;
  totalCostNote: string;
};

const services: Service[] = [
  {
    rank: 1,
    name: "nosh（ナッシュ）",
    slug: "nosh",
    priceMin: 599,
    priceDisplay: "599円〜",
    proteinMin: 20,
    proteinMax: 30,
    proteinDisplay: "20〜30g",
    costPerGram: 23.9,
    shipping: "836〜2,849円",
    totalCostNote: "10食セットで1食あたり約700円前後（送料込み）",
  },
  {
    rank: 2,
    name: "タイヘイ",
    slug: "taihei",
    priceMin: 680,
    priceDisplay: "680円〜",
    proteinMin: 15,
    proteinMax: 20,
    proteinDisplay: "15〜20g",
    costPerGram: 38.8,
    shipping: "無料〜715円",
    totalCostNote: "定期便で送料無料プランあり。1食680円〜で続けやすい",
  },
  {
    rank: 3,
    name: "三ツ星ファーム",
    slug: "mitsuboshi",
    priceMin: 680,
    priceDisplay: "680円〜",
    proteinMin: 15,
    proteinMax: 25,
    proteinDisplay: "15〜25g",
    costPerGram: 34.0,
    shipping: "990円（一部無料）",
    totalCostNote: "14食・21食コースで送料無料。1食あたり実質680円〜",
  },
  {
    rank: 4,
    name: "ウェルネスダイニング",
    slug: "wellness-dining",
    priceMin: 740,
    priceDisplay: "740円〜",
    proteinMin: 15,
    proteinMax: 20,
    proteinDisplay: "15〜20g",
    costPerGram: 42.2,
    shipping: "770円（定期便385円）",
    totalCostNote: "定期便で送料半額。制限食メニューが豊富",
  },
  {
    rank: 5,
    name: "RIZAPサポートミール",
    slug: "rizap-meal",
    priceMin: 871,
    priceDisplay: "871円〜",
    proteinMin: 18,
    proteinMax: 25,
    proteinDisplay: "18〜25g",
    costPerGram: 40.5,
    shipping: "800円（定期便600円）",
    totalCostNote: "RIZAP監修の安心感。定期便で送料割引あり",
  },
  {
    rank: 6,
    name: "WooFoods",
    slug: "woofoods",
    priceMin: 890,
    priceDisplay: "890円〜",
    proteinMin: 30,
    proteinMax: 40,
    proteinDisplay: "30〜40g",
    costPerGram: 25.4,
    shipping: "送料別途",
    totalCostNote: "高たんぱく×コスパのバランスが良い。筋トレ向き",
  },
  {
    rank: 7,
    name: "Dietician（ダイエティシャン）",
    slug: "dietician",
    priceMin: 898,
    priceDisplay: "898円〜",
    proteinMin: 30,
    proteinMax: 40,
    proteinDisplay: "30〜40g",
    costPerGram: 25.6,
    shipping: "送料無料",
    totalCostNote: "送料無料が大きなメリット。実質コスパは良好",
  },
  {
    rank: 8,
    name: "マッスルデリ",
    slug: "muscle-deli",
    priceMin: 980,
    priceDisplay: "980円〜",
    proteinMin: 30,
    proteinMax: 65,
    proteinDisplay: "30〜65g",
    costPerGram: 20.6,
    shipping: "一部プラン無料",
    totalCostNote: "GAINコースはたんぱく質1gあたり最安クラス",
  },
  {
    rank: 9,
    name: "筋肉食堂DELI",
    slug: "kinniku-shokudo",
    priceMin: 996,
    priceDisplay: "996円〜",
    proteinMin: 40,
    proteinMax: 65,
    proteinDisplay: "40〜65g",
    costPerGram: 19.0,
    shipping: "780〜2,500円",
    totalCostNote: "たんぱく質1gあたりでは最安。高たんぱく重視なら◎",
  },
  {
    rank: 10,
    name: "MORE THAN DELI",
    slug: "morethandeli",
    priceMin: 1080,
    priceDisplay: "1,080円〜",
    proteinMin: 30,
    proteinMax: 50,
    proteinDisplay: "30〜50g",
    costPerGram: 27.0,
    shipping: "送料別途",
    totalCostNote: "手作り品質が魅力。味重視の方向け",
  },
];

const faqs = [
  {
    q: "たんぱく質1gあたりのコスパが最も良いのはどのサービスですか？",
    a: "たんぱく質1gあたりのコスパでは筋肉食堂DELIが最安クラス（約19円/g）です。パワーコースの場合、1食で40〜65gのたんぱく質が摂れるため、グラム単価が非常に優れています。次いでマッスルデリのGAINコース（約20.6円/g）が高コスパです。",
  },
  {
    q: "1食あたりの価格が最も安いのはどのサービスですか？",
    a: "1食あたりの価格ではnosh（ナッシュ）の599円〜が最安です。長期継続でランク割引も適用され、最安で499円/食まで下がります。ただし、たんぱく質量は20〜30gと他の高たんぱく特化サービスよりは控えめです。",
  },
  {
    q: "送料を含めた総コストで最もお得なのはどこですか？",
    a: "送料込みの総コストではDietician（ダイエティシャン）が有利です。全プラン送料無料のため、表示価格がそのまま実質コストになります。noshも10食セットを選べば1食あたりの送料負担を抑えられます。",
  },
  {
    q: "筋トレ初心者がコスパ良く始めるならどのサービスがおすすめですか？",
    a: "筋トレ初心者にはnoshがおすすめです。1食599円〜と最も安く、たんぱく質20〜30gと十分な量を確保できます。60種類以上のメニューで飽きにくく、まずは宅配弁当での食事管理に慣れるのに最適です。慣れてきたら高たんぱく特化のサービスにステップアップしましょう。",
  },
  {
    q: "バルクアップ期にコスパの良いサービスはどれですか？",
    a: "バルクアップ期にはマッスルデリのGAINコースまたは筋肉食堂DELIのパワーコースがおすすめです。1食あたりの価格は高めですが、たんぱく質1gあたりのコストでは最安クラス。1食で50〜65gのたんぱく質が摂れるため、プロテインの追加購入費を考えると総合的にお得です。",
  },
  {
    q: "定期購入の割引が大きいサービスはどこですか？",
    a: "定期購入の割引が大きいのはnoshです。継続購入でランクが上がり、最大16.55%OFFが適用されます。また、マッスルデリやDieticianも定期購入で割引が適用されるため、長期利用を前提にするなら定期プランの価格で比較することをおすすめします。",
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

// Sort by price for price ranking
const priceRanking = [...services].sort((a, b) => a.priceMin - b.priceMin);
// Sort by cost per gram for protein cost ranking
const proteinCostRanking = [...services].sort((a, b) => a.costPerGram - b.costPerGram);

export default function CostRanking() {
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
            { name: "比較", href: "/#compare" },
            { name: "コスパランキング" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">筋トレ向け宅配弁当コスパランキング</h1>
          <p className="text-gray-300">
            全10サービスを1食あたり価格・たんぱく質1gあたりコストで徹底比較
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレ・ボディメイク向けの宅配弁当を選ぶ際、味やたんぱく質量だけでなく「コスパ」も重要な判断基準です。単純な1食あたりの価格だけでなく、たんぱく質1gあたりのコストや送料を含めた総コストまで、10サービスを徹底比較しました。
          </p>
          <p className="text-gray-700 leading-relaxed">
            結論から言えば、1食あたりの価格ではnoshが最安、たんぱく質1gあたりのコスパでは筋肉食堂DELIが最も優れています。目的や予算に合わせて最適なサービスを選びましょう。
          </p>
        </section>

        {/* Price Ranking Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            1食あたり価格ランキング
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-3 text-center font-bold w-12">順位</th>
                  <th className="py-3 px-4 text-left font-bold">サービス名</th>
                  <th className="py-3 px-4 text-center font-bold">1食あたり価格</th>
                  <th className="py-3 px-4 text-center font-bold">たんぱく質</th>
                  <th className="py-3 px-4 text-center font-bold hidden md:table-cell">送料</th>
                </tr>
              </thead>
              <tbody>
                {priceRanking.map((s, i) => (
                  <tr key={s.slug} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        i === 0 ? "bg-yellow-400 text-white" :
                        i === 1 ? "bg-gray-300 text-white" :
                        i === 2 ? "bg-amber-600 text-white" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {i + 1}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-700">
                      <Link href={`/review/${s.slug}/`} className="hover:text-[#16A34A] transition-colors">
                        {s.name}
                      </Link>
                    </td>
                    <td className={`py-3 px-4 text-center font-bold ${i < 3 ? "text-[#16A34A]" : "text-gray-600"}`}>
                      {s.priceDisplay}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">{s.proteinDisplay}</td>
                    <td className="py-3 px-4 text-center text-gray-500 text-xs hidden md:table-cell">{s.shipping}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Protein Cost Ranking Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            たんぱく質1gあたりコストランキング
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            ※ 各サービスの最高たんぱく質メニュー・コースの最低価格で算出
          </p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-3 text-center font-bold w-12">順位</th>
                  <th className="py-3 px-4 text-left font-bold">サービス名</th>
                  <th className="py-3 px-4 text-center font-bold">1gあたり</th>
                  <th className="py-3 px-4 text-center font-bold">1食あたり価格</th>
                  <th className="py-3 px-4 text-center font-bold hidden md:table-cell">たんぱく質</th>
                </tr>
              </thead>
              <tbody>
                {proteinCostRanking.map((s, i) => (
                  <tr key={s.slug} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        i === 0 ? "bg-yellow-400 text-white" :
                        i === 1 ? "bg-gray-300 text-white" :
                        i === 2 ? "bg-amber-600 text-white" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {i + 1}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-700">
                      <Link href={`/review/${s.slug}/`} className="hover:text-[#16A34A] transition-colors">
                        {s.name}
                      </Link>
                    </td>
                    <td className={`py-3 px-4 text-center font-bold ${i < 3 ? "text-[#16A34A]" : "text-gray-600"}`}>
                      {s.costPerGram.toFixed(1)}円
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">{s.priceDisplay}</td>
                    <td className="py-3 px-4 text-center text-gray-500 hidden md:table-cell">{s.proteinDisplay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Total Cost Comparison */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            送料込み総コスト比較
          </h2>
          <div className="space-y-3">
            {services.map((s) => (
              <div key={s.slug} className="bg-white rounded-lg border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/review/${s.slug}/`} className="font-bold text-gray-800 hover:text-[#16A34A] transition-colors">
                    {s.name}
                  </Link>
                  <span className="text-sm font-bold text-[#16A34A]">{s.priceDisplay}/食</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                  <span>たんぱく質: {s.proteinDisplay}</span>
                  <span>送料: {s.shipping}</span>
                </div>
                <p className="text-sm text-gray-600">{s.totalCostNote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Purpose-based Recommendation */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            目的別おすすめサービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-5 border-2 border-[#16A34A]">
              <h3 className="font-bold text-[#16A34A] mb-3">コスパ最優先</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">nosh（ナッシュ）</p>
              <p className="text-sm text-gray-600 mb-3">
                1食599円〜と最安。ランク割引で最大16.55%OFF。筋トレ初心者の入門に最適。
              </p>
              <Link href="/review/nosh/" className="text-sm text-[#16A34A] hover:underline font-medium">
                詳細レビュー →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-gray-800">
              <h3 className="font-bold text-gray-800 mb-3">たんぱく質コスパ最強</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">筋肉食堂DELI</p>
              <p className="text-sm text-gray-600 mb-3">
                たんぱく質1gあたり約19円は業界最安。高たんぱく重視の筋トレガチ勢に。
              </p>
              <Link href="/review/kinniku-shokudo/" className="text-sm text-[#16A34A] hover:underline font-medium">
                詳細レビュー →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 border-2 border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">送料込み総コスト</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">Dietician</p>
              <p className="text-sm text-gray-600 mb-3">
                全プラン送料無料。表示価格=実質コストで計算しやすい。高たんぱく30〜40g。
              </p>
              <Link href="/review/dietician/" className="text-sm text-[#16A34A] hover:underline font-medium">
                詳細レビュー →
              </Link>
            </div>
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

        {/* CTA */}
        <section className="mb-10">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 text-center mb-6">
            <h2 className="text-xl font-bold mb-3">自分に合った宅配弁当を見つけよう</h2>
            <p className="text-gray-300 text-sm mb-6">全サービスを比較したランキングをチェック</p>
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
              { name: "たんぱく質ランキング", href: "/compare/protein-ranking/" },
              { name: "マッスルデリ vs nosh", href: "/compare/muscledeli-vs-nosh/" },
              { name: "nosh vs 筋肉食堂", href: "/compare/nosh-vs-kinniku-shokudo/" },
              { name: "マッスルデリ レビュー", href: "/review/muscle-deli/" },
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
