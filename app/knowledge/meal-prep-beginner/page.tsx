import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "筋トレ初心者の食事管理入門｜何から始めればいい？【2026年】",
  description:
    "筋トレ初心者向けの食事管理入門ガイド。目標設定→PFC計算→食事プランの3ステップ、初心者がやりがちな失敗5つ、コンビニ活用法、宅食弁当で簡単に始める方法、1週間の食事プラン例まで徹底解説。",
  keywords: ["筋トレ", "初心者", "食事", "管理", "始め方", "食事プラン"],
  openGraph: {
    title: "筋トレ初心者の食事管理入門｜何から始めればいい？",
    description:
      "筋トレ初心者向けの食事管理を3ステップで解説。失敗しない始め方と1週間プラン例。",
    type: "article",
    url: "https://muscle-meal-navi.com/knowledge/meal-prep-beginner/",
  },
};

const threeSteps = [
  {
    step: 1,
    title: "目標を設定する",
    desc: "まず「増量（筋肉を増やす）」「減量（体脂肪を減らす）」「維持（体型をキープ）」のどれを目指すか決めましょう。目標によって摂取カロリーやPFCバランスが変わります。",
    tips: [
      "体脂肪率20%以上の場合はまず減量から始めるのがおすすめ",
      "筋トレ初心者は「リコンプ（体脂肪を減らしながら筋肉を増やす）」も狙える",
      "3ヶ月単位で目標を設定し、体の変化を見ながら調整する",
    ],
  },
  {
    step: 2,
    title: "PFC（たんぱく質・脂質・炭水化物）を計算する",
    desc: "目標が決まったら、1日の摂取カロリーとPFCバランスを計算します。難しそうに感じますが、基本的な計算式に当てはめるだけです。",
    tips: [
      "基礎代謝 × 活動係数 = 1日の消費カロリー（TDEE）",
      "増量: TDEE + 300kcal / 減量: TDEE - 300kcal",
      "たんぱく質は体重 × 1.5-2gが初心者の目安",
      "PFC計算が面倒なら宅食弁当から始めてもOK",
    ],
  },
  {
    step: 3,
    title: "食事プランを実行する",
    desc: "計算結果をもとに、具体的な食事プランを立てて実行します。最初から完璧を目指す必要はなく、まずはたんぱく質量を意識するだけでも十分です。",
    tips: [
      "まずは「毎食たんぱく質を摂る」ことだけ意識する",
      "食事記録アプリ（MyFitnessPal等）で記録する習慣をつける",
      "週末に1週間分の食事を計画する",
      "PFC計算済みの宅食弁当を1日1-2食取り入れると簡単",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "たんぱく質だけに偏る",
    detail: "プロテインばかり飲んで炭水化物・脂質を極端に減らすパターン。炭水化物はトレーニングのエネルギー源、脂質はホルモン合成に必要です。",
    solution: "PFCバランスを意識する。まずはP30% / F25% / C45%を目安に。",
  },
  {
    mistake: "カロリーを大幅に減らしすぎる",
    detail: "早く痩せたいからとTDEEから1,000kcal以上マイナスにすると、筋肉も一緒に落ちてリバウンドしやすい体になります。",
    solution: "TDEE -300〜500kcalの範囲で緩やかに減量する。",
  },
  {
    mistake: "食事を抜く",
    detail: "忙しさや「食べなければ痩せる」という誤解から食事を抜くと、血糖値の乱高下やドカ食いの原因に。筋肉の分解も進みます。",
    solution: "1日3-5回の食事を規則的に摂る。時間がなければプロテインや宅食弁当で対応。",
  },
  {
    mistake: "トレーニング後に何も食べない",
    detail: "「食べたら太る」と思ってトレーニング後に食事を避けると、筋肉の回復・成長が阻害されます。",
    solution: "トレ後2時間以内にたんぱく質30g以上を含む食事を摂る。",
  },
  {
    mistake: "完璧を求めすぎる",
    detail: "PFCを1gまで計算しようとして疲弊し、続かなくなるパターン。食事管理は継続が最重要です。",
    solution: "8割の精度で十分。まずはたんぱく質量だけ管理することから始める。",
  },
];

const convenienceFoods = [
  { store: "セブンイレブン", items: "サラダチキン（P:24g）、たんぱく質が摂れるシリーズ、ゆで卵2個パック" },
  { store: "ファミリーマート", items: "グリルチキン（P:26g）、RIZAP監修スイーツ、全粒粉サンドイッチ" },
  { store: "ローソン", items: "サラダチキンバー（P:13g）、ブランパン（低糖質）、プロテイン飲料" },
  { store: "共通", items: "ゆで卵、サバの塩焼き、豆腐そうめん、ギリシャヨーグルト" },
];

const weeklyPlan = {
  title: "筋トレ初心者の1週間食事プラン例（減量目標・体重70kg）",
  note: "1日目標: 約2,200kcal / P:150g / F:50g / C:250g",
  days: [
    {
      day: "月曜（トレ日）",
      breakfast: "オートミール + プロテイン + バナナ",
      lunch: "宅食弁当（マッスルデリ LEAN）",
      dinner: "鶏胸肉200g + 玄米150g + サラダ",
      snack: "プロテイン + ゆで卵1個",
    },
    {
      day: "火曜（休息日）",
      breakfast: "全粒粉パン + 卵2個 + ヨーグルト",
      lunch: "コンビニ：サラダチキン + おにぎり2個",
      dinner: "宅食弁当（nosh 高たんぱく）+ 味噌汁",
      snack: "プロテイン",
    },
    {
      day: "水曜（トレ日）",
      breakfast: "プロテイン + バナナ + ナッツ",
      lunch: "宅食弁当（Dietician SMALL）",
      dinner: "サバ缶 + 玄米150g + 野菜炒め",
      snack: "ギリシャヨーグルト + プロテインバー",
    },
    {
      day: "木曜（休息日）",
      breakfast: "オートミール + 卵 + チーズ",
      lunch: "コンビニ：グリルチキン + サラダ + おにぎり",
      dinner: "宅食弁当（筋肉食堂DELI）",
      snack: "プロテイン",
    },
    {
      day: "金曜（トレ日）",
      breakfast: "プロテイン + オートミール + ベリー",
      lunch: "宅食弁当（マッスルデリ LEAN）",
      dinner: "鶏もも肉（皮なし）+ パスタ + サラダ",
      snack: "プロテイン + バナナ",
    },
    {
      day: "土曜（トレ日）",
      breakfast: "卵3個スクランブル + 全粒粉パン",
      lunch: "外食（なるべく高たんぱくメニュー選択）",
      dinner: "宅食弁当（nosh 高たんぱく）+ 玄米",
      snack: "プロテイン",
    },
    {
      day: "日曜（休息日）",
      breakfast: "プロテインパンケーキ",
      lunch: "自炊：鶏胸肉の作り置き + 玄米 + 野菜",
      dinner: "宅食弁当（Dietician SMALL）+ サラダ",
      snack: "ナッツ + ヨーグルト",
    },
  ],
};

const faqs = [
  {
    q: "筋トレ初心者は食事管理から始めるべき？トレーニングから？",
    a: "理想は同時に始めることですが、どちらか一方なら食事管理からがおすすめです。「筋トレの成果は食事が8割」とも言われ、食事を変えるだけでも体の変化を実感しやすいです。まずはたんぱく質を意識する食生活から始めましょう。",
  },
  {
    q: "食事管理は毎日完璧にしないとダメですか？",
    a: "毎日完璧にする必要はありません。週単位でのPFCバランスがおおむね目標に近ければ十分です。80%の精度で継続することが、100%を目指して3日で挫折するより遥かに効果的です。",
  },
  {
    q: "自炊が苦手でも食事管理はできますか？",
    a: "はい、できます。宅食弁当を活用すれば自炊なしでもPFC管理が可能です。コンビニのサラダチキンや高たんぱく商品も組み合わせれば、料理スキルがなくても十分な食事管理ができます。",
  },
  {
    q: "食事管理にかかる費用はどのくらいですか？",
    a: "自炊中心なら月2-3万円、宅食弁当を1日1食使う場合は月3-5万円、全食宅食弁当だと月6-9万円が目安です。コンビニ食を上手に使えば月3-4万円で管理可能です。無理のない範囲で始めましょう。",
  },
  {
    q: "お酒は飲んでもいいですか？",
    a: "筋トレ効果を最大化するなら控えた方がベストです。アルコールは筋たんぱく質合成を抑制し、テストステロンの分泌を低下させます。ただし、週1-2回の適量（ビール350ml 1-2本程度）であれば大きな影響はないとされています。",
  },
  {
    q: "食事記録アプリは使った方がいいですか？",
    a: "最初の1-2ヶ月は使うことをおすすめします。食べたものを記録することで、自分の食事パターンや不足しがちな栄養素が可視化され、改善点が明確になります。慣れてきたら感覚的に管理できるようになります。MyFitnessPalやあすけんが人気です。",
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

export default function MealPrepBeginner() {
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
            { name: "知識", href: "/#knowledge" },
            { name: "筋トレ初心者の食事管理入門" },
          ]}
        />

        <div className="bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-white rounded-xl p-8 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">筋トレ初心者の食事管理入門</h1>
          <p className="text-gray-300">
            何から始めればいい？
          </p>
        </div>

        <section className="mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            筋トレを始めたけど、食事はどうすればいいの？ そんな初心者の方に向けて、食事管理の基本を分かりやすく解説します。
          </p>
          <p className="text-gray-700 leading-relaxed">
            食事管理と聞くと難しそうに感じますが、3つのステップで始められます。完璧を目指す必要はなく、まずはたんぱく質を意識するところからスタートしましょう。
          </p>
        </section>

        {/* 3 Steps */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            食事管理の3ステップ
          </h2>
          <div className="space-y-6">
            {threeSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#16A34A] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </span>
                  <h3 className="font-bold text-lg text-gray-800">{s.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.desc}</p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-xs text-green-600 font-bold mb-2">ポイント</p>
                  <ul className="space-y-1">
                    {s.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#16A34A] font-bold mt-0.5 flex-shrink-0">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common mistakes */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            初心者がやりがちな失敗5つ
          </h2>
          <div className="space-y-4">
            {commonMistakes.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">NG</span>
                  <h3 className="font-bold text-gray-800">{m.mistake}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{m.detail}</p>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-green-600 font-bold mb-1">改善策</p>
                  <p className="text-sm text-gray-700">{m.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Convenience store tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            コンビニ活用法
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">店舗</th>
                  <th className="py-3 px-4 text-left font-bold">おすすめ高たんぱく商品</th>
                </tr>
              </thead>
              <tbody>
                {convenienceFoods.map((c, i) => (
                  <tr key={c.store} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-gray-700 whitespace-nowrap">{c.store}</td>
                    <td className="py-3 px-4 text-gray-600">{c.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ たんぱく質量は目安です。商品により異なります。
          </p>
        </section>

        {/* Meal delivery for beginners */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            宅食弁当で簡単に始める方法
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              自炊が苦手な初心者にとって、PFC計算済みの宅食弁当は最強の味方です。栄養計算不要で、温めるだけで理想的な食事が摂れます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#F9FAFB] rounded-lg p-4">
                <p className="font-bold text-gray-800 mb-2">初心者におすすめの始め方</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• まず1日1食を宅食弁当に置き換え</li>
                  <li>• 残りの食事はコンビニ+自炊で対応</li>
                  <li>• 慣れてきたら自炊の割合を増やす</li>
                  <li>• プロテインで不足分を補填</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">初心者向けサービス</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• <span className="font-bold">nosh</span>: メニュー豊富で飽きにくい。599円〜</li>
                  <li>• <span className="font-bold">マッスルデリ</span>: 目的別コースで迷わない</li>
                  <li>• <span className="font-bold">Dietician</span>: 管理栄養士監修で安心</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly meal plan */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#16A34A] rounded-full"></span>
            {weeklyPlan.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{weeklyPlan.note}</p>
          <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A1A1A] text-white">
                  <th className="py-3 px-4 text-left font-bold">曜日</th>
                  <th className="py-3 px-4 text-left font-bold">朝食</th>
                  <th className="py-3 px-4 text-left font-bold">昼食</th>
                  <th className="py-3 px-4 text-left font-bold">夕食</th>
                  <th className="py-3 px-4 text-left font-bold">間食</th>
                </tr>
              </thead>
              <tbody>
                {weeklyPlan.days.map((day, i) => (
                  <tr key={day.day} className={i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}>
                    <td className="py-3 px-4 font-bold text-[#16A34A] whitespace-nowrap text-xs">{day.day}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{day.breakfast}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{day.lunch}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{day.dinner}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{day.snack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ 数値は概算です。個人の体格・目標により調整してください。外食日はなるべく高たんぱくメニューを選びましょう。
          </p>
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
            <h2 className="text-xl font-bold mb-3">初心者でも簡単！宅食弁当で食事管理スタート</h2>
            <p className="text-gray-300 text-sm mb-6">PFC計算済みの宅食弁当なら、温めるだけで理想の食事が完成します</p>
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
              { name: "PFCバランス計算", href: "/knowledge/pfc-calculator/" },
              { name: "たんぱく質の摂取量", href: "/knowledge/protein-intake/" },
              { name: "食事タイミング", href: "/knowledge/meal-timing/" },
              { name: "プロテインvs宅食", href: "/knowledge/supplements-vs-meal/" },
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
