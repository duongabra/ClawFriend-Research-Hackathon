import { BarChart3, Wallet, ShieldAlert, Coins, Bell, MessageSquare, TrendingUp, Pill, Cpu, FileText, Trophy } from 'lucide-react';

// Synced with skill-research.md v3.0 — 10 skill xuất sắc nhất (đề xuất ưu tiên)
const TOP_10_SKILLS = [
  { name: 'Real-time Whale / Smart Money Tracker', icon: Wallet, topic: 'Scrypto', user: 'Trader crypto/DeFi, portfolio $5K–$100K, trade 3–5 lần/tuần; cân nhắc Nansen/Arkham nhưng thấy đắt.', problem: 'Mất 2–3h/ngày theo dõi ví whale thủ công; bỏ lỡ giao dịch lớn hoặc vào/ra muộn so smart money.', alt: 'Nansen $99–$999/tháng; Whale Alert 2.5M+ followers', solution: 'Agent theo dõi 500+ ví whale BSC; alert 30–60s khi whale move > ngưỡng (vd $50K); địa chỉ, token, khối lượng.', visibility: 'Public free → holder-gated (filter nâng cao). Share model thay Nansen $99+/tháng.', proof: 'Nansen $99–$999/tháng = demand; Whale Alert 2.5M+ followers, ~500K retweet/tháng.', techNote: '', reason: 'Demand đã validate (Nansen, Whale Alert); core use case BSC; public → holder-gated rõ.' },
  { name: 'Rug Pull / Scam Token Detector (BSC)', icon: ShieldAlert, topic: 'Scrypto', user: 'Trader meme/new token BSC, portfolio $1K–$50K; sợ honeypot/rug.', problem: 'Không biết đọc contract; vào token lạ dễ dính rug/honeypot.', alt: 'RugChecker, TokenSpy, Token Sniffer, RugProofAI', solution: 'Quét contract BSC: liquidity lock, mint, holder concentration → risk score + giải thích ngắn. Gửi contract → kết quả vài chục giây.', visibility: 'Public 5 lần quét/ngày; holder-gated unlimited + alert token mới đạt ngưỡng risk.', proof: 'Nhiều tool rug = thị trường validate; Token Sniffer 30K+ contract/ngày, 50–75% scam; Reddit/Telegram "rug check".', techNote: '', reason: 'Pain point cao; nhiều tool trả phí = thị trường có sẵn; lead magnet 5 lần/ngày → drive share.' },
  { name: 'DeFi Yield Optimizer / APY So sánh (BSC)', icon: Coins, topic: 'DeFi & Yield', user: 'Holder BNB/stablecoin BSC, portfolio $2K–$50K; muốn earn yield, không có thời gian so protocol.', problem: 'Mỗi protocol báo APR/APY khác nhau; so tay tốn thời gian, dễ bỏ sót.', alt: 'YO Protocol $1M+ earn volume 2 tuần; maxAPY 9 chain; DefiLlama', solution: 'Aggregate APY pool BSC (PancakeSwap, Venus, Alpaca…); chuẩn hóa; gợi ý top 3–5 strategy theo risk; có thể alert khi APY thay đổi mạnh.', visibility: 'Public bảng cơ bản 1 lần/ngày; holder-gated real-time + alert + rebalance.', proof: 'YO $1M+ earn volume 2 tuần đầu; maxAPY hàng nghìn strategy; MOSS DeFi APY Comparison.', techNote: '', reason: 'YO $1M+ volume = demand; BSC holder cần so pool; data có giá trị → holder-gated real-time hợp lý.' },
  { name: 'Alpha / Sentiment từ Social (Twitter + Telegram)', icon: TrendingUp, topic: 'Alpha & Social', user: 'Trader tin alpha từ KOL, community; muốn tín hiệu sớm từ sentiment hoặc mention token.', problem: 'Quá nhiều noise; không có tool tổng hợp sentiment theo token/project; bỏ lỡ mention KOL.', alt: 'LunarCrush, Santiment (trả phí); tự theo dõi list Twitter/Telegram', solution: 'Agent API Twitter (tùy Telegram): list handle KOL/project; extract mention token/project; sentiment đơn giản; alert khi volume mention tăng đột biến hoặc sentiment đổi. Tuân ToS.', visibility: 'Holder-gated là chính (alpha dễ copy); user hold share để access list KOL + alert.', proof: 'LunarCrush, Santiment monetize; CLAWFRIEND_SPEC "Alpha Hunting", "Off-chain Signal"; crypto Twitter kênh alpha quan trọng.', techNote: 'X API Basic ~$100/tháng, Pro $5K. Plan: bắt đầu Basic → scale khi có revenue holder-gated.', reason: 'Khớp spec Alpha Hunting, Off-chain Signal; LunarCrush/Santiment monetize; holder-gated tự nhiên (alpha dễ copy).' },
  { name: 'Token Price Alert (BSC + đa chain)', icon: Bell, topic: 'Crypto Alert', user: 'Trader retail, theo dõi 5–20 token; cần alert giá chạm ngưỡng hoặc biến động lớn.', problem: 'Thị trường 24/7; theo dõi thủ công dễ bỏ lỡ; alert rời rạc DEX/CEX.', alt: 'Drops Bot, TechnicalPing, TokenAlertsBot (Telegram); Bitquery API', solution: 'Monitor giá token BSC DEX; user set ngưỡng (+20%, $X); alert qua Telegram/DM khi đạt; có thể kết hợp volume spike.', visibility: 'Public 1–3 alert; holder-gated unlimited + thêm chain + priority.', proof: 'Nhiều bot Telegram price alert; Bitquery Price Change Signal Bot; thị trường 24/7 → nhu cầu alert.', techNote: '', reason: 'Thị trường 24/7, nhu cầu alert phổ biến; nhiều bot = demand; freemium 1–3 → unlimited gated.' },
  { name: 'KOL / Influencer Track & Mention Alert', icon: MessageSquare, topic: 'Alpha & Social', user: 'Trader/investor theo dõi 10–50 KOL; muốn biết khi KOL mention token/project cụ thể, không scroll timeline cả ngày.', problem: 'Tweet KOL tràn; mention quan trọng chìm trong feed; bỏ lỡ tín hiệu mua/bán hoặc FUD.', alt: 'TweetDeck (free, thủ công); Nansen/Token Metrics (đắt); tự build script', solution: 'Agent theo dõi list handle (KOL/project); detect mention token ticker hoặc contract; alert qua Telegram/DM khi có mention + link tweet. Có thể gắn sentiment bullish/bearish.', visibility: 'Public 3–5 KOL; holder-gated list lớn + filter theo token + priority.', proof: 'Nansen, Arkham có "smart money" = theo dõi KOL; "when did X mention Y" rất phổ biến; KOL call move giá ngắn hạn.', techNote: 'X API Basic ~$100/tháng, enterprise $5K. Plan: bắt đầu Basic → scale khi revenue holder-gated (list KOL lớn).', reason: 'Khác biệt so tool truyền thống; "when did X mention Y" rất phổ biến; drive hold share cho list KOL lớn.' },
  { name: 'Medication / Nhắc uống thuốc thông minh', icon: Pill, topic: 'Sức khỏe', user: 'Người uống thuốc định kỳ (cao huyết áp, tiểu đường, vitamin); hay quên hoặc uống không đúng giờ.', problem: 'App nhắc đơn giản chỉ báo giờ; không nhắc theo bữa ăn (trước/sau ăn); không gợi ý tương tác thuốc.', alt: 'Medisafe, Mango Health, nhắc lịch điện thoại', solution: 'Nhắc theo lịch (sáng/trưa/tối, trước/sau ăn); log "đã uống" qua chat/button; gợi ý tương tác thuốc phổ biến (database public). Có thể tích hợp calendar.', visibility: 'Public 1–3 thuốc, nhắc cơ bản; holder-gated nhiều thuốc + lịch phức tạp + báo cáo tuân thủ.', proof: 'Medisafe 10M+ download; Mango Health dùng trong trial lâm sàng; WHO/CDC nhấn mạnh adherence; aging population → nhu cầu tăng.', techNote: '', reason: 'Medisafe 10M+ download; WHO/CDC nhấn mạnh adherence; tác động xã hội lớn; mở rộng user không crypto.' },
  { name: 'Macro Indicator Digest (CPI, lãi suất, việc làm)', icon: BarChart3, topic: 'Vĩ mô', user: 'Trader/investor quan tâm vĩ mô; muốn tóm tắt số liệu Mỹ/EU (CPI, NFP, FOMC) không đọc 10 bài.', problem: 'Số liệu ra rải ngày; báo chí dài; khó so actual vs consensus nhanh.', alt: 'Investing.com calendar, Forexlive, Bloomberg Terminal (đắt)', solution: 'Scrape/API calendar: khi có release (CPI, NFP, FOMC), tóm tắt 3–5 dòng: số thực tế vs consensus, hawkish/dovish. Có thể alert trước 1h khi có event.', visibility: 'Public digest ngày (top 3 event); holder-gated full calendar + alert + lịch sử so sánh.', proof: 'Forex/crypto react mạnh macro; Bloomberg Terminal, Refinitiv bán data macro = demand; r/Forex, r/investing "CPI summary".', techNote: '', reason: 'Trader/investor react mạnh macro; Bloomberg/Refinitiv bán data = demand; digest ngắn phù hợp agent.' },
  { name: 'No-code Workflow Builder (kết nối app + trigger)', icon: Cpu, topic: 'AI / Bot', user: 'User không code; muốn "khi A xảy ra thì làm B" (email mới → Notion, tweet mention → alert Telegram).', problem: 'Zapier/Make đắt khi nhiều task; không linh hoạt "chat + logic" (hỏi thêm điều kiện).', alt: 'Zapier, Make (Integromat), n8n self-host; API + script tự viết', solution: 'User mô tả bằng ngôn ngữ tự nhiên; agent gợi ý bước (trigger → action); chạy trên ClawFriend agent với connector (email, Slack, Telegram). Holder-gated = workflow phức tạp hoặc nhiều run.', visibility: 'Public 1 workflow, 50 run/tháng; holder-gated nhiều workflow + unlimited run + connector premium.', proof: 'Zapier valuation tỷ USD; Make, n8n tăng trưởng mạnh; no-code/low-code trend; r/automation "alternative to Zapier".', techNote: 'Risk: OAuth/API từng app, rate limit; holder-gated unlimited run cần ước lượng cost backend.', reason: 'Zapier valuation tỷ USD; no-code trend; platform play — nhiều workflow = stickiness + holder-gated run.' },
  { name: 'Meeting Notes → Tasks (biên bản → action items)', icon: FileText, topic: 'Tin tức & Productivity', user: 'PM, nhân viên văn phòng; cần extract action items từ biên bản/họp.', problem: 'Extract action items thủ công tốn thời gian.', alt: 'Otter.ai, Fireflies, Notion AI', solution: 'Upload transcript hoặc paste notes; agent extract task + owner + deadline; output checklist. Optional Notion/Asana API để push tasks.', visibility: 'Public 5 meeting/tháng; holder-gated unlimited + integration Notion/Asana + lưu lịch sử.', proof: 'Otter, Fireflies thu phí = demand; meeting fatigue → cần tool tiết kiệm thời gian; "meeting notes to tasks" search.', techNote: '', reason: 'Otter, Fireflies thu phí; meeting fatigue; productivity use case dễ demo, phù hợp B2B/team.' },
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
            20 skill, 10 chủ đề. Mỗi skill có: Tên, Target user, Vấn đề, Alternative, Giải pháp, Visibility & monetization, Tính khả thi Tech/API, Bằng chứng demand (có nguồn). Public free → holder-gated theo CLAWFRIEND_SPEC.
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
                  <div className="rounded-lg bg-indigo-950/30 p-3 border border-indigo-800/40 md:col-span-2">
                    <span className="text-indigo-400/90 font-medium">Lý do chọn (ưu tiên)</span>
                    <p className="mt-1 text-slate-300 text-xs">{skill.reason}</p>
                  </div>
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

        {/* Tóm tắt theo Visibility — 20 skill (synced with skill-research.md) */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">Tóm tắt theo Visibility (20 skill)</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-700/60 bg-slate-900/40">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/60">
                  <th className="px-3 py-2 text-left font-semibold text-slate-300">#</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-300">Skill</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-300">Đề xuất visibility</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-300">Lý do</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { skill: 'Whale / Smart Money Tracker', vis: 'Public → holder-gated (filter nâng cao)', reason: 'Kéo user free, monetize bằng share.' },
                  { skill: 'Rug Pull Detector', vis: 'Public 5 lần/ngày + holder-gated (unlimited + alert)', reason: 'Lead magnet + drive share.' },
                  { skill: 'DeFi Yield / APY', vis: 'Public (bảng cơ bản) + holder-gated (real-time + alert)', reason: 'Data có giá trị.' },
                  { skill: 'Portfolio Tracker', vis: 'Public 1 ví + holder-gated (đa ví + history)', reason: 'Giống DeBank/Zapper.' },
                  { skill: 'Token Price Alert', vis: 'Public 1–3 alert + holder-gated (unlimited)', reason: 'Freemium.' },
                  { skill: 'New Token Listing Alert', vis: 'Public 1 filter + holder-gated (nhiều filter)', reason: 'Discovery + speed.' },
                  { skill: 'Alpha / Sentiment', vis: 'Chủ yếu holder-gated', reason: 'Alpha dễ copy.' },
                  { skill: 'KOL Mention Alert', vis: 'Public 3–5 KOL + holder-gated (list lớn)', reason: 'Alpha-adjacent.' },
                  { skill: 'Health Metrics Digest', vis: 'Public 1 tuần + holder-gated (lịch sử + export)', reason: 'Data nhạy cảm, premium = history.' },
                  { skill: 'Medication Reminder', vis: 'Public 1–3 thuốc + holder-gated (nhiều + báo cáo)', reason: 'Freemium quen thuộc.' },
                  { skill: 'Macro Indicator Digest', vis: 'Public top 3 event + holder-gated (full + alert)', reason: 'Data có giá trị.' },
                  { skill: 'Fed / ECB Calendar', vis: 'Public lịch + 1 tóm tắt + holder-gated (alert + so sánh)', reason: 'Event-driven demand.' },
                  { skill: 'Match Summary', vis: 'Public 1 giải + holder-gated (nhiều giải + alert)', reason: 'Engagement.' },
                  { skill: 'Fantasy / Tip Assistant', vis: 'Public 1 lần/tuần + holder-gated (nhiều league + chip)', reason: 'Seasonal demand.' },
                  { skill: 'No-code Workflow Builder', vis: 'Public 1 workflow, 50 run + holder-gated (unlimited)', reason: 'Giống Zapier freemium.' },
                  { skill: 'Code Review / Doc', vis: 'Public 5 review/tháng + holder-gated (unlimited + private)', reason: 'Dev tool freemium.' },
                  { skill: 'Tech News Digest', vis: 'Public 1 stack/tuần + holder-gated (nhiều stack + CVE)', reason: 'Newsletter model.' },
                  { skill: 'Changelog Summarizer', vis: 'Public 3 repo + holder-gated (nhiều repo + alert)', reason: 'Dev productivity.' },
                  { skill: 'News Summarizer', vis: 'Public 1 topic/ngày + holder-gated (nhiều topic + nguồn)', reason: 'Content aggregation.' },
                  { skill: 'Meeting Notes → Tasks', vis: 'Public 5 meeting/tháng + holder-gated (unlimited + integration)', reason: 'Productivity.' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-800 last:border-0">
                    <td className="px-3 py-2 text-slate-500 font-mono">{(i + 1).toString().padStart(2, '0')}</td>
                    <td className="px-3 py-2 font-medium text-slate-200">{row.skill}</td>
                    <td className="px-3 py-2 text-blue-400/90">{row.vis}</td>
                    <td className="px-3 py-2 text-slate-400">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tóm tắt visibility — paragraph */}
        <section className="rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-6">
          <h2 className="mb-4 text-lg font-semibold text-indigo-300">Visibility & Share model (cho BGK)</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Phần lớn skill: <strong className="text-blue-400">Public free</strong> (lead magnet, 1–5 lần/ngày hoặc 1 ví, 1 filter) → <strong className="text-green-400">Holder-gated</strong> (unlimited, real-time, nhiều filter, đa ví). Alpha/Sentiment chủ yếu holder-gated (alpha dễ copy). <strong className="text-purple-400">Share model</strong> thay subscription (Nansen/Zapier/Otter trả phí; ClawFriend = hold share để access). Có thể điều chỉnh 10 skill ưu tiên theo GTM (nhấn mạnh crypto trước hoặc đa dạng sức khỏe, productivity).
          </p>
        </section>
      </div>
    </div>
  );
}
