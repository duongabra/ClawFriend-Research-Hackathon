import { BarChart3, Wallet, ShieldAlert, Coins, Bell, LayoutGrid, TrendingUp, Sparkles } from 'lucide-react';

const SKILLS = [
  { name: 'Real-time Whale / Smart Money Tracker', icon: Wallet, user: 'Trader crypto/DeFi $5K–$100K', problem: 'Mất 2–3h/ngày theo dõi ví whale; bỏ lỡ giao dịch.', alt: 'Nansen $99–$999/tháng; Whale Alert 2.5M+ followers', solution: 'Agent theo dõi 500+ ví BSC; alert 30–60s khi whale move > ngưỡng.', visibility: 'Public free → holder-gated (filter nâng cao)', proof: 'Nansen $99+/tháng; Whale Alert 2.5M followers = demand.' },
  { name: 'Rug Pull / Scam Token Detector (BSC)', icon: ShieldAlert, user: 'Trader meme/new token BSC', problem: 'Vào token lạ dễ rug/honeypot.', alt: 'RugChecker, TokenSpy, Token Sniffer', solution: 'Quét contract BSC: liquidity lock, mint, holder concentration → risk score.', visibility: 'Public 5 lần/ngày + holder-gated unlimited', proof: 'Token Sniffer 30K+ contract/ngày; Reddit/Telegram "rug check".' },
  { name: 'DeFi Yield / APY So sánh (BSC)', icon: Coins, user: 'Holder BNB/stablecoin muốn earn yield', problem: 'APR/APY mỗi protocol khác nhau; so tay tốn thời gian.', alt: 'YO Protocol $1M+ earn; maxAPY 9 chain', solution: 'Aggregate APY BSC pools; chuẩn hóa; gợi ý top 3–5 strategy.', visibility: 'Public bảng cơ bản + holder-gated real-time', proof: 'YO $1M+ volume 2 tuần; maxAPY nghìn strategy.' },
  { name: 'Token Price Alert (BSC)', icon: Bell, user: 'Trader theo dõi 5–20 token', problem: 'Thị trường 24/7; theo dõi thủ công bỏ lỡ.', alt: 'Drops Bot, TechnicalPing, TokenAlertsBot', solution: 'Monitor giá BSC DEX; user set ngưỡng; alert Telegram/Twitter.', visibility: 'Public 1–3 alert + holder-gated unlimited', proof: 'Nhiều bot Telegram price alert; Bitquery use case.' },
  { name: 'Portfolio Tracker đa ví (BSC)', icon: LayoutGrid, user: 'Nhiều ví; team cần tổng PnL', problem: 'Balance rải nhiều ví, tổng hợp thủ công.', alt: 'DeBank, Zapper, Arkham', solution: 'Aggregate balance + PnL theo list địa chỉ BSC.', visibility: 'Public 1 ví + holder-gated đa ví', proof: 'DeBank, Zapper dùng rộng rãi.' },
  { name: 'Alpha / Sentiment từ Social', icon: TrendingUp, user: 'Trader tin alpha từ KOL', problem: 'Quá nhiều noise; bỏ lỡ mention sớm.', alt: 'LunarCrush, Santiment', solution: 'API Twitter: list KOL, mention token, sentiment; alert volume tăng.', visibility: 'Chủ yếu holder-gated', proof: 'LunarCrush, Santiment monetize; spec Alpha Hunting.' },
  { name: 'New Token / Listing Alert (BSC DEX)', icon: Sparkles, user: 'Trader săn token mới list', problem: 'Token mới list liên tục; không filter theo tiêu chí.', alt: 'DexScreener, DexTools', solution: 'Monitor pool mới BSC; filter liquidity, holder; alert khi thỏa điều kiện.', visibility: 'Public 1 filter + holder-gated nhiều filter', proof: 'DexScreener, DexTools lượng dùng lớn.' },
];

export default function SkillsPage() {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-950/40 px-4 py-1.5 text-sm font-medium text-indigo-300">
            <BarChart3 className="h-4 w-4" /> Deliverable 2 — 25%
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Skill Research
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            7 skill Skill Market nên có: target user, vấn đề, alternative, bằng chứng demand. Public free → holder-gated theo spec.
          </p>
        </section>

        {/* Skill cards */}
        <div className="space-y-8">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 shadow-lg transition hover:border-indigo-500/30"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  <skill.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{skill.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">Target: {skill.user}</p>
                </div>
              </div>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-lg bg-red-950/20 p-3 border border-red-900/30">
                  <span className="text-red-400/90 font-medium">Vấn đề</span>
                  <p className="mt-1 text-slate-300">{skill.problem}</p>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3">
                  <span className="text-slate-500 font-medium">Alternative</span>
                  <p className="mt-1 text-slate-300">{skill.alt}</p>
                </div>
                <div className="rounded-lg bg-blue-950/30 p-3 border border-blue-800/40 md:col-span-2">
                  <span className="text-blue-400/90 font-medium">Skill giải quyết</span>
                  <p className="mt-1 text-slate-300">{skill.solution}</p>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3">
                  <span className="text-slate-500 font-medium">Visibility & monetization</span>
                  <p className="mt-1 text-slate-300">{skill.visibility}</p>
                </div>
                <div className="rounded-lg bg-green-950/20 p-3 border border-green-900/30">
                  <span className="text-green-400/90 font-medium">Bằng chứng demand</span>
                  <p className="mt-1 text-slate-300">{skill.proof}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <section className="mt-12 rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">Tóm tắt visibility</h2>
          <p className="text-slate-300 text-sm">
            Whale Tracker, Rug Detector, Yield/APY, Price Alert, Portfolio, New Token: Public free (lead magnet) → holder-gated (tính năng mạnh). Alpha/Sentiment: chủ yếu holder-gated (alpha dễ copy).
          </p>
        </section>
      </div>
    </div>
  );
}
