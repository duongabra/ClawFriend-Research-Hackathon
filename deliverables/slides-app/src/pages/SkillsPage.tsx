import { BarChart3, Wallet, ShieldAlert, Coins, Bell, MessageSquare, TrendingUp, Pill, Cpu, FileText, Trophy } from 'lucide-react';

// 10 skill xuất sắc nhất cho BGK (ưu tiên triển khai / pitch)
// Optional techNote: X API / OAuth risk + plan (skill-research v3)
const TOP_10_SKILLS = [
  { name: 'Real-time Whale / Smart Money Tracker', icon: Wallet, topic: 'Scrypto', user: 'Trader crypto/DeFi $5K–$100K', problem: 'Mất 2–3h/ngày theo dõi ví whale; bỏ lỡ giao dịch.', alt: 'Nansen $99–$999/tháng; Whale Alert 2.5M+ followers', solution: 'Agent theo dõi 500+ ví BSC; alert 30–60s khi whale move > ngưỡng.', visibility: 'Public free → holder-gated (filter nâng cao)', proof: 'Nansen $99+/tháng; Whale Alert 2.5M followers = demand.', techNote: '' },
  { name: 'Rug Pull / Scam Token Detector (BSC)', icon: ShieldAlert, topic: 'Scrypto', user: 'Trader meme/new token BSC', problem: 'Vào token lạ dễ rug/honeypot.', alt: 'RugChecker, TokenSpy, Token Sniffer', solution: 'Quét contract BSC: liquidity lock, mint, holder concentration → risk score.', visibility: 'Public 5 lần/ngày + holder-gated unlimited', proof: 'Token Sniffer 30K+ contract/ngày; Reddit/Telegram "rug check".', techNote: '' },
  { name: 'DeFi Yield Optimizer / APY So sánh (BSC)', icon: Coins, topic: 'DeFi & Yield', user: 'Holder BNB/stablecoin muốn earn yield', problem: 'APR/APY mỗi protocol khác nhau; so tay tốn thời gian.', alt: 'YO Protocol $1M+ earn; maxAPY 9 chain', solution: 'Aggregate APY BSC pools; chuẩn hóa; gợi ý top 3–5 strategy.', visibility: 'Public bảng cơ bản + holder-gated real-time', proof: 'YO $1M+ volume 2 tuần; maxAPY nghìn strategy.', techNote: '' },
  { name: 'Alpha / Sentiment từ Social (Twitter + Telegram)', icon: TrendingUp, topic: 'Alpha & Social', user: 'Trader tin alpha từ KOL', problem: 'Quá nhiều noise; bỏ lỡ mention sớm.', alt: 'LunarCrush, Santiment', solution: 'API Twitter: list KOL, mention token, sentiment; alert volume tăng.', visibility: 'Chủ yếu holder-gated', proof: 'LunarCrush, Santiment monetize; spec Alpha Hunting.', techNote: 'X API Basic ~$100/tháng, Pro $5K. Plan: bắt đầu Basic → scale khi có revenue holder-gated.' },
  { name: 'Token Price Alert (BSC + đa chain)', icon: Bell, topic: 'Crypto Alert', user: 'Trader theo dõi 5–20 token', problem: 'Thị trường 24/7; theo dõi thủ công bỏ lỡ.', alt: 'Drops Bot, TechnicalPing, TokenAlertsBot', solution: 'Monitor giá BSC DEX; user set ngưỡng; alert Telegram/Twitter.', visibility: 'Public 1–3 alert + holder-gated unlimited', proof: 'Nhiều bot Telegram price alert; Bitquery use case.', techNote: '' },
  { name: 'KOL / Influencer Track & Mention Alert', icon: MessageSquare, topic: 'Alpha & Social', user: 'Trader theo dõi 10–50 KOL', problem: 'Mention quan trọng chìm trong feed; bỏ lỡ tín hiệu.', alt: 'TweetDeck, Nansen/Token Metrics', solution: 'Theo dõi list handle; detect mention token; alert khi có mention + link tweet.', visibility: 'Public 3–5 KOL + holder-gated list lớn', proof: '"When did X mention Y" rất phổ biến; KOL call move giá.', techNote: 'X API Basic ~$100/tháng, enterprise $5K. Plan: bắt đầu Basic → scale khi revenue holder-gated (list KOL lớn).' },
  { name: 'Medication / Nhắc uống thuốc thông minh', icon: Pill, topic: 'Sức khỏe', user: 'Người uống thuốc định kỳ (cao huyết áp, vitamin)', problem: 'Hay quên; app nhắc đơn giản không theo bữa ăn.', alt: 'Medisafe, Mango Health', solution: 'Nhắc theo lịch (sáng/trưa/tối, trước/sau ăn); log "đã uống"; gợi ý tương tác thuốc.', visibility: 'Public 1–3 thuốc + holder-gated nhiều + báo cáo', proof: 'Medisafe 10M+ download; WHO/CDC nhấn mạnh adherence.', techNote: '' },
  { name: 'Macro Indicator Digest (CPI, lãi suất, việc làm)', icon: BarChart3, topic: 'Vĩ mô', user: 'Trader/investor quan tâm vĩ mô', problem: 'Số liệu ra rải; khó so actual vs consensus nhanh.', alt: 'Investing.com, Forexlive, Bloomberg', solution: 'Tóm tắt release CPI/NFP/FOMC: số vs consensus, hawkish/dovish.', visibility: 'Public top 3 event + holder-gated full + alert', proof: 'Forex/crypto react mạnh macro; Bloomberg bán data.', techNote: '' },
  { name: 'No-code Workflow Builder (kết nối app + trigger)', icon: Cpu, topic: 'AI / Bot', user: 'User không code; muốn "khi A thì B"', problem: 'Zapier/Make đắt khi nhiều task.', alt: 'Zapier, Make, n8n', solution: 'Mô tả bằng ngôn ngữ tự nhiên; agent gợi ý trigger → action.', visibility: 'Public 1 workflow, 50 run + holder-gated unlimited', proof: 'Zapier valuation tỷ USD; no-code trend.', techNote: 'Risk: OAuth/API từng app, rate limit; holder-gated unlimited run cần ước lượng cost backend.' },
  { name: 'Meeting Notes → Tasks (biên bản → action items)', icon: FileText, topic: 'Tin tức & Productivity', user: 'PM, nhân viên văn phòng', problem: 'Extract action items thủ công tốn thời gian.', alt: 'Otter.ai, Fireflies, Notion AI', solution: 'Upload transcript/paste notes; agent extract task + owner + deadline.', visibility: 'Public 5 meeting/tháng + holder-gated unlimited + integration', proof: 'Otter, Fireflies thu phí; meeting fatigue.', techNote: '' },
];

