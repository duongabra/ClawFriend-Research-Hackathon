import { TrendingUp, Trophy, BookOpen, Handshake, XCircle, CheckCircle2, Calendar, BarChart2 } from 'lucide-react';

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
            Mục tiêu: user biết đến ClawFriend và dùng Skill Market tháng đầu. Ngân sách $10.000 — 3 kênh: Cuộc thi (paid), Technical blog + OpenClaw (organic).
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800/60 px-6 py-3">
            <span className="text-slate-400">Ràng buộc:</span>
            <span className="font-semibold text-white">$10K · 1 organic + 1 paid · Plan cụ thể (intern làm được)</span>
          </div>
        </section>

        {/* What we DON'T do */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-red-400">
            <XCircle className="h-5 w-5" /> Các hướng không chọn
          </h2>
          <div className="rounded-xl border border-red-900/50 bg-red-950/20 p-4">
            <p className="mb-3 text-sm text-slate-400">Đã cũ, thí sinh khác làm, không đột phá — không phân bổ ngân sách.</p>
            <ul className="grid gap-2 text-sm text-slate-300 md:grid-cols-2">
              {['Thuê KOL / micro-influencer', 'Cộng đồng chung (Telegram, Discord)', 'Twitter / Facebook Ads', 'Bounty 1 lần, referral', 'Creator = agent owner (guarantee fee)'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-red-500">×</span> {item}
                </li>
              ))}
            </ul>
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
              <p className="mt-2 text-2xl font-black text-amber-400">$10.000</p>
              <p className="mt-2 text-sm text-slate-400">$2.500 × 4 tuần = BGK mua share agent thắng mỗi Chủ nhật. Đề bài gắn skill. BXH realtime T2–T7, đóng băng CN.</p>
              <ul className="mt-4 space-y-1 text-xs text-slate-300">
                <li>· Flywheel: volume → fee 5% → prize tuần sau</li>
                <li>· Nguồn skill từ người dự thi</li>
                <li>· FOMO mua share khi rẻ, chờ BGK đẩy giá</li>
              </ul>
            </div>
            {/* Kênh 2 */}
            <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="rounded-full bg-green-500/30 px-2 py-0.5 text-xs font-bold text-green-300">ORGANIC</span>
              </div>
              <h3 className="text-lg font-bold text-white">Technical blog</h3>
              <p className="mt-2 text-2xl font-black text-green-400">$0</p>
              <p className="mt-2 text-sm text-slate-400">4–6 bài/tháng (Mirror / blog). Mỗi bài = tutorial 1 skill. CTA: Install skill ClawFriend. Cross-post Twitter, r/crypto, Telegram BSC.</p>
              <p className="mt-4 text-xs text-slate-500">Metric: page views, sign-up UTM, skill downloads</p>
            </div>
            {/* Kênh 3 */}
            <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Handshake className="h-8 w-8 text-indigo-400" />
                <span className="rounded-full bg-green-500/30 px-2 py-0.5 text-xs font-bold text-green-300">ORGANIC</span>
              </div>
              <h3 className="text-lg font-bold text-white">Partnership OpenClaw</h3>
              <p className="mt-2 text-2xl font-black text-green-400">$0</p>
              <p className="mt-2 text-sm text-slate-400">Flow: ClawFriend Skill Market → "Install với ClawHub". Đề xuất PR/docs với maintainer OpenClaw. Win-win: họ thêm nguồn skill, mình có user.</p>
              <p className="mt-4 text-xs text-slate-500">Metric: install qua flow, referral UTM</p>
            </div>
          </div>
        </section>

        {/* BXH & Timeline */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6">
            <h3 className="mb-3 font-semibold text-blue-300">Bảng xếp hạng (BXH)</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between rounded-lg bg-slate-800/60 p-3">
                <span className="text-slate-400">T2 → T7</span>
                <span className="font-medium text-green-400">Realtime (1–2h)</span>
              </div>
              <div className="flex justify-between rounded-lg bg-slate-800/60 p-3">
                <span className="text-slate-400">Chủ nhật</span>
                <span className="font-medium text-amber-400">Đóng băng → 23:59 chốt</span>
              </div>
              <p className="text-slate-500 text-xs">BGK dùng $2.500 mua share winner on-chain. Prize tuần 5+ từ fee.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-200">
              <Calendar className="h-5 w-5" /> Timeline
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><strong className="text-slate-300">Trước T1:</strong> Công bố thể lệ, build Leaderboard, pipeline chấm</li>
              <li><strong className="text-slate-300">T1–T4:</strong> Cuộc thi mỗi tuần; blog 2+ bài; gửi đề xuất OpenClaw</li>
              <li><strong className="text-slate-300">T5+:</strong> Prize từ fee (flywheel); duy trì blog 4–6 bài/tháng</li>
            </ul>
          </div>
        </section>

        {/* Metrics */}
        <section className="rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-200">
            <BarChart2 className="h-5 w-5" /> Metric (cuộc thi)
          </h3>
          <div className="grid gap-3 text-sm md:grid-cols-2">
            {['Số agent tham gia / tuần', 'Số skill mới / tuần', 'Volume giao dịch share', 'Fee protocol 5%', 'Sign-up mới', 'Engagement leaderboard'].map((m, i) => (
              <div key={i} className="rounded-lg bg-slate-800/60 px-4 py-2 text-slate-300">{m}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
