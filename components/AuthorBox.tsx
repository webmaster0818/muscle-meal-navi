export default function AuthorBox() {
  return (
    <div className="border border-gray-700 bg-[#222] rounded-lg p-6 mt-10">
      <p className="text-xs font-bold text-[#16A34A] tracking-wider mb-4">
        この記事の監修者
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 border-2 border-[#16A34A] flex items-center justify-center text-[#16A34A] text-xl font-bold shrink-0">
          田
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-base mb-1">
            田中 健太
            <span className="text-xs font-normal text-gray-400 ml-2">（たなか けんた）</span>
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#16A34A] text-[#16A34A]">
              NSCA-CPT認定パーソナルトレーナー
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#16A34A] text-[#16A34A]">
              管理栄養士
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#16A34A] text-[#16A34A]">
              ボディメイク歴10年
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            パーソナルトレーナーとして500人以上の食事指導を実施。自身も10年以上のトレーニング経験を持ち、宅配弁当は20社以上を実食比較しています。
          </p>
        </div>
      </div>
    </div>
  );
}
