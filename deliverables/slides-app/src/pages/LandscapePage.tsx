import { Target, ExternalLink, TrendingUp, Award, Zap } from 'lucide-react';

// Synced with competitive-landscape.md v2.3
const COMPETITORS = [
  { name: 'ClawHub (OpenClaw)', links: ['https://openclaw.ai', 'https://docs.openclaw.ai/tools/clawhub', 'https://claw-hub.net'], type: 'Skill registry', chain: 'Đa nền tảng', metrics: '5.700+ skill; 1,5M+ download; 180K+ GitHub stars', metricNote: '', desc: 'Framework agent mã nguồn mở + skill registry (cài qua npx clawhub). Không marketplace thương mại; không bonding curve, không cổ phần agent.', monetize: 'Registry miễn phí; không monetization cho creator hay holder-gated.', strengths: 'Kho skill lớn nhất; dev dùng nhiều; semantic search + category; version control, community ratings.', weaknesses: 'Không lớp kinh tế (không shares, không fee); không identity agent hay social; chỉ discovery.', choose: 'Cần tìm skill nhanh, nhiều lựa chọn, free.', notChoose: 'Muốn kiếm tiền từ skill hoặc gắn skill với cổ phần agent.', lesson: 'Discovery + category kéo adoption → mình cần UX tìm skill rõ. Bổ trợ ClawHub: cùng luồng cài (clawhub install), thêm holder-gated + 5% fee + identity agent (shares + social).' },
  { name: 'Heurist Mesh', links: ['https://mesh.heurist.ai', 'https://docs.heurist.ai/heurist-mesh/overview'], type: 'Marketplace skill agent', chain: 'Web3 / đa chain', metrics: '25 provider; 100 tool; 40 agent; X402 + ERC-8004', metricNote: '', desc: 'Marketplace skill cho agent Web3: tool crypto/blockchain; REST, x402 trả theo lượt, MCP.', monetize: 'API key; x402 trả theo request (stablecoin).', strengths: 'Crypto-native (ví, Pump.fun, DexScreener); reputation on-chain; tích hợp nhanh.', weaknesses: 'Tập trung data/tool; không cổ phần agent, không bonding curve.', choose: 'Agent cần data/tool Web3 chuẩn, trả theo lượt.', notChoose: 'Cần giao dịch share agent hoặc social stream.', lesson: 'Pricing: x402 pay-per-request → dev chấp nhận trả theo lượt; mình có thể hybrid (free tier + pay-per-use). ClawFriend khác bằng identity agent + shares + social và skill holder-gated.' },
  { name: 'SkillGem', links: ['https://skillgem.ai'], type: 'Skill agent + monetization', chain: 'x402 / ERC-8004', metrics: '20+ nền tảng; x402 pay-per-use', metricNote: 'Chưa công bố user count/revenue/download; số liệu = feature (số nền tảng, cơ chế thanh toán), không phải business metric.', desc: 'Đóng gói chuyên môn thành skill cho agent (no code); micropayment x402; reputation ERC-8004.', monetize: 'x402 trả theo lượt dùng (micropayment on-chain).', strengths: 'No-code; đa nền tảng; thanh toán + reputation on-chain.', weaknesses: 'Không token hóa agent/shares; không bonding curve; skill đứng riêng, không holder-gated.', choose: 'Creator muốn bán skill no-code, trả theo use.', notChoose: 'Cần gắn skill với share agent hoặc holder-gated.', lesson: 'GTM: SkillGem đa nền tảng (Claude, Cursor, Slack…) → mình ưu tiên 1–2 platform (vd Cursor/ClawHub) rồi mở rộng. No-code + pay-per-use thu hút creator; ClawFriend gắn skill với agent (holder-gated) → demand skill = demand share.' },
  { name: 'Hedera Agent Marketplace', links: ['https://hedera.opspawn.com', 'https://opspawn.com', 'https://github.com/hedera-dev/hedera-agent-skills'], type: 'Agent + skill registry', chain: 'Hedera', metrics: '3 plugin/skills (agent-kit, HTS, hackathon-helper); GitHub 4 stars, 1 fork; HCS-26', metricNote: 'Hedera ecosystem chưa công bố rộng metric user count/TVL; số liệu dùng là repo + số plugin.', desc: 'Marketplace agent AI privacy trên Hedera: skill registry HCS-26, messaging HCS-10, privacy HCS-19, feedback ERC-8004. OpSpawn vận hành.', monetize: 'Không rõ công khai (ecosystem Hedera).', strengths: 'Privacy, compliance; skill registry có chuẩn; tích hợp Hedera Agent Kit.', weaknesses: 'Gắn Hedera; ecosystem nhỏ hơn BSC/L2; không bonding curve hay social công khai.', choose: 'Cần privacy/compliance hoặc build trên Hedera.', notChoose: 'Cần BSC, bonding curve, hoặc social stream công khai.', lesson: 'Hedera đẩy privacy/compliance (GDPR) → segment enterprise; mình focus BSC + retail/crypto-native. ClawFriend focus BSC, bonding curve, social (Twitter); không cạnh tranh trên Hedera.' },
  { name: 'ClawMarket', links: ['https://www.claw-market.xyz', 'https://www.claw-market.xyz/docs'], type: 'Skill marketplace paid/free', chain: 'Base, Ethereum', metrics: '15+ skills; USDC escrow', metricNote: 'Chưa công bố user count/GMV; (1) capacity (số skill), (2) feature (cơ chế thanh toán).', desc: 'Skill marketplace cho AI agent trên Base + Ethereum: wallet auth, USDC escrow, free + paid skills, API-first.', monetize: 'USDC qua escrow on-chain; free và paid skills.', strengths: 'Crypto-native (wallet, USDC); API cho agent autonomous; Base + Ethereum.', weaknesses: 'Số skill còn ít (15+); không bonding curve/share agent; không social stream.', choose: 'Cần mua skill bằng USDC trên Base/ETH, API-first.', notChoose: 'Cần BSC, shares agent, holder-gated hoặc social.', lesson: 'UX: ClawMarket dùng USDC escrow + download token (24h hoặc permanent) → mình tham khảo escrow/claim cho holder-gated. ClawFriend thêm BSC + shares + holder-gated + social.' },
  { name: 'MoltBazaar', links: ['https://moltbazaar.ai'], type: 'Agent marketplace + skills', chain: 'Base', metrics: 'ERC-8004; openclaw-skills; USDC + x402', metricNote: 'Chưa công bố metric user count/volume; số liệu = feature/capacity (identity, verified skills, payment).', desc: 'Agent marketplace trên Base: người thuê agent làm task; agent ERC-8004 identity; verified skills từ openclaw-skills; USDC + x402; tasks, bounties, subscriptions.', monetize: 'USDC on Base, escrow; x402 agent-to-agent; bounties, subscriptions.', strengths: 'Agent có identity + verified skills; pay-per-task; Base ecosystem.', weaknesses: 'Focus "hire agent" chứ không focus skill marketplace cho creator; không bonding curve share agent; không BSC.', choose: 'Cần thuê agent làm task trên Base, trả USDC/x402.', notChoose: 'Cần bán skill holder-gated hoặc giao dịch share agent (bonding curve).', lesson: 'Segment: MoltBazaar = "hire agent làm task" (bounty, subscription); mình = "creator bán skill + user mua share". Verified skills từ openclaw-skills → ClawFriend nên giữ tương thích install flow.' },
];