// 10 chủ đề × 2 skill = 20 skill (tên ngắn cho bảng)
const TOPICS_AND_SKILLS: { topic: string; skills: [string, string] }[] = [
  { topic: '1. Scrypto / Crypto (BSC)', skills: ['Whale / Smart Money Tracker', 'Rug Pull / Scam Detector'] },
  { topic: '2. DeFi & Yield', skills: ['DeFi Yield / APY So sánh', 'Portfolio Tracker đa ví'] },
  { topic: '3. Crypto Alert & Discovery', skills: ['Token Price Alert', 'New Token / Listing Alert'] },
  { topic: '4. Alpha & Social', skills: ['Alpha / Sentiment từ Social', 'KOL Mention Alert'] },
  { topic: '5. Sức khỏe', skills: ['Health Metrics Digest', 'Medication / Nhắc uống thuốc'] },
  { topic: '6. Vĩ mô', skills: ['Macro Indicator Digest', 'Fed / ECB Calendar'] },
  { topic: '7. Thể thao', skills: ['Match Result & Highlight Summary', 'Fantasy / Tip Assistant'] },
  { topic: '8. AI / Bot', skills: ['No-code Workflow Builder', 'Code Review / Doc from Repo'] },
  { topic: '9. Công nghệ', skills: ['Tech News Digest by Stack', 'Changelog / Release Summarizer'] },
  { topic: '10. Tin tức & Productivity', skills: ['News Summarizer by Topic', 'Meeting Notes → Tasks'] },
];

export default function SkillsPage() {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero — cho BGK */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/40 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Trophy className="h-4 w-4" /> Đề xuất cho BGK
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Skill Research — 20 skill, 10 chủ đề
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            10 chủ đề: Scrypto, DeFi, Crypto Alert, Alpha & Social, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, Tin tức & Productivity. Mỗi skill có bằng chứng demand; Public free → holder-gated theo spec.
          </p>
        </section>

        {/* 10 skill xuất sắc nhất — nổi bật cho BGK */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-amber-400">
            <Trophy className="h-5 w-5" /> 10 skill xuất sắc nhất (ưu tiên triển khai / pitch)
          </h2>
          <div className="space-y-8">
            {TOP_10_SKILLS.map((skill, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-500/20 bg-slate-900/40 p-6 shadow-lg transition hover:border-amber-500/40"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="rounded bg-amber-950/60 px-2 py-0.5 text-xs font-mono text-amber-400">#{i + 1}</span>
                    <h2 className="mt-1 text-lg font-bold text-white">{skill.name}</h2>
                    <p className="mt-1 text-sm text-slate-500">Chủ đề: {skill.topic} · Target: {skill.user}</p>
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
                  {skill.techNote ? (
                    <div className="rounded-lg bg-amber-950/20 p-3 border border-amber-800/40 md:col-span-2">
                      <span className="text-amber-400/90 font-medium">Tech / Plan</span>
                      <p className="mt-1 text-slate-300 text-xs">{skill.techNote}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 20 skill theo 10 chủ đề — tóm tắt */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">20 skill theo 10 chủ đề (tóm tắt)</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/40">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60">
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">Chủ đề</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">Skill 1</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">Skill 2</th>
                </tr>
              </thead>
              <tbody>
                {TOPICS_AND_SKILLS.map((row, i) => (
                  <tr key={i} className="border-b border-slate-800 last:border-0">
                    <td className="px-4 py-3 font-medium text-blue-400/90">{row.topic}</td>
                    <td className="px-4 py-3 text-slate-300">{row.skills[0]}</td>
                    <td className="px-4 py-3 text-slate-300">{row.skills[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tóm tắt visibility */}
        <section className="rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">Tóm tắt visibility (cho BGK)</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Phần lớn skill: <strong className="text-blue-400">Public free</strong> (lead magnet, 1–5 lần/ngày hoặc 1 ví, 1 filter) → <strong className="text-green-400">Holder-gated</strong> (unlimited, real-time, nhiều filter, đa ví). Alpha/Sentiment chủ yếu holder-gated (alpha dễ copy). <strong className="text-purple-400">Share model</strong> thay subscription (Nansen/Zapier/Otter mô hình trả phí; ClawFriend = hold share để access).
          </p>
        </section>
      </div>
    </div>
  );
}
