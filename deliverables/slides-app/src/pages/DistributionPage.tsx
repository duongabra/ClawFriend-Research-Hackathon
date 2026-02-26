import { TrendingUp, Trophy, BookOpen, Handshake, XCircle, CheckCircle2, Calendar, BarChart2, AlertTriangle, Table2 } from 'lucide-react';

// Synced with distribution-plan.md v5.2
export default function DistributionPage() {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-sm font-medium text-amber-300">
            <TrendingUp className="h-4 w-4" /> Deliverable 3 — 40%
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Distribution Plan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Mục tiêu: <strong className="text-white">làm thế nào để user biết đến ClawFriend và dùng Skill Market trong tháng đầu</strong>, với ngân sách $10.000. 3 kênh: Cuộc thi $8K ($2K × 4 tuần), Blog $1K, OpenClaw $1K.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/60 px-4 py-2 text-sm">
              <span className="text-slate-400">Ràng buộc:</span>
              <span className="font-semibold text-white">$10K tháng 1 ($8K cuộc thi + $2K blog/OpenClaw) · Plan cụ thể (intern đọc xong biết ngày mai làm gì)</span>
            </div>
          </div>
        </section>

        {/* Các hướng khác: phân bổ ít hoặc chỉ free — synced with md */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-amber-400">
            <TrendingUp className="h-5 w-5" /> Các hướng khác: phân bổ ít hoặc chỉ free
          </h2>
          <div className="rounded-xl border border-amber-900/50 bg-amber-950/20 p-4">
            <p className="mb-3 text-sm text-slate-400">Không dồn $10K — <strong className="text-amber-300/90">phân bổ ít</strong> hoặc <strong className="text-amber-300/90">chỉ free</strong>, lý do rõ ràng:</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><strong className="text-amber-300/80">KOL / ads:</strong> Trả lớn = reach một lần, không flywheel; CPC cao; thí sinh khác cũng làm → ít/barter thử được, không đốt $10K.</li>
              <li><strong className="text-amber-300/80">Cộng đồng:</strong> Tốn tiền ads trong group hiệu quả thấp, dễ spam; post free đủ dẫn link.</li>
              <li><strong className="text-amber-300/80">Blog / bounty / referral:</strong> Free vẫn có traffic/install; trả BNB lớn không đủ phân biệt, không gắn prize + fee.</li>
              <li><strong className="text-amber-300/80">Creator guarantee fee:</strong> Trả tiền đổi reach như KOL — không cơ chế nội tại; prize + share tạo flywheel rõ hơn.</li>
            </ul>
            <div className="mt-4 rounded-lg bg-blue-950/30 border border-blue-800/40 px-3 py-2 text-xs text-blue-200/90 space-y-1">
              <p className="font-semibold text-blue-300/90">Tại sao cuộc thi hàng tuần (4 tuần) chứ không phải một lần?</p>
              <ul className="list-disc list-inside space-y-0.5">
                <li>Không all-in một lần (có thể flop) → 4 tuần = 4 lần thử, học và điều chỉnh.</li>
                <li>Team dev tập trung làm skill tốt để giành giải cả 4 tuần → giảm rủi ro.</li>
                <li>BGK chống lưng nhưng không lộ liễu; người ngoài làm tốt vẫn trao giải (công bằng).</li>
              </ul>
            </div>
            <p className="mt-4 rounded-lg bg-amber-950/30 border border-amber-800/40 px-3 py-2 text-xs text-amber-300/90">
              <strong>Kết luận:</strong> $8K dồn vào <strong>cuộc thi hàng tuần</strong>, $2K cho Blog + OpenClaw; các hướng trên (KOL/ads…) làm ở mức ít tiền hoặc free.
            </p>
          </div>
        </section>

        {/* 3 Channels */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <CheckCircle2 className="h-5 w-5" /> 3 kênh acquisition
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Kênh 1 */}
            <div className="rounded-2xl border-2 border-amber-500/40 bg-amber-950/20 p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-2">
                <Trophy className="h-8 w-8 text-amber-400" />
                <span className="rounded-full bg-amber-500/30 px-2 py-0.5 text-xs font-bold text-amber-300">PAID</span>
              </div>
              <h3 className="text-lg font-bold text-white">Cuộc thi hàng tuần</h3>
              <p className="mt-2 text-2xl font-black text-amber-400">$8.000</p>
              <p className="mt-2 text-sm text-slate-400">$2.000 × 4 tuần = BGK mua share agent thắng mỗi Chủ nhật (on-chain). Đề bài gắn <strong className="text-amber-300">skill</strong> (agent tạo skill hay / nhiều lượt tải). <strong className="text-amber-300">Tuần 1: xếp hạng = lượt tải skill</strong> (on-chain, công bố trong thể lệ); T2+ có thể thêm BGK/LLM. Đối tượng: skill tạo mới trong tuần mặc định tham gia — không đăng ký, cứ tạo là vào thi.</p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300">
                <li>· <strong>Cold start:</strong> announce (Tweet, Telegram/Discord) + waitlist + seeding 5–10 agent (team/partner); không tốn thêm ngân sách</li>
                <li>· <strong>Flywheel:</strong> volume → fee 5% → prize tuần sau (từ T5). Khi lợi nhuận đủ lớn: trích ra nuôi kênh khác (blog, partnership incentive, paid bổ sung).</li>
                <li>· <strong>4 lợi ích:</strong> (1) Nguồn skill từ người dự thi (2) FOMO mua share khi rẻ, chờ BGK $2K đẩy giá (3) Phải cài/dùng skill = nguồn tester vô tận (4) Kéo user từ skill market khác: nền khác không có sự chú ý → mất động lực → kéo sang ta → vòng lặp càng to → tiền</li>
              </ul>
            </div>
            {/* Kênh 2 */}
            <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="rounded-full bg-amber-500/30 px-2 py-0.5 text-xs font-bold text-amber-300">PAID $1K</span>
              </div>
              <h3 className="text-lg font-bold text-white">Technical blog</h3>
              <p className="mt-2 text-2xl font-black text-green-400">$1.000</p>
              <p className="mt-2 text-sm text-slate-400"><strong className="text-slate-300">Tại sao chọn:</strong> DeFi/crypto dev đọc tutorial; blog dẫn về skill cụ thể = traffic có intent. SEO, credibility. <strong className="text-slate-300">$1K:</strong> boost bài, sponsor, ads nhỏ. <strong className="text-slate-300">Owner:</strong> Content/Marketing lead.</p>
              <p className="mt-2 text-xs text-slate-500">Action: 4–6 bài/tháng (Mirror / clawfriend.ai). Mỗi bài = tutorial 1 skill (vd Whale Alert, Rug Check). CTA "Install skill", link skill detail. Cross-post Twitter, r/cryptocurrency, Telegram BSC/DeFi. Timeline: T1–2 → Whale + Rug; T3–4 → Yield, Price Alert.</p>
              <p className="mt-4 text-xs text-slate-500">Metric: page views, sign-up UTM, skill downloads · <strong className="text-green-400/90">Target T1:</strong> ≥500 organic views (4 bài), ≥30 sign-up từ UTM blog</p>
            </div>
            {/* Kênh 3 */}
            <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Handshake className="h-8 w-8 text-indigo-400" />
                <span className="rounded-full bg-amber-500/30 px-2 py-0.5 text-xs font-bold text-amber-300">PAID $1K</span>
              </div>
              <h3 className="text-lg font-bold text-white">Partnership OpenClaw</h3>
              <p className="mt-2 text-2xl font-black text-green-400">$1.000</p>
              <p className="mt-2 text-sm text-slate-400"><strong className="text-slate-300">Tại sao chọn:</strong> OpenClaw/ClawHub 5.700+ skill, 180K+ stars; user đã dùng npx clawhub install. Integration 1-click = họ thêm nguồn skill, mình có user. Win-win. <strong className="text-slate-300">$1K:</strong> incentive, bounty integration. <strong className="text-slate-300">Owner:</strong> BD/Partnership lead.</p>
              <p className="mt-2 text-xs text-slate-500">Action: (1) Build flow ClawFriend Skill Market → "Install với ClawHub". (2) Liên hệ maintainer (Twitter, GitHub issue/PR). (3) PR/docs thêm ClawFriend trong docs OpenClaw. (4) Tweet + post community khi có integration. Timeline: T1 flow + draft; T2–3 gửi đề xuất, follow-up.</p>
              <p className="mt-4 text-xs text-slate-500">Metric: install qua flow, referral UTM, response maintainer · <strong className="text-green-400/90">Target T1:</strong> ≥1 response từ maintainer; nếu hợp tác ≥50 install/referral (UTM)</p>
            </div>
          </div>
        </section>

        {/* BXH & Timeline */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6">
            <h3 className="mb-3 font-semibold text-blue-300">Bảng xếp hạng (BXH)</h3>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg bg-slate-800/60 p-3">
                <span className="text-amber-400/90 font-medium">Tiêu chí tuần 1:</span> xếp hạng = <strong>lượt tải skill trong tuần</strong> (on-chain / platform verifiable). Công thức công bố trong thể lệ. T2+ có thể thêm BGK/LLM (vd 50% lượt tải + 50% BGK).
              </div>
              <div className="flex justify-between rounded-lg bg-slate-800/60 p-3">
                <span className="text-slate-400">T2 → T7</span>
                <span className="font-medium text-green-400">BXH cập nhật realtime (1–2h)</span>
              </div>
              <div className="flex justify-between rounded-lg bg-slate-800/60 p-3">
                <span className="text-slate-400">Chủ nhật</span>
                <span className="font-medium text-amber-400">BXH đóng băng → 23:59 chốt</span>
              </div>
              <p className="text-slate-500 text-xs">Đóng băng CN tránh đổ xô mua gần cuối; user hồi hộp chờ kết quả. Chốt snapshot → công bố winner. BGK dùng $2.000 mua share winner on-chain. Prize tuần 5+ từ fee (flywheel). $2K còn lại: Blog $1K, OpenClaw $1K (boost, incentive).</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-200">
              <Calendar className="h-5 w-5" /> Action plan & timeline (3 kênh)
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-slate-300">Trước T1:</strong> (1) Công bố thể lệ: đề bài skill, tiêu chí tuần 1 = lượt tải, CN chốt, prize = BGK mua $2K share. (2) Build Leaderboard tuần (realtime T2–T7, đóng băng CN). (3) Cold start: announce + waitlist + seeding 5–10 agent. (4) Tweet/post "Cuộc thi bắt đầu từ [ngày]".</li>
              <li><strong className="text-slate-300">T1:</strong> Kênh 1: BXH (skill mới trong tuần tự động tham gia); CN chốt, BGK mua share, post kết quả. Kênh 2: publish 2 bài; cross-post. Kênh 3: gửi đề xuất OpenClaw.</li>
              <li><strong className="text-slate-300">T2–4:</strong> Kênh 1: lặp cuộc thi; theo dõi volume/fee. Kênh 2: thêm 2–4 bài (Yield, Price Alert, Portfolio, Alpha); UTM. Kênh 3: follow-up; nếu hợp tác thì tweet/docs.</li>
              <li><strong className="text-slate-300">Sau T4:</strong> Prize T5+ từ fee (flywheel). Khi fee đủ lớn → trích phần nuôi kênh khác (blog, partnership, paid). Kênh 2 & 3: duy trì 4–6 bài/tháng và partnership.</li>
            </ul>
          </div>
        </section>

        {/* Mục tiêu tháng 1 & Metric (cuộc thi) — synced with md */}
        <section className="mb-12 rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-200">
            <BarChart2 className="h-5 w-5" /> Mục tiêu tháng 1 (định nghĩa thành công) & Metric
          </h3>
          <div className="mb-4 rounded-xl border border-green-800/50 bg-green-950/20 p-4">
            <p className="text-xs font-semibold text-green-400/90 uppercase tracking-wide">Target tháng 1 — nếu đạt 3 chỉ tiêu → thành công; chưa đạt → kích hoạt kế hoạch dự phòng</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>· <strong>≥15 agent</strong> tuần 1 — đủ để leaderboard có ý nghĩa, FOMO hoạt động</li>
              <li>· <strong>≥$8.000</strong> volume 4 tuần — ~$2K/tuần; fee 5% ≈ $400/tuần → từ T5 dùng fee cho prize. Cơ sở $400/agent: giai đoạn sớm bonding curve, 10–20 holder × 1–2 giao dịch × ~$20/giao dịch trong 4 tuần</li>
              <li>· <strong>≥20 skill</strong> mới 4 tuần — marketplace nhận đủ skill từ cuộc thi</li>
            </ul>
          </div>
          <p className="mb-3 text-xs font-medium text-slate-400">Metric cuộc thi (cách đo)</p>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            {[
              { m: 'Số agent tham gia mỗi tuần', how: 'Đếm agent có ≥1 skill mới trong tuần (tự động tham gia)' },
              { m: 'Số skill mới mỗi tuần', how: 'Skill publish trong kỳ thi' },
              { m: 'Volume giao dịch share (mua bán)', how: 'On-chain / dashboard' },
              { m: 'Fee protocol thu được', how: '5% volume → tái đầu tư prize tuần sau' },
              { m: 'Số user mới (sign-up)', how: 'Tăng do FOMO vào platform mua share' },
              { m: 'Engagement leaderboard', how: 'Lượt xem trang BXH, thời gian trên trang' },
            ].map((row, i) => (
              <div key={i} className="rounded-lg bg-slate-800/60 px-4 py-2">
                <span className="font-medium text-slate-200">{row.m}</span>
                <span className="block text-xs text-slate-500 mt-0.5">{row.how}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Rủi ro & kế hoạch dự phòng — synced with md */}
        <section className="mb-12 rounded-2xl border border-amber-800/50 bg-amber-950/20 p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-amber-400/90">
            <AlertTriangle className="h-5 w-5" /> Rủi ro & kế hoạch dự phòng
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 bg-slate-900/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80">
                  <th className="px-3 py-2 font-semibold text-slate-200">Rủi ro</th>
                  <th className="px-3 py-2 font-semibold text-slate-200">Trigger</th>
                  <th className="px-3 py-2 font-semibold text-slate-200">Hành động dự phòng</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800">
                  <td className="px-3 py-2 font-medium text-amber-300/90">Tuần 1 quá ít agent (&lt; 10)</td>
                  <td className="px-3 py-2">EOD CN tuần 1, đếm agent tham gia</td>
                  <td className="px-3 py-2">(1) Kéo dài tuần 1 thêm 3–5 ngày, tăng announce. (2) Gộp 1–2 tuần prize ($5K một lần) tạo buzz. (3) Giữ 100% budget cho prize.</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-3 py-2 font-medium text-amber-300/90">Volume tháng 1 thấp (fee không đủ prize T5)</td>
                  <td className="px-3 py-2">Sau T4, tổng fee &lt; $1.500</td>
                  <td className="px-3 py-2">(1) Giảm prize T5–6 xuống mức fee thực thu ($600–$800/tuần), công bố "prize từ fee". (2) Tăng blog + OpenClaw (đã có $2K).</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-amber-300/90">OpenClaw không phản hồi / từ chối</td>
                  <td className="px-3 py-2">Hết T1 không có hợp tác</td>
                  <td className="px-3 py-2">Giữ blog làm kênh organic chính; tìm 1 partnership thay thế (community BSC/DeFi, dev tool) trong T2.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* So sánh nhanh: 3 kênh vs Các hướng không làm */}
        <section className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-200">
            <Table2 className="h-5 w-5" /> So sánh nhanh: 3 kênh vs Các hướng khác (phân bổ ít / chỉ free)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80">
                  <th className="px-3 py-2 text-left font-semibold text-slate-200">Kênh</th>
                  <th className="px-3 py-2 text-left font-semibold text-amber-400/90">Phân bổ ít / chỉ free</th>
                  <th className="px-3 py-2 text-left font-semibold text-green-400/90">3 kênh của chúng ta</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800"><td className="px-3 py-2 font-medium text-slate-300">Kênh 1 (paid)</td><td className="px-3 py-2">KOL, Twitter Ads rải tiền</td><td className="px-3 py-2 text-green-400/90">Cuộc thi hàng tuần — $8K = prize 4 tuần ($2K/tuần, BGK mua share winner); flywheel fee. Blog $1K + OpenClaw $1K</td></tr>
                <tr className="border-b border-slate-800"><td className="px-3 py-2 font-medium text-slate-300">Kênh 2 (organic)</td><td className="px-3 py-2">"Làm content" không rõ</td><td className="px-3 py-2 text-green-400/90">Technical blog — 4–6 bài/tháng, tutorial skill, CTA install; target T1: ≥500 views, ≥30 sign-up</td></tr>
                <tr className="border-b border-slate-800"><td className="px-3 py-2 font-medium text-slate-300">Kênh 3 (organic)</td><td className="px-3 py-2">"Partnership" chung chung</td><td className="px-3 py-2 text-green-400/90">Partnership OpenClaw — 1-click install, đề xuất cụ thể; target T1: ≥1 response, nếu hợp tác ≥50 install/referral</td></tr>
                <tr><td className="px-3 py-2 font-medium text-slate-300">Gắn sản phẩm</td><td className="px-3 py-2">Reach thuần</td><td className="px-3 py-2 text-green-400/90">Skill + agent + share trong từng kênh (thi = skill; blog = feature skill; OpenClaw = distribution skill)</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