export default function LandscapePage() {
  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-950/40 px-4 py-1.5 text-sm font-medium text-blue-300">
            <Target className="h-4 w-4" /> Deliverable 1 — 25%
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Competitive Landscape
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Phân tích 6 đối thủ Web3 skill/agent marketplace: số liệu có nguồn, monetization, điểm mạnh/yếu, user chọn/không chọn. Kết luận: ClawFriend khác ở đâu, segment bỏ ngỏ.
          </p>
        </section>

        {/* Overview table */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <TrendingUp className="h-5 w-5" /> Tổng quan 6 đối thủ
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 bg-slate-900/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-800/80">
                  <th className="px-4 py-3 font-semibold text-slate-200">#</th>
                  <th className="px-4 py-3 font-semibold text-slate-200">Tên</th>
                  <th className="px-4 py-3 font-semibold text-slate-200">Loại</th>
                  <th className="px-4 py-3 font-semibold text-slate-200">Chain</th>
                  <th className="px-4 py-3 font-semibold text-slate-200">Số liệu chính</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-800/30">
                    <td className="px-4 py-3 text-slate-500">{i + 1}</td>
                    <td className="px-4 py-3 font-medium text-white">{c.name}</td>
                    <td className="px-4 py-3 text-slate-400">{c.type}</td>
                    <td className="px-4 py-3 text-slate-400">{c.chain}</td>
                    <td className="px-4 py-3 text-green-400/90">{c.metrics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Competitor cards */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <Award className="h-5 w-5" /> Phân tích từng đối thủ
          </h2>
          <div className="space-y-6">
            {COMPETITORS.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm transition hover:border-slate-600"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{c.name}</h3>
                  <div className="flex gap-2">
                    {c.links.map((url, j) => (
                      <a
                        key={j}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-800 px-3 py-1.5 text-xs text-blue-400 hover:bg-slate-700"
                      >
                        Link <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-slate-400">{c.desc}</p>
                {c.metricNote ? (
                  <p className="mb-3 rounded-lg bg-amber-950/30 border border-amber-800/40 px-3 py-2 text-xs text-amber-300/90">
                    Lưu ý: {c.metricNote}
                  </p>
                ) : null}
                <div className="grid gap-3 text-sm md:grid-cols-2">
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <span className="text-slate-500">Monetize:</span>{' '}
                    <span className="text-slate-300">{c.monetize}</span>
                  </div>
                  <div className="rounded-lg bg-green-950/30 p-3 border border-green-800/40">
                    <span className="text-green-400/80">Điểm mạnh:</span>{' '}
                    <span className="text-slate-300">{c.strengths}</span>
                  </div>
                  <div className="rounded-lg bg-amber-950/30 p-3 border border-amber-800/40">
                    <span className="text-amber-400/80">Điểm yếu:</span>{' '}
                    <span className="text-slate-300">{c.weaknesses}</span>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <span className="text-slate-500">User chọn khi:</span>{' '}
                    <span className="text-slate-300">{c.choose}</span>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <span className="text-slate-500">User không chọn khi:</span>{' '}
                    <span className="text-slate-300">{c.notChoose}</span>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3 md:col-span-2">
                    <span className="text-blue-400/90">Bài học cho ClawFriend:</span>{' '}
                    <span className="text-slate-300">{c.lesson}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: So sánh & insight */}
        <section className="mb-12 rounded-2xl border border-slate-600 bg-slate-900/40 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <TrendingUp className="h-5 w-5" /> So sánh chain & pricing
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><strong className="text-slate-200">Chain:</strong> ClawHub/Heurist/SkillGem = đa nền tảng; ClawMarket/MoltBazaar = Base (+ ETH); Hedera = Hedera. <strong className="text-amber-400">Không ai focus BSC.</strong></li>
            <li><strong className="text-slate-200">Pricing:</strong> ClawHub = free; Heurist/SkillGem = x402 pay-per-request/use; ClawMarket = USDC escrow; MoltBazaar = USDC + x402; Hedera = không rõ.</li>
            <li><strong className="text-slate-200">Có chỗ cho người mới?</strong> <span className="text-green-400">Có.</span> Thị trường nascent; không ai có combo BSC + bonding curve + holder-gated skill + social.</li>
          </ul>
        </section>

        {/* Section 5: Kết luận & Định vị */}
        <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 p-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <Zap className="h-5 w-5" /> Kết luận & Định vị
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><strong className="text-white">Thị trường:</strong> Nascent. TAM AI agents ~$50B/2030, ~$183B/2033 (CAGR ~45–50%) — <a href="https://grandviewresearch.com/press-release/global-ai-agents-market-report" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Grand View Research</a>. Phân khúc Web3 skill/agent marketplace chưa định hình; chưa ai gom đủ identity + bonding curve + skill market (holder-gated) + social.</li>
            <li><strong className="text-white">Dẫn đầu:</strong> ClawHub (5.700+ skill, 1,5M+ download, 180K+ stars); Heurist (100 tool, 40 agent). BSC chưa có player.</li>
            <li><strong className="text-white">Gap:</strong> (1) BSC. (2) Bonding curve + share agent. (3) Holder-gated skill. (4) Social stream trong cùng nền tảng với skill market.</li>
            <li><strong className="text-white">Marketplace mình khác ở đâu:</strong> ClawHub chỉ discovery → mình + monetization (5% fee) + share agent + social. Heurist không BSC/bonding curve → mình BSC + bonding curve + holder-gated. ClawMarket 15+ skill, không share agent → mình BSC + shares + holder-gated. <strong className="text-green-400">Tổng thể: chưa ai làm BSC + bonding curve + skill market (holder-gated) + social trong một hệ sinh thái.</strong></li>
            <li><strong className="text-white">Segment bỏ ngỏ:</strong> BSC; agent economy đầy đủ (bonding curve + holder-gated + social); creator monetization (5% fee + holder-gated).</li>
            <li><strong className="text-white">Lợi thế:</strong> Một nền tảng deploy → verify → capitalize → launch (TGE) → execute (social + skill); BSC chưa có đối thủ trực tiếp; holder-gated skill đẩy demand mua share → flywheel.</li>
            <li><strong className="text-amber-400/90">Thua hiện tại:</strong> Số skill thua ClawHub (5.7K vs mới build); độ trưởng thành tool thua Heurist (100 tool, 40 agent). Giảm thiểu: agent-first + skill market + BSC + distribution (D3).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
