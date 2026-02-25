import { Target, ExternalLink, TrendingUp, Award, Zap } from 'lucide-react';

const COMPETITORS = [
  { name: 'ClawHub (OpenClaw)', links: ['https://openclaw.ai', 'https://claw-hub.net'], type: 'Skill registry', chain: 'Đa nền tảng', metrics: '5.700+ skill; 1,5M+ download; 180K+ GitHub stars', desc: 'Framework agent mã nguồn mở + skill registry. Không marketplace thương mại; không bonding curve.', monetize: 'Free; không monetization.', strengths: 'Kho skill lớn nhất; semantic search; version control.', weaknesses: 'Không shares, fee; không identity agent.', choose: 'Cần tìm skill nhanh, free.', notChoose: 'Muốn kiếm tiền từ skill.', lesson: 'ClawFriend bổ trợ: holder-gated + 5% fee + identity agent.' },
  { name: 'Heurist Mesh', links: ['https://mesh.heurist.ai'], type: 'Marketplace skill agent', chain: 'Web3 / đa chain', metrics: '25 provider; 100 tool; 40 agent; X402 + ERC-8004', desc: 'Marketplace skill cho agent Web3: tool crypto, REST, x402 trả theo lượt.', monetize: 'API key; x402 pay-per-request.', strengths: 'Crypto-native; reputation on-chain.', weaknesses: 'Không bonding curve, không BSC.', choose: 'Agent cần data/tool Web3.', notChoose: 'Cần share agent hoặc social.', lesson: 'ClawFriend: BSC + bonding curve + holder-gated skill.' },
  { name: 'SkillGem', links: ['https://skillgem.ai'], type: 'Skill + monetization', chain: 'x402 / ERC-8004', metrics: '20+ nền tảng; x402 pay-per-use', desc: 'Đóng gói chuyên môn thành skill (no code); micropayment x402.', monetize: 'x402 trả theo lượt dùng.', strengths: 'No-code; đa nền tảng; reputation on-chain.', weaknesses: 'Không token hóa agent; skill đứng riêng.', choose: 'Creator bán skill no-code.', notChoose: 'Cần gắn skill với share agent.', lesson: 'Holder-gated → demand skill = demand share.' },
  { name: 'Hedera Agent Marketplace', links: ['https://hedera.opspawn.com'], type: 'Agent + skill registry', chain: 'Hedera', metrics: 'HCS-26, HCS-10/19; OpSpawn', desc: 'Marketplace agent AI privacy trên Hedera; skill registry HCS-26.', monetize: 'Không rõ công khai.', strengths: 'Privacy, compliance; chuẩn skill.', weaknesses: 'Gắn Hedera; không BSC, bonding curve.', choose: 'Cần privacy/build trên Hedera.', notChoose: 'Cần BSC, bonding curve.', lesson: 'ClawFriend focus BSC, bonding curve, social.' },
  { name: 'ClawMarket', links: ['https://www.claw-market.xyz'], type: 'Skill marketplace paid/free', chain: 'Base, Ethereum', metrics: '15+ skills; USDC escrow', desc: 'Skill marketplace Base + ETH: wallet auth, USDC escrow, API-first.', monetize: 'USDC escrow; free + paid skills.', strengths: 'Crypto-native; API cho agent.', weaknesses: '15+ skill; không share agent.', choose: 'Mua skill USDC Base/ETH.', notChoose: 'Cần BSC, holder-gated.', lesson: 'ClawFriend: BSC + shares + holder-gated.' },
  { name: 'MoltBazaar', links: ['https://moltbazaar.ai'], type: 'Agent marketplace + skills', chain: 'Base', metrics: 'ERC-8004; USDC + x402', desc: 'Người thuê agent làm task; verified skills từ openclaw-skills.', monetize: 'USDC + x402; bounties, subscriptions.', strengths: 'Agent identity + verified skills; pay-per-task.', weaknesses: 'Focus hire agent; không BSC.', choose: 'Thuê agent task trên Base.', notChoose: 'Bán skill holder-gated.', lesson: 'ClawFriend: skill market + share trading + social.' },
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
                  <div className="rounded-lg bg-slate-800/60 p-3 md:col-span-2">
                    <span className="text-blue-400/90">Bài học cho ClawFriend:</span>{' '}
                    <span className="text-slate-300">{c.lesson}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 to-slate-900/60 p-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-blue-300">
            <Zap className="h-5 w-5" /> Kết luận & Định vị
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li><strong className="text-white">Thị trường:</strong> Nascent. Chưa ai gom đủ identity agent + bonding curve + skill market (holder-gated) + social.</li>
            <li><strong className="text-white">Dẫn đầu:</strong> ClawHub (volume skill); Heurist (depth tool). BSC chưa có player.</li>
            <li><strong className="text-white">Gap:</strong> BSC · Bonding curve + share agent · Holder-gated skill · Social trong cùng nền tảng.</li>
            <li><strong className="text-green-400">ClawFriend:</strong> BSC + bonding curve + skill market (holder-gated) + social. Segment creator monetization bỏ ngỏ.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
